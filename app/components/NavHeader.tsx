import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/logo.png'

export const NavHeader = () => {
  return (
    <header>
      <div>
      <Link href="/">Go back</Link>
      </div>
      <div className="img-container"><Image alt="Restaurant logo" layout="fill" src={logo} /></div>
      <div><Link href="/cart">Shopping cart</Link></div>
    </header>
  )
}
