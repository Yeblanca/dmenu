'use client'
import React, { useState } from 'react'
import { itemsByCategory } from '../lib/items'
import { CategoryBar } from './CategoryBar'
import { Grid } from './Grid'
import { Card } from './Card'


type MenuProps = {
  items: itemsByCategory[]
}

const Menu = ({items}: MenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <>
      <CategoryBar categories={items.map((item) => item.name)} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <Grid>
        {items[selectedCategory].MenuItem.map((item) => {
          return (
            <Card key={item.id} {...item} />
          )
        })}
      </Grid>
    </>
  )
}

export default Menu