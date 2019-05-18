import { call, fork, takeEvery, put } from "redux-saga/effects";
import { getProducts, watchProductsFetch, productSagas } from "./sagas";
import { productsFetchSuccess, productsFetchFailed } from "./actions";
import { PRODUCTS_PRODUCTS_FETCH } from "./types";
import { apiRequest } from "redux/utils/services";

describe("products sagas", () => {
  it("watchProductsFetch", () => {
    const action = {
      payload: undefined,
      type: PRODUCTS_PRODUCTS_FETCH
    };
    const gen = watchProductsFetch();

    expect(JSON.stringify(gen.next().value)).toEqual(
      JSON.stringify(fork(takeEvery, PRODUCTS_PRODUCTS_FETCH, getProducts))
    );
  });

  describe("getProducts", () => {
    it("calls apiRequest with correct values", () => {
      const gen = getProducts();

      expect(gen.next().value).toEqual(
        call(apiRequest, "get", "products/v2.0/products?includes[]=categories&image_sizes[]=365")
      );
    });

    it("if status ok calls productsFetchSuccess with correct value", () => {
      const gen = getProducts();
      const payload = {
        status: "ok",
        data: "testing"
      };
      gen.next();
      expect(gen.next(payload).value).toEqual(
        put(productsFetchSuccess(payload.data))
      );
    });

    it("if status not ok calls productsFetchFailed", () => {
      const gen = getProducts();
      const payload = {
        status: "err"
      };
      gen.next();
      expect(gen.next(payload).value).toEqual(put(productsFetchFailed()));
    });

    it("on erro calls productsFetchFailed", () => {
      const gen = getProducts();
      gen.next();
      expect(gen.next().value).toEqual(put(productsFetchFailed()));
    });
  });
});
