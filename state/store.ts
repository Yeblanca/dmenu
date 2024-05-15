import { configureStore } from '@reduxjs/toolkit'
import {products} from './productsSlice'
import { cart } from './cartSlice'

export const store = configureStore({
  reducer: {
    // Add reducers here
    cart: cart.reducer,
    products: products.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;