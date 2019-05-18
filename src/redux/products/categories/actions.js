import {
  PRODUCTS_CATEGORY_FETCH,
  PRODUCTS_CATEGORY_FETCH_FAILED,
  PRODUCTS_CATEGORY_FETCH_SUCCESS
} from "./types";

export const categoryFetch = () => ({
  type: PRODUCTS_CATEGORY_FETCH
});

export const categoryFetchSuccess = data => ({
  type: PRODUCTS_CATEGORY_FETCH_SUCCESS,
  data
});

export const categoryFetchFailed = () => ({
  type: PRODUCTS_CATEGORY_FETCH_FAILED
});
