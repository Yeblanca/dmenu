import React from 'react'

type CategoryBarProps = {
  categories: string[]
  setSelectedCategory: (category: number) => void
  selectedCategory: number
}

export const CategoryBar = ({categories, setSelectedCategory, selectedCategory}:CategoryBarProps) => {

  return (
    <div className="scrollmenu">{categories.map((element, index) => {
      return (<a className={selectedCategory===index ? 'active' : ''} onClick={()=>setSelectedCategory(index)} key={index}>{ element }</a>)
    })}</div>
  )
}
