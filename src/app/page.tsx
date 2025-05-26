import BestSeller from "@/Components/Home/BestSeller";
import Blogs from "@/Components/Home/Blogs";
import CollectionCard from "@/Components/Home/Collection";
import Hero from "@/Components/Home/Hero";
import { NewCollection } from "@/Components/Home/NewCollection";
import ShopGlowing from "@/Components/Home/ShopGlowing";

import { getCategories } from "@/sanity/lib/getCategories";
import { getProducts } from "@/sanity/lib/getProducts";


export default async function Home() {

   const products = await getProducts();
  const categories = await getCategories();

 

  return (
    <div>
      <Hero />
      <CollectionCard categories={categories} />
      <BestSeller products={products} />
      <NewCollection />
      <ShopGlowing />
      <Blogs />
    </div>
  );
}
