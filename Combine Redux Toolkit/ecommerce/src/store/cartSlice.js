import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = configureStore({
  name: "cart",
  initialState,
  reducer: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(state.items.push({ ...action.payload, quantity: 1 }));
      }
    },
  },
});

export const { addToCart } = cartSlice.action;
export default cartSlice.reducer;
