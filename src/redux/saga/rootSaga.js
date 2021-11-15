import { all } from '@redux-saga/core/effects';
import { watchGetUser, watchCreateUser, watchEditUser, watchDeleteUser } from './userSaga';

export default function* rootSaga() {
  yield all([watchGetUser(), watchCreateUser(), watchEditUser(), watchDeleteUser()]);
}
