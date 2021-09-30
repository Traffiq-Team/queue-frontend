import { SET_REDIRECT_URL } from "./actions";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_REDIRECT_URL:
      return { ...state, redirectUrl: payload };
    default:
      return;
  }
};

export default reducer;