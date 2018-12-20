import numberOfPullRequest from './numberOfPullRequest';
import { combineReducers } from 'redux';
import inputReducer from './inputReducer';

const rootReducer = combineReducers({ numberOfPullRequest, inputReducer });
export default rootReducer;
