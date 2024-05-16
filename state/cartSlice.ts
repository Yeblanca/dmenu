import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

// TO-DO GET CORRECT TYPE OF ITEMS.
type InitialState = {
  value: CartState
}

type CartState = {
  items: Array<{ product: { id: string, name: string, price: number, slug: string }, quantity: number }>
}

const initialState = {
  value: {
    items: [],
  },
} as InitialState;

export const cart = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const product = action.payload;
      const { id } = product;
      const foundItem = state.value.items.find((item) => item.product.id === id);
      if (foundItem) {
        foundItem.quantity++;
      } else {
        state.value.items.push({ product, quantity: 1 });
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: string, quantity: number }>) => {
      const { id, quantity } = action.payload;
      const foundItem = state.value.items.find((item) => item.product.id === id);
      if (foundItem) {
        foundItem.quantity = quantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.value.items = state.value.items.filter((item) => item.product.id !== id);

    }
  }
})

export const { addToCart, updateQuantity, removeFromCart } = cart.actions;
export default cart.reducer;

export const getQuantity = createSelector(
  (state) => state.cart.value.items,
  (items) => {
    let total = 0;
    for (let product of items) {
      total += product.quantity;
    }
    return total;
  }
);

export const getTotalPrice = createSelector(
  (state) => state.cart.value.items,
  (items) => {
    let total = 0;
    for (let product of items) {
      total += product.quantity * product.product.price;
    }
    return total.toFixed(2);
  }
);