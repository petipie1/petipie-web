import { combineReducers } from "redux";
import cartReducer from "./cartSlice";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    cart: cartReducer,
  });

  return rootReducer;
}
