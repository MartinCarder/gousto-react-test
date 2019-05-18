import {
  categoryFetch,
  categoryFetchSuccess,
  categoryFetchFailed
} from "./actions";

import {
  PRODUCTS_CATEGORY_FETCH,
  PRODUCTS_CATEGORY_FETCH_FAILED,
  PRODUCTS_CATEGORY_FETCH_SUCCESS
} from "./types";

describe("categories actions", () => {
  it("categoryFetch", () => {
    expect(categoryFetch()).toEqual({ type: PRODUCTS_CATEGORY_FETCH });
  });

  it("categoryFetchFailed", () => {
    expect(categoryFetchFailed()).toEqual({
      type: PRODUCTS_CATEGORY_FETCH_FAILED
    });
  });

  it("categoryFetchSuccess", () => {
    const data = "testing";
    expect(categoryFetchSuccess(data)).toEqual({
      data: "testing",
      type: PRODUCTS_CATEGORY_FETCH_SUCCESS
    });
  });
});
