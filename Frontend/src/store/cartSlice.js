import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((el) => el.slug === action.payload.slug);
      if (!item) {
        state.items.push({
          slug: action.payload.slug,
        });
      }
      sessionStorage.setItem("cart", JSON.stringify(state.items));


    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.slug !== action.payload);
      sessionStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
