// src/app/api/products/route.ts

export const products = [
    {
      id: '1',
      thumbnail: '/images/product-01.jpg',
      title: 'Wireless Headphones',
      mrp: 120,
      salePrice: 99,
      percentOff: 18,
    },
    {
      id: '2',
      thumbnail: '/images/product-02.jpg',
      title: 'Smart Watch',
      mrp: 250,
      salePrice: 199,
      percentOff: 20,
    },
    {
      id: '3',
      thumbnail: '/images/product-03.jpg',
      title: 'Sneakers',
      mrp: 150,
      salePrice: 120,
      percentOff: 20,
    },
    {
      id: '4',
      thumbnail: '/images/product-04.jpg',
      title: 'Leather Backpack',
      mrp: 200,
      salePrice: 160,
      percentOff: 20,
    },
    {
        id: '5',
        thumbnail: '/images/product-05.jpg',
        title: 'Leather Backpack',
        mrp: 200,
        salePrice: 160,
        percentOff: 20,
      },
      {
        id: '6',
        thumbnail: '/images/product-06.jpg',
        title: 'Leather Backpack',
        mrp: 200,
        salePrice: 160,
        percentOff: 20,
      },
      {
        id: '7',
        thumbnail: '/images/product-07.jpg',
        title: 'Leather Backpack',
        mrp: 200,
        salePrice: 160,
        percentOff: 20,
      },
      {
        id: '8',
        thumbnail: '/images/product-08.jpg',
        title: 'Leather Backpack',
        mrp: 200,
        salePrice: 160,
        percentOff: 20,
      }, {
        id: '9',
        thumbnail: '/images/product-09.jpg',
        title: 'Leather Backpack',
        mrp: 200,
        salePrice: 160,
        percentOff: 20,
      },
      {
        id: '10',
        thumbnail: '/images/product-10.jpg',
        title: 'Leather Backpack',
        mrp: 200,
        salePrice: 160,
        percentOff: 20,
      },
  ];
  
  export async function GET() {
    return Response.json(products);
  }
  