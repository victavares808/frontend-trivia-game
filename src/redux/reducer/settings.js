import { CHANGE_BACKGROUND_COLOR } from '../actions';

const INITIAL_STATE = {
  backgroundColor: 'dark',
};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHANGE_BACKGROUND_COLOR:
    return {
      ...state,
      backgroundColor: action.payload,
    };
  default: return state;
  }
};

export default settings;
