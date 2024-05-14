import React from 'react'

type CartLayoutProps = {
  children: React.ReactNode;
};

const CartLayout = ({children}: CartLayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default CartLayout