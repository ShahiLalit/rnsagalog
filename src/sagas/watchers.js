import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga, logoutSaga } from './auth';

import { types } from '../actions/types';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.LOGOUT, logoutSaga);
}