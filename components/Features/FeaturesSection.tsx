import Image from 'next/image';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      iconPath: "/home/truck-tick.png",
      title: "Free Shipping",
      description: "Tell about your service"
    },
    {
      iconPath: "/home/dollar-circle.png",
      title: "Money Guarantee", 
      description: "30 days for exchange"
    },
    {
      iconPath: "/home/Callcentar_Help_Icon_UIA.png",
      title: "Online Support",
      description: "24 hrs a day, 7 days a week"
    },
    {
      iconPath: "/home/card-tick.png",
      title: "Flexible Payment",
      description: "Pay with multiple Credit Card"
    }
  ];

  return (
    <section className="py-4">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:gap-4 md:text-left">
              <div className="flex-shrink-0 mb-1 md:mb-0">
                <Image
                  src={feature.iconPath}
                  alt={feature.title}
                  width={59}
                  height={40}
                  className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-[59px] md:h-10 xl:w-[70px] xl:h-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-satoshi font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-[2%] text-text">
                  {feature.title}
                </h3>
                <p className="text-xs font-normal leading-tight xs:text-sm md:text-base md:leading-6 font-satoshi text-neutral-gray">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;