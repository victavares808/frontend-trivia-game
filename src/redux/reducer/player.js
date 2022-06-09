import {
  SET_IMG,
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_ASSERTIONS_NUMBER,
  SET_SCORE,
  SET_SCORE_TO_ZERO,
} from '../actions/index';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  img: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USER_NAME:
    return {
      ...state,
      name: action.payload,
    };
  case SET_USER_EMAIL:
    return {
      ...state,
      gravatarEmail: action.payload,
    };
  case SET_ASSERTIONS_NUMBER:
    return {
      ...state,
      assertions: action.payload,
    };
  case SET_SCORE:
    return {
      ...state,
      score: action.payload + state.score,
      assertions: state.assertions + 1,
    };
  case SET_IMG:
    return {
      ...state,
      img: action.payload,
    };
  case SET_SCORE_TO_ZERO:
    return {
      ...state,
      score: 0,
      assertions: 0,
    };
  default:
    return state;
  }
};

export default player;
