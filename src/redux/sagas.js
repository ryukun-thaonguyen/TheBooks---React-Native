/* eslint-disable prettier/prettier */
import {all} from 'redux-saga/effects';
import appSagas from './AppRedux/sagas';
import loginSagas from './LoginRedux/sagas';
import registerSagas from './RegisterRedux/sagas';
import categorySagas from './CategoryRedux/sagas';
export default function* root() {
  yield all([...appSagas, ...loginSagas, ...registerSagas, ...categorySagas]);
}
