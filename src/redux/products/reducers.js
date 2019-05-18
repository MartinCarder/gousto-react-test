import {
    PRODUCTS_PRODUCTS_FETCH,
    PRODUCTS_PRODUCTS_FETCH_FAILED,
    PRODUCTS_PRODUCTS_FETCH_SUCCESS,
    status
  } from "./types";
  
  export const initialState = {
    status: status.LOADING,
    products: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case PRODUCTS_PRODUCTS_FETCH:
        return {
          ...state,
          status: status.LOADING
        };
      case PRODUCTS_PRODUCTS_FETCH_FAILED:
        return {
          ...state,
          status: status.FAILED
        };
      case PRODUCTS_PRODUCTS_FETCH_SUCCESS:
        return {
          ...state,
          status: status.LOADED,
          products: [...action.data]
        };
      default:
        return state;
    }
  };
  