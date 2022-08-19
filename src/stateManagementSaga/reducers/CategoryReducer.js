import {
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCEEDED,
  CATEGORY_FETCH_FAILED,
} from "../actions/Constants";

const initialState = {
  categories: [],
  isLoading: true,
  message: "",
};

function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_FETCH_REQUEST:
      return { categories: [], message: "", isLoading: true };
    case CATEGORY_FETCH_SUCCEEDED:
      return { categories: action.categories, message: "", isLoading: false };
    case CATEGORY_FETCH_FAILED:
      return { categories: [], message: action.message, isLoading: false };
    default:
      return state;
  }
}
export default CategoryReducer;
