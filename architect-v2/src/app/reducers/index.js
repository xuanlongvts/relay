import foundReducer from 'found/lib/foundReducer';
import { combineReducers } from 'redux';

import reducerMyComApi from '../components/myComApi/reducer';
import reducerLoading from '../components/_base/loading/reducer';

const rootReducer = combineReducers({
    found: foundReducer,
    reducerMyComApi,
    reducerLoading,
});

export default rootReducer;
