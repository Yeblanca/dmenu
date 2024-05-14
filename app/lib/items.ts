import { prisma } from './client'

export type MenuItem = {id:number, name:string, description:string, price:number, slug:string, ItemDetail: {type:string, url:string}[]}

export type itemsByCategory = {
  id: number;
  name: string;
  MenuItem: MenuItem[];
}


export const getItemsByCategory = async () => {
  return await prisma.menuCategory.findMany({
    where: {
      restaurantId: 1,
    },
    select: {
      name: true,
      id: true,
      MenuItem: {
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          slug: true,
          ItemDetail: {
            select: {
              type: true,
              url: true,
            },
          },
        },
      },
    },
    orderBy: {
      order: 'asc',
    },
  });
};