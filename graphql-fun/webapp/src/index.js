import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({uri: 'http://localhost:4000/api'});
const client = new ApolloClient({networkInterface: networkInterface});

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
