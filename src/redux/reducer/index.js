import { combineReducers } from 'redux';
import playerReducer from './player';
import quizReducer from './quiz';

const rootReducer = combineReducers({ playerReducer, quizReducer });

export default rootReducer;
