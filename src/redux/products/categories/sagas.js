import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { apiRequest } from "redux/utils/services";
import { categoryFetchSuccess, categoryFetchFailed } from "./actions";
import { PRODUCTS_CATEGORY_FETCH } from "./types";

export function* getCategories() {
  try {
    const res = yield call(apiRequest, "get", "products/v2.0/categories");

    if (res.status === "ok") {
      yield put(categoryFetchSuccess(res.data));
    } else {
      yield put(categoryFetchFailed());
    }
  } catch (err) {
    yield put(categoryFetchFailed());
  }
}

export function* watchCategoriesFetch() {
  yield takeEvery(PRODUCTS_CATEGORY_FETCH, getCategories);
}

export default function* productSagas() {
  yield all([fork(watchCategoriesFetch)]);
}
