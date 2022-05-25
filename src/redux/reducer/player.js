const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

export default playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_USER_NAME':
    return {
      ...state,
      name: action.payload,
    };
  case 'SET_USER_EMAIL':
    return {
      ...state,
      gravatarEmail: action.payload,
    };
  case 'SET_ASSERTIONS_NUMBER':
    return {
      ...state,
      assertions: action.payload,
    };
  case 'SET_SCORE':
    return {
      ...state,
      score: action.payload,
    };
  default:
    return state;
  }
};
