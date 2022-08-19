import {
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCC,
  FETCH_PRODUCTS_START,
} from "../actions/Constants";

const initialState = {
  items: [],
  isLoading: true,
  message: "",
};

function ProductThunkReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { items: [], message: "", isLoading: true };
    case FETCH_PRODUCTS_SUCC:
      return { items: action.payload, message: "", isLoading: false };
    case FETCH_PRODUCTS_FAILED:
      return { items: [], message: action.message, isLoading: false };
    default:
      return state;
  }
}
export default ProductThunkReducer;
