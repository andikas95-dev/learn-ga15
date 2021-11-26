import axios from 'axios';
import { GET_USER, CREATE_USER, EDIT_USER, DELETE_USER } from '../types';

export const getUser = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_USER}_LOADING` });

    axios({
      method: 'GET',
      url: 'http://localhost:3001/users',
    })
      .then((response) => {
        dispatch({
          type: `${GET_USER}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_USER}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const createUser = (data) => {
  return (dispatch) => {
    dispatch({ type: `${CREATE_USER}_LOADING` });

    axios({
      method: 'POST',
      url: 'http://localhost:3001/users',
      data,
    })
      .then(() => {
        dispatch({
          type: `${CREATE_USER}_FULFILLED`,
          // payload: response.data,
        });
        dispatch(getUser());
      })
      .catch((error) => {
        dispatch({
          type: `${CREATE_USER}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const editUser = (id, data) => {
  return {
    type: `${EDIT_USER}_LOADING`,
    id,
    data,
  };
};

export const deleteUser = (id) => {
  return {
    type: `${DELETE_USER}_LOADING`,
    id,
  };
};
