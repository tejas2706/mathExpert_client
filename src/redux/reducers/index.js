import { combineReducers } from 'redux';
import selectedFieldsReducer from './userSelected';

let rootReducer = combineReducers({ selectedFieldsReducer });

export default rootReducer;
