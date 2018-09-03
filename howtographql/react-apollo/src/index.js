import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_TOKEN } from './constants';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN);

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000',
    options: {
        reconnect: true,
        connectionParams: {
            authToken: localStorage.getItem(AUTH_TOKEN)
        }
    }
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    authLink.concat(httpLink)
);

/**
 *
 * split is used to “route” a request to a specific middleware link. It takes three arguments, the first one is a test function which returns a boolean.
 * The remaining two arguments are again of type ApolloLink. If test returns true, the request will be forwarded to the link passed as the second argument.
 * If false, to the third one.
 */

const client = new ApolloClient({
    // link: authLink.concat(httpLink), // for http
    link, // for websocket
    cache: new InMemoryCache()
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
