import { combineReducers } from "redux";
import CategoryReducer from "../../stateManagementSaga/reducers/CategoryReducer";
import ProductReducer from "./ProductReducer";
import ProductThunkReducer from "./ProductThunkReducer";
export default combineReducers({
  productState: ProductReducer,
  productThunkState: ProductThunkReducer,
  categoryState: CategoryReducer,
});
