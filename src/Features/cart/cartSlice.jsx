import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  item: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("---------------------CART SLICE---------------------");
      const existingItem = state.item.find(
        (item) => item.id === action.payload.id
      );
      console.log("state ITEM: ", state.item);
      console.log("state.item: ", action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.item.push({ ...action.payload, quantity: 1 });
      }
    },
    //remove cart
    removeFromCart: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
    //update cart
    updateQuantity: (state, action) => {
      const item = state.item.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
