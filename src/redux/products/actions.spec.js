import {
    productsFetch,
    productsFetchSuccess,
    productsFetchFailed
  } from "./actions";
  
  import {
    PRODUCTS_PRODUCTS_FETCH,
    PRODUCTS_PRODUCTS_FETCH_FAILED,
    PRODUCTS_PRODUCTS_FETCH_SUCCESS
  } from "./types";
  
  describe("Products actions", () => {
    it("productsFetch", () => {
      expect(productsFetch()).toEqual({ type: PRODUCTS_PRODUCTS_FETCH });
    });
  
    it("productsFetchFailed", () => {
      expect(productsFetchFailed()).toEqual({
        type: PRODUCTS_PRODUCTS_FETCH_FAILED
      });
    });
  
    it("productsFetchSuccess", () => {
      const data = "testing";
      expect(productsFetchSuccess(data)).toEqual({
        data: "testing",
        type: PRODUCTS_PRODUCTS_FETCH_SUCCESS
      });
    });
  });
  