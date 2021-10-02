import { SET_LOADING, SET_REDIRECT_URL, SET_ERROR } from "./actions";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_REDIRECT_URL:
      return { ...state, redirectUrl: payload, error: null };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return;
  }
};

export default reducer;