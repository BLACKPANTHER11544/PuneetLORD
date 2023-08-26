import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Slice/apiSlice";
import cartSliceReducer from "./Slice/cartSlice";
import authSliceReducer from "./Slice/authSlice";
const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default Store;
