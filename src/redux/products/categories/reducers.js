import {
  PRODUCTS_CATEGORY_FETCH,
  PRODUCTS_CATEGORY_FETCH_FAILED,
  PRODUCTS_CATEGORY_FETCH_SUCCESS,
  status
} from "./types";

export const initialState = {
  status: status.LOADING,
  categories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_CATEGORY_FETCH:
      return {
        ...state,
        status: status.LOADING
      };
    case PRODUCTS_CATEGORY_FETCH_FAILED:
      return {
        ...state,
        status: status.FAILED
      };
    case PRODUCTS_CATEGORY_FETCH_SUCCESS:
      return {
        ...state,
        status: status.LOADED,
        categories: [...action.data]
      };
    default:
      return state;
  }
};
