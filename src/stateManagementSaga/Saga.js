import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
  CATEGORY_FETCH_FAILED,
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCEEDED,
} from "./actions/Constants";

const getCategoriesFromAPI = () =>
  fetch("https://apitester.ir/api/Categories").then((res) => res.json());

function* fetchCategories(action) {
  try {
    const categories = yield call(getCategoriesFromAPI);
    yield put({ type: CATEGORY_FETCH_SUCCEEDED, categories: categories });
  } catch (e) {
    yield put({ type: CATEGORY_FETCH_FAILED, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(CATEGORY_FETCH_REQUEST, fetchCategories);
}

// function* mySaga(){
//     yield takeLatest(CATEGORY_FETCH_REQUEST, fetchCategories);
// }

export default mySaga;
