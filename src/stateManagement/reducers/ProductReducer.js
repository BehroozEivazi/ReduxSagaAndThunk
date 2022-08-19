import {
  PRODUCTS_GET_ALL,
  PRODUCT_ADD,
  PRODUCT_EDIT,
  PRODUCT_GET_BY_ID,
  PRODUCT_REMOVE,
} from "../actions/Constants";

const initialState = {
  items: [
    { id: 1, productName: "Product A", price: 100 },
    { id: 2, productName: "Product B", price: 200 },
    { id: 3, productName: "Product C", price: 300 },
  ],
  isLoading: true,
};

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_GET_ALL:
      return { ...state, items: state.items };

    case PRODUCT_GET_BY_ID:
      return {
        ...state,
        items: state.items.find((q) => q.id == action.payload),
      };

    case PRODUCT_ADD:
      return { ...state, items: state.items.concat([action.payload]) };

    case PRODUCT_REMOVE:
      return {
        ...state,
        items: state.items.filter((q) => q.id != action.payload),
      };

    // case PRODUCT_EDIT:
    //   return state.items.map((item) => {
    //     if (item.id == action.payload.id) {
    //     }
    //   });
    default:
      return state;
  }
}
export default ProductReducer;
