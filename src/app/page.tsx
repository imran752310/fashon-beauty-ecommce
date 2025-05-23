
import Blogs from "@/Components/Home/Blogs";
import CollectionCard from "@/Components/Home/Collection";
import Hero from "@/Components/Home/Hero";
import { NewCollection } from "@/Components/Home/NewCollection";
import Product from "@/Components/Home/Product";
import ShopGlowing from "@/Components/Home/ShopGlowing";

import { getCategories } from "@/sanity/lib/getCategories";
import { getProducts } from "@/sanity/lib/getProducts";


export default async function Home() {

   const categories   = await getCategories();
  //  const getProducts   = await getProducts();

 

  return (
    <div>
      <Hero />
      <CollectionCard categories={categories} />
      <Product />;
      <NewCollection />
      <ShopGlowing />
      <Blogs />
    </div>
  );
}
