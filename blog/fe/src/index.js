import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Switch } from 'react-router-dom';
import CreatePost from './components/CreatePost';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <App path="/" exact={true} />
            <CreatePost path="/create-post" exact={true} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
