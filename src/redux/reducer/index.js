import { combineReducers } from 'redux';
import player from './player';
import quizReducer from './quiz';

const rootReducer = combineReducers({ player, quizReducer });

export default rootReducer;
