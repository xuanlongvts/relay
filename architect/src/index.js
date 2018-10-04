import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Resolver } from 'found-relay';

import createConnectedRouter from 'found/lib/createConnectedRouter';
import createRender from 'found/lib/createRender';

import Environment from './relay/env';

import store from './app/stores';

const ConnectedRouter = createConnectedRouter({
    render: createRender({
        renderError: (
            { error }, // eslint-disable-line react/prop-types
        ) => <div>{error.status === 404 ? 'Not found' : 'Error'}</div>,
    }),
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter resolver={new Resolver(Environment)} />
    </Provider>,
    document.getElementById('root'),
);
