import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CollectionCard from "./Components/Collection";
import BestSeller from "./Components/BestSeller";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CollectionCard />
      <BestSeller />
    </div>
  );
}
