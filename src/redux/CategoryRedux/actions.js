/* eslint-disable prettier/prettier */
import {makeActionCreator, makeConstantCreator} from '../../utils/ReduxUtils';

export const CategoryTypes = makeConstantCreator(
   'GET_ALL_CATEGORIES',
   'GET_ALL_CATEGORIES_SUCCESS',
   'GET_ALL_CATEGORIES_FAILED',
  );
    const getAllCategories = () => makeActionCreator(CategoryTypes.GET_ALL_CATEGORIES);
    const getAllCategoriesSuccess = data => makeActionCreator(CategoryTypes.GET_ALL_CATEGORIES_SUCCESS, { data });
    const getAllCategoriesFailure = error => makeActionCreator(CategoryTypes.GET_ALL_CATEGORIES_FAILED, { error });
export default {
    getAllCategories,
    getAllCategoriesSuccess,
    getAllCategoriesFailure,
};
