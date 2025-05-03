import Blogs from "@/Components/Home/Blogs";
import CollectionCard from "@/Components/Home/Collection";
import BestSeller from "@/Components/Home/BestSeller";
import Hero from "@/Components/Home/Hero";
import { NewCollection } from "@/Components/Home/NewCollection";
import ShopGlowing from "@/Components/Home/ShopGlowing";



export default function Home() {
  return (
    <div>
      <Hero />
      <CollectionCard />
      <BestSeller />;
      {/* {dummyProducts.map((product) => {
          // eslint-disable-next-line react/jsx-key
          return <BestSeller key={product.id} product={product} />;
        })} */}
      <NewCollection />
      <ShopGlowing />
      <Blogs />
    </div>
  );
}
