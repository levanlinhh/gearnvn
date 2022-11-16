import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
  },
});
