import reducer, { initialState } from "./reducers";
import {
  PRODUCTS_PRODUCTS_FETCH,
  PRODUCTS_PRODUCTS_FETCH_FAILED,
  PRODUCTS_PRODUCTS_FETCH_SUCCESS,
  status
} from "./types";

describe("Products reducer", () => {
  it("returns correct default state", () => {
    expect(reducer(initialState, { type: "" })).toEqual(initialState);
  });

  it("returns correct state on PRODUCTS_PRODUCTS_FETCH", () => {
    expect(reducer(initialState, { type: PRODUCTS_PRODUCTS_FETCH })).toEqual({
      ...initialState,
      status: status.LOADING
    });
  });

  it("returns correct state on PRODUCTS_PRODUCTS_FETCH_FAILED", () => {
    expect(
      reducer(initialState, { type: PRODUCTS_PRODUCTS_FETCH_FAILED })
    ).toEqual({
      ...initialState,
      status: status.FAILED
    });
  });

  it("returns correct state on PRODUCTS_PRODUCTS_FETCH_SUCCESS", () => {
    const data = [{ test: 1 }, { test: 2 }];
    expect(
      reducer(initialState, { type: PRODUCTS_PRODUCTS_FETCH_SUCCESS, data })
    ).toEqual({
      ...initialState,
      status: status.LOADED,
      products: data
    });
  });
});
