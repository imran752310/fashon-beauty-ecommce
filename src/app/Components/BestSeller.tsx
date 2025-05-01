import Link from "next/link";
import React from "react";
import Image from "next/image";

const BestSeller = () => {
  return (
    <div className="m-5">
      <div className="flex justify-between p-5 my-6">
        <div>
          <h1 className="text-3xl">Our Best Seller</h1>
        </div>
        <div>
          <Link href={"/"}>Shop All Product</Link>
        </div>
      </div>

      {/* products card  */}
      <div>
        <div className="grid gap-60 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 ">
            {/* card1 */}
          <div className="w-62 bg-white rounded-md   text-center space-y-3">
            <div className="bg-[#f9f9f9] rounded-md p-6">
              <Image
                src="/images/product-01.jpg"
                alt="Bio-shroom Rejuvenating Serum"
                width={160}
                height={260}
                className="mx-auto"
              />
            </div>
            <div className="text-lg font-semibold text-gray-900">$29.00</div>
            <div className="text-sm text-gray-700">
              Bio-shroom Rejuvenating Serum
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
              <div className="flex text-green-600">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.64 12.545 1 8.91l6.061-.884L10 3l2.939 5.026 6.061.884-4.64 3.636 1.518 5.545z" />
                    </svg>
                  ))}
              </div>
              <span className="ml-1">5170 reviews</span>
            </div>
          </div>
          {/* card2 */}
          <div className="w-62 bg-white rounded-md text-center space-y-3">
            <div className="bg-[#f9f9f9] rounded-md p-6">
              <Image
                src="/images/product-01.jpg"
                alt="Bio-shroom Rejuvenating Serum"
                width={160}
                height={230}
                className="mx-auto"
              />
            </div>
            <div className="text-lg font-semibold text-gray-900">$29.00</div>
            <div className="text-sm text-gray-700">
              Bio-shroom Rejuvenating Serum
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
              <div className="flex text-green-600">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.64 12.545 1 8.91l6.061-.884L10 3l2.939 5.026 6.061.884-4.64 3.636 1.518 5.545z" />
                    </svg>
                  ))}
              </div>
              <span className="ml-1">5170 reviews</span>
            </div>
          </div>
          {/* card3 */}
          <div className="w-62 bg-white rounded-md   text-center space-y-3">
            <div className="bg-[#f9f9f9] rounded-md p-6">
              <Image
                src="/images/product-01.jpg"
                alt="Bio-shroom Rejuvenating Serum"
                width={160}
                height={230}
                className="mx-auto"
              />
            </div>
            <div className="text-lg font-semibold text-gray-900">$29.00</div>
            <div className="text-sm text-gray-700">
              Bio-shroom Rejuvenating Serum
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
              <div className="flex text-green-600">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.64 12.545 1 8.91l6.061-.884L10 3l2.939 5.026 6.061.884-4.64 3.636 1.518 5.545z" />
                    </svg>
                  ))}
              </div>
              <span className="ml-1">5170 reviews</span>
            </div>
          </div>
        </div>
      </div>

                  

    </div>
  );
};

export default BestSeller;
