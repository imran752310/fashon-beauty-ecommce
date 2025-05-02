import BestSeller from "./Components/Home/BestSeller";
import Blogs from "./Components/Home/Blogs";
import CollectionCard from "./Components/Home/Collection";
import Hero from "./Components/Home/Hero";
import { NewCollection } from "./Components/Home/NewCollection";
import ShopGlowing from "./Components/Home/ShopGlowing";


export default function Home() {
  return (
    <div>
      <Hero />
      <CollectionCard />
      <BestSeller />
      <NewCollection />
      <ShopGlowing />
      <Blogs />
    </div>
  );
}
