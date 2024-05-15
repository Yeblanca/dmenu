import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    products: [],
  },
};

export const products = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    receiveProducts: (state, action) => {
      const products = action.payload;
      for (let product = 0; product < products.length; product++) {
        const element = products[product];
        (state.value.products as any[])[product] = element;
      }
    },
  }
})

export const { receiveProducts } = products.actions;
export default products.reducer;