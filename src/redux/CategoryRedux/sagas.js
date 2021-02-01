/* eslint-disable prettier/prettier */
import {put, takeLatest, call} from 'redux-saga/effects';
import {getCategory} from '../../api/apiCategory';
import sideBarActions, {CategoryTypes} from './actions';


export function* getAllCategories() {
  try {
    const response = yield call(getCategory);
    if (response) {
      yield put(sideBarActions.getAllCategoriesSuccess(response.data));
    }
  } catch (error) {
      alert(error);
      yield put(sideBarActions.getAllCategoriesFailure(error));
  }
}
const categorySagas = () => [
  takeLatest(CategoryTypes.GET_ALL_CATEGORIES, getAllCategories),
];
export default categorySagas();
