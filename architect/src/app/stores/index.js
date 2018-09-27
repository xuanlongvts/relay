import { createStore, compose } from 'redux';

import createMatchEnhancer from 'found/lib/createMatchEnhancer';
import Matcher from 'found/lib/Matcher';

import createHistoryEnhancer from 'farce/lib/createHistoryEnhancer';
import BrowserProtocol from 'farce/lib/BrowserProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import FarceActions from 'farce/lib/Actions';

import createSagaMiddleware from 'redux-saga';

import ENV from '../../config';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
// import RoutersAuthen from '../routers/RoutersAuthen';
import RoutersMain from '../routers/RouterMain';

const sagaMiddleware = createSagaMiddleware();

const createHistoryEnhancerFunc = createHistoryEnhancer({
    protocol: new BrowserProtocol(),
    middlewares: [queryMiddleware, sagaMiddleware],
});
const createMatchEnhancerFunc = createMatchEnhancer(new Matcher(RoutersMain));
const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

let composeEnhancers = compose(
    createHistoryEnhancerFunc,
    createMatchEnhancerFunc,
);

ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (composeEnhancers = compose(
        createHistoryEnhancerFunc,
        createMatchEnhancerFunc,
        REDUX_DEVTOOLS,
    ));

const store = createStore(rootReducer, composeEnhancers);

sagaMiddleware.run(rootSaga);

store.dispatch(FarceActions.init());

export default store;
