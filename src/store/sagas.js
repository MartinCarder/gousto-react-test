import { all, fork } from "redux-saga/effects";

import productSagas from "redux/products/sagas";
import categoriesSagas from "redux/products/categories/sagas";

export default function* rootSaga() {
  yield all([fork(productSagas), fork(categoriesSagas)]);
}
