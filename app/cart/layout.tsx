import React from 'react'
import { NavHeader } from '../components/NavHeader';

type CartLayoutProps = {
  children: React.ReactNode;
};

const CartLayout = ({children}: CartLayoutProps) => {
  return (
    <div>
      <NavHeader/>
      {children}
    </div>
  )
}

export default CartLayout