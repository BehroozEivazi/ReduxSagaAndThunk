import {
  PRODUCTS_GET_ALL,
  PRODUCT_ADD,
  PRODUCT_EDIT,
  PRODUCT_GET_BY_ID,
  PRODUCT_REMOVE,
} from "./Constants";

export const getAll = () => ({
  type: PRODUCTS_GET_ALL,
});

export const getById = (id) => ({
  type: PRODUCT_GET_BY_ID,
  payload: id,
});

export const add = (item) => ({
  type: PRODUCT_ADD,
  payload: item,
});

export const remove = (id) => ({
  type: PRODUCT_REMOVE,
  payload: id,
});

export const edit = (item) => ({
  type: PRODUCT_EDIT,
  payload: item,
});
