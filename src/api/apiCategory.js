/* eslint-disable prettier/prettier */
import http from './http';
export async function getCategory() {
  return http.get('/categories');
}
