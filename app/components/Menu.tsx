'use client'
import React, { useEffect, useState } from 'react'
import { getItems, getMenuItemsByName, itemsByCategory } from '../lib/items'
import { CategoryBar } from './CategoryBar'
import { Grid } from './Grid'
import { Card } from './Card'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/state/store'
import { receiveProducts } from '@/state/productsSlice'


type MenuProps = {
  items: itemsByCategory[]
}

const Menu = ({items}: MenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const dispatch = useDispatch<AppDispatch>()

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
      <CategoryBar categories={items.map((item) => item.name)} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <div className="content">
        {items[selectedCategory].MenuItem.length === 0 ? (<div>We are sorry, no items were found</div>) : (      <Grid>
        {items[selectedCategory].MenuItem.map((item) => {
          return (
            <Card key={item.id} {...item} />
          )
        })}
      </Grid>)}

      </div>
    </>
  )
}

export default Menu