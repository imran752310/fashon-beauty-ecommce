"use client"
import Blogs from "@/Components/Home/Blogs";
import CollectionCard from "@/Components/Home/Collection";
import BestSeller from "@/Components/Home/BestSeller";
import Hero from "@/Components/Home/Hero";
import { NewCollection } from "@/Components/Home/NewCollection";
import ShopGlowing from "@/Components/Home/ShopGlowing";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <div>
      <Hero />
      <CollectionCard />
      <BestSeller />;
      <NewCollection />
      <ShopGlowing />
      <Blogs />
    </div>
  );
}
