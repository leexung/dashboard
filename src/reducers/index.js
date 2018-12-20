import {combineReducers} from 'redux';
import inputReducer from './inputReducer';
import numberOfPullRequest from './numberOfPullRequest';

const rootReducer = combineReducers({ numberOfPullRequest, inputReducer });
export default rootReducer;
