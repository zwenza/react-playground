// @flow
import React, {Component} from 'react';

class App extends Component {
    testFlow = (a: string, b: string) => {
        console.log(a, b);
    };

    testOptionalTypes = (a?: string = 'test', b: number) => {
        console.log(a, b);
    };

    testLiteralTypes = (message: 'info' | 'warning' | 'error') => {
        console.log(message);
    };

    testMixedTypes = (value: mixed) => {
        // console.log("" + value); ERROR
        if(typeof value === 'string'){
            console.log('' + value);
        } else {
            console.log(value);
        }
    };

    testMaybeTypes = (value: ?number) => {
        // console.log(value * 2); ERROR
        if (value != null) {
            return value * 2;
        }
    };

    testFunctionTypes = (message: ?string): ?string => {
        return message;
    };

    render() {
        return (
            <div>
                {this.testFlow('1', '2')}
                {this.testOptionalTypes(undefined, 1)}
                {this.testLiteralTypes('info')}
                {this.testMixedTypes(1)}
                {this.testMaybeTypes(undefined)}
                {this.testFunctionTypes('test')}
            </div>
        );
    }
}

export default App;
