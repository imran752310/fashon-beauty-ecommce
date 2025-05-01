import Link from "next/link";

export default function CollectionCard() {
  return (
    <div className="px-5 py-15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
    
            {/* card 2 */}
            <div className="overflow-hidden">
          <div className="relative bg-[url('/images/collection-1.jpg')] w-full h-[430px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 ">
            <div className="absolute inset-0 bg-black/10"></div>{" "}
            {/* Optional overlay */}
            <div className="relative z-10 p-10 text-black flex flex-col justify-between h-full max-w-md">
             <div>
             <h2 className="text-3xl font-bold mb-4">What’s New?</h2>
             <p className="text-lg mb-8">Get the glow</p>
             </div>
              <Link href="/discover">
                <span className="text-base font-semibold  hover:opacity-75 cursor-pointer">
                  Discover Now →
                </span>
              </Link>
            </div>
          </div>
        </div>
           {/* card 2 */}
           <div className="overflow-hidden">
          <div className="relative bg-[url('/images/collection-2.jpg')] w-full h-[430px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 ">
            <div className="absolute inset-0 bg-black/10"></div>{" "}
            {/* Optional overlay */}
            <div className="relative z-10 p-10 text-black flex flex-col justify-between h-full max-w-md">
             <div>
             <h2 className="text-3xl font-bold mb-4">What’s New?</h2>
             <p className="text-lg mb-8">Get the glow</p>
             </div>
              <Link href="/discover">
                <span className="text-base font-semibold  hover:opacity-75 cursor-pointer">
                  Discover Now →
                </span>
              </Link>
            </div>
          </div>
        </div>
           {/* card 2 */}
           <div className="overflow-hidden">
          <div className="relative bg-[url('/images/collection-3.jpg')] w-full h-[430px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 ">
            <div className="absolute inset-0 bg-black/10"></div>{" "}
            {/* Optional overlay */}
            <div className="relative z-10 p-10 text-black flex flex-col justify-between h-full max-w-md">
             <div>
             <h2 className="text-3xl font-bold mb-4">What’s New?</h2>
             <p className="text-lg mb-8">Get the glow</p>
             </div>
              <Link href="/discover">
                <span className="text-base font-semibold  hover:opacity-75 cursor-pointer">
                  Discover Now →
                </span>
              </Link>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );
}
