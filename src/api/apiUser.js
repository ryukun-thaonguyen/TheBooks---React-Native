/* eslint-disable prettier/prettier */
import http from './http';

export async function userLoginApi(data) {
  return http.post('/token', data);
}

export async function userRegisterApi(data) {
    return http.post('/users', data);
}
