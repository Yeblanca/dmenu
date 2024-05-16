import { getItemByslug } from '@/app/lib/items';
import { notFound } from 'next/navigation';
import React from 'react'

type ItemDetailsPageProps = {
  params: {
    itemSlug: string;
  };
};

const ItemDetailsPage = async ({ params }: ItemDetailsPageProps) => {
  console.log(params.itemSlug)
  const item = await getItemByslug(params.itemSlug);
  if(!item) {
    notFound();
  }
  console.log(item)

  return (
    <div>{params.itemSlug}</div>
  )
}

export default ItemDetailsPage
