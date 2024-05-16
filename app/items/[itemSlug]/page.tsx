import { Button } from '@/app/components/Button';
import { getItemByslug } from '@/app/lib/items';
import { formatPrice } from '@/app/lib/utils';
import Image from 'next/image';
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
  // console.log('this is the item',item)
  return (
    <div className="main">
      <section className="details">
        <h1>{item.name}</h1>
        <p className="price">{formatPrice(item.price)}</p>
        <Button title="Add to cart" item={item} />
        <div className="description">
          <h5>Details</h5>
        <hr/>
          <p>{item.description}</p>
        </div>
      </section>
      <div className="image-container">
              <div className="image">

          {item.ItemDetail.length > 0 ? <Image
            style={{ objectFit: "cover" }}
            src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/${item.ItemDetail[0].url}`}
            alt={item.name}
            layout="fill"
          /> : <Image alt={item.name} layout="fill" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAAEgCAYAAACU1c66AAAAAXNSR0IArs4c6QAAFEBJREFUeF7tnYWS5TYQRb1h3jAzM/7/H2yYs2FmZtrUfVXe0mhatux+b/J6+qhqKqlZy26d7itoyZ4Tp06dOjNQIACBVAROIPxU/qaxENgQQPgEAgQSEkD4CZ1OkyGA8IkBCCQkgPATOp0mQwDhEwMQSEgA4Sd0Ok2GAMInBiCQkADCT+h0mgwBhE8MQCAhAYSf0Ok0GQIInxiAQEICCD+h02kyBBA+MQCBhAQQfkKn02QIIHxiAAIJCSD8hE6nyRBA+MQABBISQPgJnU6TIYDwiQEIJCSA8BM6nSZDAOETAxBISADhJ3Q6TYYAwicGIJCQAMJP6HSaDAGETwxAICEBhJ/Q6TQZAgifGIBAQgIIP6HTaTIEED4xAIGEBBB+QqfTZAggfGIAAgkJIPyETqfJEED4xAAEEhJA+AmdTpMhgPCJAQgkJIDwEzqdJkMA4RMDEEhIAOEndDpNhgDCJwYgkJAAwk/odJoMAYRPDEAgIQGEn9DpNBkCCJ8YgEBCAgg/odNpMgQQPjEAgYQEEH5Cp9NkCCB8YgACCQkg/IROp8kQQPjEAAQSEkD4CZ1OkyGA8IkBCCQkgPATOp0mQwDhEwMQSEgA4Sd0Ok2GAMInBiCQkADCT+h0mgwBhE8MQCAhAYSf0Ok0GQIInxiAQEICCD+h02kyBBA+MQCBhAQQfkKn02QIIHxiAAIJCSD8hE6nyRBA+MQABBISQPgJnU6TIYDwiQEIJCSA8BM6nSZDAOETAxBISADhJ3Q6TYYAwicGIJCQAMJP6HSaDAGETwxAICEBhJ/Q6TQZAgifGIBAQgIIP6HTaTIEED4xAIGEBBB+QqfTZAggfGIAAgkJIPyETqfJEED4xAAEEhJA+AmdTpMhgPCJAQgkJIDwEzqdJkMA4RMDEEhIAOEndDpNhgDCJwYgkJAAwk/odJoMAYRPDEAgIQGEn9DpNBkCCJ8YgEBCAgg/odNpMgQQPjEAgYQEEH5Cp9NkCCB8YgACCQkg/IROp8kQQPjEAAQSEkD4CZ1OkyGA8IkBCCQkgPATOp0mQwDhEwMQSEgA4Sd0Ok2GAMInBiCQkADCT+h0mgwBhE8MQCAhAYSf0Ok0GQIInxiAQEICCD+h02kyBBA+MQCBhAQQfkKn02QIIHxiAAIJCSD8hE6nyRBA+MQABBISQPgJnU6TIYDwiQEIJCSA8BM6nSZDAOETAxBISADhJ3Q6TYYAwicGIJCQAMJP6HSaDAGETwxAICEBhJ/Q6TQZAgifGIBAQgIIP6HTaTIEED4xAIGEBBB+QqfTZAiEFv6VV145XHrppcMFF1wwnH/++cOff/45/PLLL8PPP/88/Pbbb2G8e+edd27sV/n999+Hjz76KIztSww9ceLEcO211w4XXXTRxmfnnHPO8Mcff2z8pR/5b21RHIw/55577sb/v/766+a+f/3119rbbmy97LLLhksuuWRj8xhjijP5KmoJJ3wFy9133z1cccUVgwJpqvz000/D22+/Pfz777+T191yyy3DjTfeuMqHCtxXXnllVV1Vuu2224brr7/+bP1//vlneOGFF1bfbx8rSjzy2cUXXzxr3hdffDF8/PHHs9fpAvn/rrvuGq666qrJ6yX8d999d9MJ9BbFw8033zwZY2fOnNl00l999VXvbffmulDCV8973333bUaK3iLRv/fee8P333/frKJ7qiNZUxRUL7300pqqm5HkgQceOFD3uAn/hhtuGG699dZFfDSqvvnmm5MzAM321JnMdf7lg3/88cfh9OnTk7ZceOGFG5+MM7Aew2Xv66+/Pvz99989l+/FNWGEf9555w2PP/74IkeXhN94443NMsAqjz766CCHrylrha/O64knnjjUiR0n4Uuc99xzzxqsg0bT559/fvPfumjK/dhjj62679dffz188MEHzbryiWJtafHO/JY+z3t9GOE/8sgjm/VWXcY1l6b1CojLL798s9ary5RAn3rqqUWziPLeWku+9tpri/2gUUUjfl2Oi/A1EotrPSJLyFobj3kY+VQdhHxXF83S3nnnnUO/l+jr63Xf7777brOu1/9rTa4lgDU71PLvhx9+OHRf5VquueaaQ7/XtRo0NKJruXLy5EnT3rlOZXGQ7LBCCOG3eviWA1tLgk8//XT47LPPDuF85plnzv5u7Qi+xEda02ttb5XjInytkZU7KYuWXcqHWMm2FhN1qmWi1ppFqCPRVNvK5dx7770boZZFnYOur0sZB/o33U/XWUk8y151OM8999ySUPjfrg0hfKsn1rr922+/bYLTml1r97LIga+++uqB39Wdinp2LQt2VeamqcdF+PWoLFGIvabE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"  /> }
      </div>
      </div>
    </div>
  )
}

export default ItemDetailsPage
