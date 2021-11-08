import { all } from '@redux-saga/core/effects';
import { watchGetUser } from './userSaga';

export default function* rootSaga() {
  yield all([watchGetUser()]);
}
