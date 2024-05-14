import React from 'react'

type ItemLayoutProps = {
  children: React.ReactNode;
};

export const ItemLayout = ({children}: ItemLayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default ItemLayout