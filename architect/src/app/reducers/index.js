import foundReducer from 'found/lib/foundReducer';
import { combineReducers } from 'redux';

import reducerMyComApi from '../components/myComApi/reducer';

const rootReducer = combineReducers({
    found: foundReducer,
    reducerMyComApi,
});

export default rootReducer;
