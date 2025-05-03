import React from 'react'
import Image from 'next/image';
import { FaShoppingCart, FaStar, FaTruck } from 'react-icons/fa';

 async function getData(slug: string, string: any) {
    const data = slug;
    return data
 } 
 
 export default async function Products({Params} : { Params: string} ) {



   function handleAdd(): void {
     throw new Error('Function not implemented.');
   }

  return (
    <div className="bg-white m-10 py-10">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">

        <Image src={'/images/product-06.jpg'} alt="" width={400} height={400} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                sam
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
               creme
              </h2>
            </div>

            <div className="mb-6 flex  items-center gap-3 md:mb-10">
              <button className="flex gap-x-2 px-3 bg-[#4e7460] text-white p-3 rounded-full">
                <span>4.2</span>
                <FaStar  className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-500 transition duration-100">
                56 Rating
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  $300
                </span>

                <span className="mb-0.5 text-red-500 line-through">
                  $
                  350
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Inct. vat plus Shipping
              </span>
            </div>

           
            <div className="flex gap-2.5">
            <button onClick={handleAdd} className="flex gap-x-2 px-3 bg-black cursor-pointer hover:bg-[#4e7460] text-white p-3 rounded-md">
                <span>Add To Cart</span>
                <FaShoppingCart  className="w-5 h-5" />
              </button>

              <button className="flex gap-x-2 px-3 border hover:bg-[#4e7460] hover:text-white cursor-pointer    p-3 rounded-md">
                <span>Checkout</span>

              </button>
              {/* <AddToBag
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />

              <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              /> */}
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}
