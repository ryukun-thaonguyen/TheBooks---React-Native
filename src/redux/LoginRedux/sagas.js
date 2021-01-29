/* eslint-disable prettier/prettier */
import {put, call, takeLatest} from 'redux-saga/effects';
import LoginActions, {LoginTypes} from './actions';
import {startup} from '../AppRedux/actions';
import {userLoginApi} from '../../api/apiUser';

export function* userLoginSaga({data}) {
  console.log(data);
  try {
    const response = yield call(userLoginApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    console.log("token response " + newResponse.token);
    yield put(LoginActions.userLoginSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error);
    alert("Login Fail");
    yield put(LoginActions.userLoginFailure(error));
  }
}

const loginSagas = () => [takeLatest(LoginTypes.USER_LOGIN, userLoginSaga)];

export default loginSagas();
