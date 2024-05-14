import Image from 'next/image';
import React from 'react'
import '@/styles/components/Card.scss'

type CardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  slug: string;
  ItemDetail: {type:string, url:string}[]

}

export const Card = ({id,name,description,price,slug, ItemDetail}:CardProps) => {
  return (
    <div className="card">
      <div>
      <Image alt={name} layout="fill" src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/birria.jpeg`}  />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
