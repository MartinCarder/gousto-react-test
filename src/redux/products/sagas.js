import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { apiRequest } from "redux/utils/services";
import { productsFetchSuccess, productsFetchFailed } from "./actions";
import { PRODUCTS_PRODUCTS_FETCH } from "./types";

export function* getProducts() {
  try {
    const res = yield call(apiRequest, "get", "products/v2.0/products?includes[]=categories&image_sizes[]=365");

    if (res.status === "ok") {
      yield put(productsFetchSuccess(res.data));
    } else {
      yield put(productsFetchFailed());
    }
  } catch (err) {
    yield put(productsFetchFailed());
  }
}

export function* watchProductsFetch() {
  yield takeEvery(PRODUCTS_PRODUCTS_FETCH, getProducts);
}

export default function* productsSagas() {
  yield all([fork(watchProductsFetch)]);
}
