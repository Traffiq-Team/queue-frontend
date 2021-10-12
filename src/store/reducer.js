import { SET_LOADING, SET_REDIRECT_URL, SET_ERROR, SET_ESTIMATED_WAIT_TIME, SET_SPECIAL_TITLE } from './actions';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_REDIRECT_URL:
      return { ...state, redirectUrl: payload };
    case SET_ESTIMATED_WAIT_TIME:
      return { ...state, estimatedWaitTime: payload };
    case SET_SPECIAL_TITLE:
      return { ...state, specialTitle: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
  }
};

export default reducer;
