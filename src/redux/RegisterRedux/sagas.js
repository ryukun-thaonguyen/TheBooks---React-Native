/* eslint-disable prettier/prettier */
import {put, call, takeLatest} from 'redux-saga/effects';
import RegisterActions, {RegisterTypes} from './actions';
import {userRegisterApi} from '../../api/apiUser';

export function* userRegisterSaga({data}) {
  console.log(data);
  try {
    const response = yield call(userRegisterApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(RegisterActions.userRegisterSuccess(newResponse));
    alert('User Register Success');
  } catch (error) {
    console.log(error);
    alert('Fail');
    yield put(RegisterActions.userRegisterFailure(error));
  }
}

const loginSagas = () => [takeLatest(RegisterTypes.USER_REGISTER, userRegisterSaga)];

export default loginSagas();
