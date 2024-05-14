import React from 'react'

type CategoryBarProps = {
  categories: string[]
  setSelectedCategory: (category: number) => void
  selectedCategory: number
}

export const CategoryBar = ({categories, setSelectedCategory, selectedCategory}:CategoryBarProps) => {
  return (
    <div>{categories.map((element, index) => {
      return (<a key={index}>{ element }</a>)
    })}</div>
  )
}
