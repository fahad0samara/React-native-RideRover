import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
    image: string;
    Calories: number;
    ServingSize: string;

  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;