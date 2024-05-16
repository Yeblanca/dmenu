'use client';
import { AppDispatch, useAppSelector } from '@/state/store';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../lib/utils';
import { updateQuantity, removeFromCart, getTotalPrice, getQuantity } from '@/state/cartSlice';

const CartPage = () => {
  const productsInCart = useAppSelector(state => state.cart.value.items)
  const totalPrice = useAppSelector(getTotalPrice);
  const totalQuantity = useAppSelector(getQuantity);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({id, quantity}));
  }

  const handleClick = (id: string) => {
    dispatch(removeFromCart(id));
  }


  return (
    <div className="cart-main">

      <div className="cart-header"><Link href="/">Go back</Link> Taquería La Progreso</div>
      <div className="cart-content">
      {(productsInCart.length === 0) ? ( <div>Your cart is empty, add some items!</div>) : (<>        <div className="cart-table">
          <h1>Your shopping cart:</h1>
          <hr />
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {productsInCart.map((product) => {
                return (
                  <tr key={product.product.id}>
                    <td>{product.product.name}</td>
                    <td>{formatPrice(product.product.price)}</td>
                    <td><input defaultValue={product.quantity} type='number' onChange={(e)=>handleChange(product.product.id,parseInt( e.target.value))} /><button onClick={()=>handleClick(product.product.id)}>Remove</button></td>
                    <td>${product.product.price * product.quantity}</td>
                  </tr>
                )
               })}
            </tbody>
          </table>
        </div>
        <div className="cart-summary">
          <div className="cart-summary-card">
            <h3>Summary</h3>
            <hr />
            <p>Items:{totalQuantity}</p>
            <hr />
            <p>Total Cost</p>
              <p>{formatPrice(parseFloat(totalPrice))}</p>
              <button>Checkout</button>
          </div>
        </div></>)}

      </div>
    </div>
  )
}

export default CartPage