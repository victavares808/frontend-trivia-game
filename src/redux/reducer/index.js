import { combineReducers } from 'redux';
import player from './player';
import quizReducer from './quiz';
import settings from './settings';

const rootReducer = combineReducers({ player, quizReducer, settings });

export default rootReducer;
