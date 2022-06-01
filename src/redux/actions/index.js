export const SET_IMG = 'SET_IMG';

export const SET_USER_NAME = 'SET_USER_NAME';

export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const SET_ASSERTIONS_NUMBER = 'SET_ASSERTIONS_NUMBER';

export const SET_SCORE = 'SET_SCORE';

export const SET_QUIZ = 'SET_QUIZ';

export const SET_SCORE_TO_ZERO = 'SET_SCORE_TO_ZERO';

export const CHANGE_BACKGROUND_COLOR = 'CHANGE_BACKGROUND_COLOR';

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

export const setQuiz = (quiz) => ({
  type: SET_QUIZ,
  payload: quiz.results,
});

export const setScore = (score) => ({
  type: SET_SCORE,
  payload: score,
});

export const setScoreToZero = () => ({
  type: SET_SCORE_TO_ZERO,
});

export const changeBackgroundColor = (backgroundColor) => ({
  type: CHANGE_BACKGROUND_COLOR,
  payload: backgroundColor,
});
