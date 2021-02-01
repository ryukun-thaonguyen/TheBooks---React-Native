/* eslint-disable prettier/prettier */
import Immutable from 'seamless-immutable';
import {makeReducerCreator} from '../../utils/ReduxUtils';
import {CategoryTypes} from './actions';
export const INITIAL_STATE = Immutable({
  data: [],
  error: null,
});
export const getAllCategories = (state, { response }) =>
  state.merge({ data: response.data });

export const getAllCategoriesSuccess = (state, { response }) =>
state.merge({ data: response.data});

export const getAllCategoriesFailure = (state, { error }) =>
  state.merge({ error: error })
  
const reducer = makeReducerCreator(INITIAL_STATE, {
    [CategoryTypes.GET_ALL_CATEGORIES]: getAllCategories,
    [CategoryTypes.GET_ALL_CATEGORIES_SUCCESS]: getAllCategoriesSuccess,
    [CategoryTypes.GET_ALL_CATEGORIES_FAILURE]: getAllCategoriesFailure,
});
export default reducer;
