import { combineReducers } from 'redux';

const INITIAL_STATE = {
  email: 'trybe@trybe.com',
};

const EMAIL_IMG = 'EMAIL_IMG';

export const emailImgState = (img) => ({
  type: EMAIL_IMG,
  payload: img,
});

const feedback = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case EMAIL_IMG:
    return {
      ...state,
      img: payload,
    };
  default: return state;
  }
};

const rootReducer = combineReducers({ feedback });

export default rootReducer;
