'use client'
import React, { useEffect, useState } from 'react'
import { MenuItem, itemsByCategory } from '../lib/items'
import { CategoryBar } from './CategoryBar'
import { Grid } from './Grid'
import { Card } from './Card'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/state/store'
import { receiveProducts } from '@/state/productsSlice'



type MenuProps = {
  items: itemsByCategory[]
}

const Menu = ({ items }: MenuProps) => {
  // console.log(items)
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [query, setQuery] = useState('');
  const dispatch = useDispatch<AppDispatch>()
  const allItems: MenuItem[]= useAppSelector((state) => state.products.value.products) // Add type annotation to allItems array

  const filteredItems = allItems.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
  console.log(filteredItems)

  useEffect(() => {
    // Load products into the store
    (async () => {
      // Load products into the store
      const res = await fetch('/api/items');
      const products = await res.json();
      dispatch(receiveProducts(products))
    })()
  }, [dispatch])


  return (
    <>
  <CategoryBar
    categories={items.map((item) => item.name)}
    setSelectedCategory={setSelectedCategory}
    selectedCategory={selectedCategory}
  />
      <div className="content">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for items"
          className="search"
    />
    {filteredItems.length === 0 && items[selectedCategory].MenuItem.length === 0 ? (
      <div>We are sorry, no items were found</div>
    ) : (
      <>
        <Grid>
  {(query.trim().length>0&&filteredItems.length > 0)
  ? filteredItems.map((item) => <Card key={item.id} {...item} />)
  : items[selectedCategory].MenuItem.map((item) => <Card key={item.id} {...item} />)
  }
        </Grid>
      </>
    )}
  </div>
</>
  )
}

export default Menu