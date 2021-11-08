import axios from 'axios';
import { GET_USER } from '../types';
import { put, takeEvery } from '@redux-saga/core/effects';

function* getUser() {
  try {
    const res = yield axios.get('https://jsonplaceholder.typicode.com/users');
    yield put({
      type: `${GET_USER}_FULFILLED`,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: `${GET_USER}_FAILED`,
      error: err,
    });
  }
}

export function* watchGetUser() {
  yield takeEvery(`${GET_USER}_LOADING`, getUser);
}
