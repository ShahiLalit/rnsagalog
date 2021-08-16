import { types } from '../actions/types';

const initialState = {
  userToken: null,
  error: {},
  loading: false
}

export default function (state = initialState, action) {
  const response = action.response;

  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
    case types.REGISTER_USER:
      return { ...state, loading: true };
    case types.LOGIN_USER_SUCCESS:
    case types.REGISTER_USER_SUCCESS:
      return { ...state, ...response, loading: false };
    case types.LOGIN_USER_ERROR:
      return { ...state, ...response };
    case types.LOGOUT:
      return { ...initialState };
    case types.LOGIN_USER_ERROR:
      return { ...state, error: { ...response }, loading: false };
    default:
      return state;
  }
};