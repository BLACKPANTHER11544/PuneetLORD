import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/CartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exitItem = state.cartItems.find((x) => x._id === item._id);
      if (exitItem) {
        state.cartItems = state.cartItems.map((x) => {
          return x._id === exitItem._id ? item : x;
        });
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);
      return updateCart(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
