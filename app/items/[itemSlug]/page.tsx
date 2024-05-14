import React from 'react'

type ItemDetailsPageProps = {
  params: {
    itemSlug: string;
  };
};

const ItemDetailsPage = ({params}:ItemDetailsPageProps) => {
  return (
    <div>{params.itemSlug}</div>
  )
}

export default ItemDetailsPage
