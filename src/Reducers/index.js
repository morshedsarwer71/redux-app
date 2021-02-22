import counterReducer from './counter';
import loggedReducer from './counter';

import { combineReducers } from 'redux'

const reducers = combineReducers({
    counterReducer,
    loggedReducer
});

export default reducers;