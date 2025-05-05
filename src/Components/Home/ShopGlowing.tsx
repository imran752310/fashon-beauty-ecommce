import Image from "next/image";
import React from "react";

const ShopGlowing = () => {
  return (
    <div>
      <div className="p-10" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
        <h1 className="text-center text-4xl p-5">Why Shop with Glowing?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="mx-auto text-center p-10">
            <Image
              src={"/images/feature-1.jpg"}
              width={100}
              height={100}
              alt="abc"
              className="mx-auto"
            />
            <div>
              <h1 className="text-2xl py-5">Guaranteed PURE</h1>
              <p className="text-gray-600">
                All Grace formulations adhere to strict purity standards and
                will never contain harsh or toxic ingredients
              </p>
            </div>
          </div>
          <div className="mx-auto text-center p-10">
            <Image
              src={"/images/feature-2.jpg"}
              width={100}
              height={100}
              alt="abc"
              className="mx-auto"
            />
            <div>
              <h1 className="text-2xl py-5">Guaranteed PURE</h1>
              <p className="text-gray-600">
                All Grace formulations adhere to strict purity standards and
                will never contain harsh or toxic ingredients
              </p>
            </div>
          </div>
          <div className="mx-auto text-center p-10">
            <Image
              src={"/images/feature-3.jpg"}
              width={100}
              height={100}
              alt="abc"
              className="mx-auto"
            />
            <div>
              <h1 className="text-2xl py-5">Guaranteed PURE</h1>
              <p className="text-gray-600">
                All Grace formulations adhere to strict purity standards and
                will never contain harsh or toxic ingredients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGlowing;
