import { GET_USER, CREATE_USER, EDIT_USER, DELETE_USER } from '../types';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_USER}_LOADING`:
      return {
        ...state,
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_USER}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    case `${CREATE_USER}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${CREATE_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${CREATE_USER}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    case `${EDIT_USER}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${EDIT_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${EDIT_USER}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
      case `${DELETE_USER}_LOADING`:
        return {
          ...state,
          isLoading: true,
        };
      case `${DELETE_USER}_FULFILLED`:
        return {
          ...state,
          isLoading: false,
        };
      case `${DELETE_USER}_ERROR`:
        return {
          ...state,
          isLoading: false,
          error: error,
        };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
