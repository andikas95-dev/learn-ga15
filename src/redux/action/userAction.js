import { GET_USER, CREATE_USER, EDIT_USER, DELETE_USER } from '../types';

export const getUser = () => {
  return {
    type: `${GET_USER}_LOADING`,
  };
};

export const createUser = (data) => {
  return {
    type: `${CREATE_USER}_LOADING`,
    data,
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
    id
  };
};