import Image from 'next/image';

const MobileHeroSection: React.FC = () => {
  return (
    <div className="relative block px-2 pb-2 mx-auto md:hidden">
      <div className="flex flex-col items-center pt-2 text-text">
        <div className="relative flex items-center justify-center w-full">
          
          <div className="absolute z-50 translate-y-8 left-1">
            <button className="px-3 py-1 text-xs font-satoshi font-bold leading-[17.07px] tracking-[2%] bg-primary shadow-sm xs:px-4 xs:py-2 sm-mobile:px-6 sm-mobile:py-3 sm-mobile:text-sm">
              SHOP NOW
            </button>
          </div>

          <div className="relative flex flex-col items-center">
            
            <div className="relative flex justify-center w-full pl-6">
              <div className="absolute bg-primary w-[110px] h-[149px] xs:w-[124px] xs:h-[149px] sm-mobile:w-[140px] sm-mobile:h-[168px] top-[18px] xs:top-[20px] sm-mobile:top-[22px] z-10"></div>

              <div className="relative z-40">
                <Image
                  src="/home/HeroSecIcone.png"
                  alt="model"
                  className="w-[90px] h-[165px] xs:w-[95px] xs:h-[177px] sm-mobile:w-[105px] sm-mobile:h-[190px]"
                  width={95}
                  height={177}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute z-20 flex justify-center pt-2">
          <h1 className="text-2xl font-extrabold leading-none tracking-tight text-center sm:text-4xl">
            BEST COLLECTIONS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MobileHeroSection;