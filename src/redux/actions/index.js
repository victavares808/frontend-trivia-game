export const SET_IMG = 'SET_IMG';

export const SET_USER_NAME = 'SET_USER_NAME';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const SET_ASSERTIONS_NUMBER = 'SET_ASSERTIONS_NUMBER';

export const SET_SCORE = 'SET_SCORE';

export const setUserImg = (img) => ({
  type: SET_IMG,
  payload: img,
});

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});
