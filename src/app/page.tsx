
import Blogs from "@/Components/Home/Blogs";
import CollectionCard from "@/Components/Home/Collection";
import BestSeller from "@/Components/Home/BestSeller";
import Hero from "@/Components/Home/Hero";
import { NewCollection } from "@/Components/Home/NewCollection";
import ShopGlowing from "@/Components/Home/ShopGlowing";

import { getCategories } from "@/sanity/lib/getCategories";


export default async function Home() {

   const categories   = await getCategories();

 

  return (
    <div>
      <Hero />
    <CollectionCard categories={categories} />
      <BestSeller />;
      <NewCollection />
      <ShopGlowing />
      <Blogs />
    </div>
  );
}
