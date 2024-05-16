import { prisma } from './client'

export type MenuItem = {id:number, name:string, description:string, price:number, slug:string, ItemDetail: {type:string, url:string}[]}

export type itemsByCategory = {
  id: number;
  name: string;
  MenuItem: MenuItem[];
}

export const getItemByslug = async (slug: string) => {
  return await prisma.menuItem.findFirst({
    where: {
      slug: slug,
    },
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
  });

}

export const getMenuItemsByName = async (name: string) => {
    return await prisma.menuItem.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive', // This makes the search case-insensitive
      },
      },
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
      orderBy: {
        id: 'asc',
      }
  });
}

export const getItems = async () => {
  return await prisma.menuItem.findMany({
    where: {
      restaurantId:1
    },
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
  });
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