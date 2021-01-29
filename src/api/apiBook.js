/* eslint-disable prettier/prettier */
import http from './http';
export async function getAllBook() {
  return http.post('/books');
}