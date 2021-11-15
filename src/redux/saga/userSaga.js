import axios from 'axios';
import { GET_USER, CREATE_USER, EDIT_USER, DELETE_USER } from '../types';
import { put, takeEvery } from '@redux-saga/core/effects';

function* getUser() {
  try {
    const res = yield axios.get('http://localhost:3001/users');
    yield put({
      type: `${GET_USER}_FULFILLED`,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: `${GET_USER}_ERROR`,
      error: err,
    });
  }
}

function* createUser(action) {
  const { data } = action;
  try {
    yield axios.post('http://localhost:3001/users', data);
    yield put({
      type: `${GET_USER}_LOADING`,
    });
  } catch (err) {
    yield put({
      type: `${CREATE_USER}_ERROR`,
      error: err,
    });
  }
}

function* editUser(action) {
  const { data, id } = action;
  try {
    yield axios.put(`http://localhost:3001/users/${id}`, data);
    yield put({
      type: `${GET_USER}_LOADING`,
    });
  } catch (err) {
    yield put({
      type: `${EDIT_USER}_ERROR`,
      error: err,
    });
  }
}


function* deleteUser(action) {
  const { id } = action;
  try {
    yield axios.delete(`http://localhost:3001/users/${id}`);
    yield put({
      type: `${GET_USER}_LOADING`,
    });
  } catch (err) {
    yield put({
      type: `${DELETE_USER}_ERROR`,
      error: err,
    });
  }
}
export function* watchGetUser() {
  yield takeEvery(`${GET_USER}_LOADING`, getUser);
}
export function* watchCreateUser() {
  yield takeEvery(`${CREATE_USER}_LOADING`, createUser);
}

export function* watchEditUser() {
  yield takeEvery(`${EDIT_USER}_LOADING`, editUser);
}

export function* watchDeleteUser() {
  yield takeEvery(`${DELETE_USER}_LOADING`, deleteUser);
}
