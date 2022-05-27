import { SET_QUIZ } from '../actions';

const INITIAL_STATE = {
  quests: [],
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_QUIZ:
    return {
      ...state,
      quests: action.payload,
    };
  default: return state;
  }
};

export default quizReducer;
