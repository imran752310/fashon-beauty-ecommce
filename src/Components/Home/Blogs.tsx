import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="px-5 py-15" data-aos="fade-up"
    data-aos-anchor-placement="top-center">
      <div className="mx-auto text-center text-5xl m-10">
        <h1>More to Discover</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
        {/* blog1  */}

        <div className="overflow-hidden">
          <div className="relative bg-[url('/images/blog-1.jpg')] w-full h-[250px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 "></div>

          {/* Optional overlay */}
          <div className="  p-10 text-black text-center h-full max-w-md">
            <div>
              <h2 className="text-2xl font-semibold pb-4 cursor-pointer hover:text-green-700 transition-all ">
                Find a Store
              </h2>
            </div>
            <Link href="/discover">
              <span className="text-base   hover:opacity-75 cursor-pointer">
                Discover Now →
              </span>
            </Link>
          </div>
        </div>
         {/* blog2  */}
         <div className="overflow-hidden">
          <div className="relative bg-[url('/images/blog-2.jpg')] w-full h-[250px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 "></div>

          {/* Optional overlay */}
          <div className="  p-10 text-black text-center h-full max-w-md">
            <div>
              <h2 className="text-2xl font-semibold pb-4 cursor-pointer hover:text-green-700 transition-all ">
                Find a Store
              </h2>
            </div>
            <Link href="/discover">
              <span className="text-base   hover:opacity-75 cursor-pointer">
                Discover Now →
              </span>
            </Link>
          </div>
        </div>
      {/* blog3  */}
      <div className="overflow-hidden">
          <div className="relative bg-[url('/images/blog-3.jpg')] w-full h-[250px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 "></div>

          {/* Optional overlay */}
          <div className="  p-10 text-black text-center h-full max-w-md">
            <div>
              <h2 className="text-2xl font-semibold pb-4 cursor-pointer hover:text-green-700 transition-all ">
                Find a Store
              </h2>
            </div>
            <Link href="/discover">
              <span className="text-base   hover:opacity-75 cursor-pointer">
                Discover Now →
              </span>
            </Link>
          </div>
        </div>

      </div>
     
    </div>
  );
};

export default Blogs;
