import { combineReducers } from "redux";
import productReducer from "./Reducer/ProductReducer";

export const rootreducer = combineReducers({
  ProductItem: productReducer,
  
});
