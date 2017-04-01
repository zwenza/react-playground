// @flow
import React, {Component} from 'react';
import './App.css';

class App extends Component {
    test = (a: string, b: string) => {
        console.log(a, b);
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {this.test(1, '2')}
            </div>
        );
    }
}

export default App;
