import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    orders: orderReducer,
    cart: cartReducer,
  },
});
export default appStore;
