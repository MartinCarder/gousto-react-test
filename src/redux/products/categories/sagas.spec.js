import { call, fork, takeEvery, put } from "redux-saga/effects";
import { getCategories, watchCategoriesFetch, productSagas } from "./sagas";
import { categoryFetchSuccess, categoryFetchFailed } from "./actions";
import { PRODUCTS_CATEGORY_FETCH } from "./types";
import { apiRequest } from "redux/utils/services";

describe("categorie sagas", () => {
  it("watchCategoriesFetch", () => {
    const action = {
      payload: undefined,
      type: PRODUCTS_CATEGORY_FETCH
    };
    const gen = watchCategoriesFetch();

    expect(JSON.stringify(gen.next().value)).toEqual(
      JSON.stringify(fork(takeEvery, PRODUCTS_CATEGORY_FETCH, getCategories))
    );
  });

  describe("getCategories", () => {
    it("calls apiRequest with correct values", () => {
      const gen = getCategories();

      expect(gen.next().value).toEqual(
        call(apiRequest, "get", "products/v2.0/categories")
      );
    });

    it("if status ok calls categoryFetchSuccess with correct value", () => {
      const gen = getCategories();
      const payload = {
        status: "ok",
        data: "testing"
      };
      gen.next();
      expect(gen.next(payload).value).toEqual(
        put(categoryFetchSuccess(payload.data))
      );
    });

    it("if status not ok calls categoryFetchFailed", () => {
      const gen = getCategories();
      const payload = {
        status: "err"
      };
      gen.next();
      expect(gen.next(payload).value).toEqual(put(categoryFetchFailed()));
    });

    it("on erro calls categoryFetchFailed", () => {
      const gen = getCategories();
      gen.next();
      expect(gen.next().value).toEqual(put(categoryFetchFailed()));
    });
  });
});
