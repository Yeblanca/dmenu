import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
        state.value.items.push({ product, quantity: 1});
      }
    },
  }
})

export const { addToCart } = cart.actions;
export default cart.reducer;