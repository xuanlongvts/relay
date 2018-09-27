import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createConnectedRouter from 'found/lib/createConnectedRouter';
import createRender from 'found/lib/createRender';
import resolver from 'found/lib/resolver';

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
        <ConnectedRouter resolver={resolver} />
    </Provider>,
    document.getElementById('root'),
);
