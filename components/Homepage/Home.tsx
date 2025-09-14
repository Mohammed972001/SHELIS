
import Image from 'next/image';
import FeaturesSection from './FeaturesSection';
import MobileHeroSection from './HeroSec/MobileHeroSection';

const HomeComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-light">
      
      <div className="relative hidden px-2 pb-6 mx-auto md:block max-w-7xl">

  <div className="flex items-center justify-between pt-20 text-text">
    
    <div className="flex flex-col gap-20 mt-40 md:gap-16 md:mt-32 lg:gap-18 lg:mt-36">
      
      <h3 className="font-bold leading-none tracking-normal uppercase font-satoshi md:text-xl xl:text-2xl">ELEVATE YOUR STYLE WITH<br/>LUXURY OUTFITS</h3>
      <div>
      <p className="max-w-xs text-sm md:text-xs lg:text-sm md:max-w-[280px] lg:max-w-xs">
        Immerse Yourself in Exquisite Designs and Impeccable
      </p>
      <button className="inline-block mt-4 font-semibold shadow-sm bg-primary md:px-4 md:py-2 xl:px-10 xl:py-3 md:text-sm lg:text-base">
        SHOP NOW
      </button>
      </div>
    </div>

    <div className="relative flex flex-col items-center">
      
      <div className="relative flex justify-center w-full">
        <div className="absolute bg-primary w-[340px] h-[396px] xl:w-[416px] xl:h-[502px] rounded-md top-[50px] z-10"></div>

        <Image
          src="/home/HeroSecIcone.png"
          alt="model"
          className="relative z-40 -mt-12 md:w-[250px] md:h-[490px] xl:w-[320px] xl:h-[596px]"
          width={320}
          height={596}
        />
      </div>
    </div>

    <div className="absolute left-0 right-0 z-20 flex justify-center top-20">
      <h1 className="mt-8 font-extrabold leading-none tracking-tight text-center md:text-5xl xl:text-7xl">
        BEST COLLECTIONS
      </h1>
    </div>

    <div className="flex flex-col gap-20 mt-36 md:gap-16 md:mt-28 lg:gap-18 lg:mt-32">
      <p className="text-[16px] font-satoshi font-medium w-[247px] md:text-sm md:w-[200px] lg:text-[15px] lg:w-[230px]">
        &quot;Products finely crafted clothing places influenced from popular culture and street fashion and high-end brands.&quot;
      </p>

      <div className="flex gap-8 mt-4 md:gap-6 lg:gap-7"> 
        <div className="text-center">
          <h4 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">25K+</h4>
          <span className="text-xs text-gray-500 md:text-[10px] lg:text-xs">HAPPY CUSTOMERS</span>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">5K+</h4>
          <span className="text-xs text-gray-500 md:text-[10px] lg:text-xs">MONTHLY ORDERS</span>
        </div>
      </div>
    </div>

  </div>
</div>

      <MobileHeroSection />

      <FeaturesSection />

    </div>
  );
}

export default HomeComponent;
