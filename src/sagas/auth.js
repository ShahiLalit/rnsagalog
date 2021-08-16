import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService, logoutUserService } from '../services/auth';
import * as NavigationService from './../services/nav';
import { types } from '../actions/types'

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
    NavigationService.navigate("Home");
  } catch (error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response });
    NavigationService.navigate("Home");
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

export function* logoutSaga(payload) {
  try {
    const response = yield call(logoutUserService, payload);
    yield put({ type: types.LOGOUT_SUCCESS, response })
    NavigationService.navigate("Signin");
  } catch (error) {
    yield put({ type: types.LOGOUT_ERROR, error })
  }
}