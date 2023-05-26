import { combineReducers } from "redux";
import cartReducer from "./cartSlice";

import { authReducer } from "./reducers/auth";

export const rootReducer	= combineReducers({auth: authReducer, cart: cartReducer,});