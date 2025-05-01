import React from "react";

const Hero = () => {
  return (
   <div className="mx-5">
     <div className="bg-[url('/images/hero-banner-1.jpg')] bg-cover bg-center w-full h-[550px] md:h-[600px] lg:h-[600px]">
      <div className="w-[90%] md:w-[80%] h-full mx-auto flex flex-col justify-center space-y-4 px-4 md:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-Urbanist leading-tight text-black">
          Reveal The <br /> Beauty of Skin
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Made using clean, non-toxic ingredients, our products <br className="hidden sm:block" />
          are designed for everyone.
        </p>
        <span className="text-base sm:text-lg md:text-xl font-semibold text-black">
          Starting at $7.99
        </span>
        <div>
          <button className="w-36 sm:w-40 p-2 sm:p-3 bg-black text-white rounded font-semibold text-sm sm:text-md">
            Shop Now
          </button>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Hero;
