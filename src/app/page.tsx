import BestSeller from "@/Components/Home/BestSeller";
import BestSellerServer from "@/Components/Home/Bestselleserver";
import Blogs from "@/Components/Home/Blogs";
import CollectionCard from "@/Components/Home/Collection";
import Hero from "@/Components/Home/Hero";
import { NewCollection } from "@/Components/Home/NewCollection";
import ShopGlowing from "@/Components/Home/ShopGlowing";

import { getCategories } from "@/sanity/lib/getCategories";
import { getProducts } from "@/sanity/lib/getProducts";


export default async function Home() {

 
  const categories = await getCategories();

  const products = await getProducts();

  return (
    <div>
      <Hero />
      <CollectionCard categories={categories} />
      {/* <BestSeller products={[]} /> */}
      <BestSellerServer />
      <NewCollection />
      <ShopGlowing />
      <Blogs />
    </div>
  );
}
