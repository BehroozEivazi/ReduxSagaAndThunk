import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCC,
} from "./Constants";

export function getAllProducts(dispatch) {
  const apiUrl = "https://apitester.ir/api/Products";
  dispatch(fetchProductStart());
  fetch(apiUrl)
    .then((response) => response.json())
    .then((result) => {
      dispatch(fetchProductSucc(result));
    })
    .catch((err) => {
      dispatch(fetchProductFailed(err));
    });
}

export const fetchProductStart = () => ({
  type: FETCH_PRODUCTS_START,
});

export const fetchProductSucc = (data) => ({
  type: FETCH_PRODUCTS_SUCC,
  payload: data,
});

export const fetchProductFailed = (error) => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: error,
});
