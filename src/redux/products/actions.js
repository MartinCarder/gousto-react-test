import {
    PRODUCTS_PRODUCTS_FETCH,
    PRODUCTS_PRODUCTS_FETCH_FAILED,
    PRODUCTS_PRODUCTS_FETCH_SUCCESS
  } from "./types";
  
  export const productsFetch = () => ({
    type: PRODUCTS_PRODUCTS_FETCH
  });
  
  export const productsFetchSuccess = data => ({
    type: PRODUCTS_PRODUCTS_FETCH_SUCCESS,
    data
  });
  
  export const productsFetchFailed = () => ({
    type: PRODUCTS_PRODUCTS_FETCH_FAILED
  });
  