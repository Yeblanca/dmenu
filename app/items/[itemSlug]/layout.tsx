import { NavHeader } from '@/app/components/NavHeader';
import Link from 'next/link';
import React from 'react'

type ItemLayoutProps = {
  children: React.ReactNode;
};

const ItemLayout = ({children}: ItemLayoutProps) => {
  return (
    <div className="details-container">
      <NavHeader/>
      {children}
    </div>
  )
}

export default ItemLayout