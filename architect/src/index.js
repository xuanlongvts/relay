import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

// import store from './app/stores';
import Routes from './app/routers';

ReactDOM.render(
    <div className="App">
        <Routes />
    </div>,
    document.getElementById('root'),
);
registerServiceWorker();
