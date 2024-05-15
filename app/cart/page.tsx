'use client';
import { useAppSelector } from '@/state/store';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

const CartPage = () => {
  const productsInCart = useAppSelector(state => state.cart.value.items)

  return (
    <div className="cart-main">
      <Link href="/">Go back</Link>
      <div className="cart-header">header</div>
      <div className="cart-content">
        <div className="cart-table">
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
                    <td>${product.product.price}</td>
                    <td>{product.quantity}</td>
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
            <p>items: n</p>
            <hr />
            <p>Total Cost</p>
            <p>$5,500.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage