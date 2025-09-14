import HomeComponent from "../../components/Homepage/HeroSec/Home";
import CollectionsSection from "../../components/Homepage/CollectionsSection";
import MarqueeBar from "../../components/Homepage/MarqueeBar";
import DealsOfTheDay from "../../components/Homepage/DealsOfTheDay";
import ShopByCategory from "../../components/Homepage/ShopByCategory";
import OurProducts from "../../components/Homepage/OurProducts";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HomeComponent/>
      <CollectionsSection/>
      <div className="relative z-0">
        <MarqueeBar
          speed={45}
          className="text-black bg-primary-light"
        />
      </div>
      <DealsOfTheDay />
      <ShopByCategory />
      <OurProducts />
    </div>
  );
}
