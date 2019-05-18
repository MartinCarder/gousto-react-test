import reducer, { initialState } from "./reducers";
import {
  PRODUCTS_CATEGORY_FETCH,
  PRODUCTS_CATEGORY_FETCH_FAILED,
  PRODUCTS_CATEGORY_FETCH_SUCCESS,
  status
} from "./types";

describe("Categories reducer", () => {
  it("returns correct default state", () => {
    expect(reducer(initialState, { type: "" })).toEqual(initialState);
  });

  it("returns correct state on PRODUCTS_CATEGORY_FETCH", () => {
    expect(reducer(initialState, { type: PRODUCTS_CATEGORY_FETCH })).toEqual({
      ...initialState,
      status: status.LOADING
    });
  });

  it("returns correct state on PRODUCTS_CATEGORY_FETCH_FAILED", () => {
    expect(
      reducer(initialState, { type: PRODUCTS_CATEGORY_FETCH_FAILED })
    ).toEqual({
      ...initialState,
      status: status.FAILED
    });
  });

  it("returns correct state on PRODUCTS_CATEGORY_FETCH_SUCCESS", () => {
    const data = [{ test: 1 }, { test: 2 }];
    expect(
      reducer(initialState, { type: PRODUCTS_CATEGORY_FETCH_SUCCESS, data })
    ).toEqual({
      ...initialState,
      status: status.LOADED,
      categories: data
    });
  });
});
