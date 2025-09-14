import Image from 'next/image';

interface Collection {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  imagePath: string;
  discount?: string;
  type?: string;  
}

interface CollectionCardProps {
  collection: Collection;
  index: number;
  isTopRow: boolean;
  isShoes?: boolean;
}


const CollectionCard: React.FC<CollectionCardProps> = ({ collection, isTopRow, isShoes = false }) => {
  const isImageLeft = isTopRow; 

  
  if (isShoes) {
    return (
      <div className="relative flex flex-row h-full overflow-hidden bg-primary">
        
        <div className="relative flex flex-col justify-center items-start p-3 md:p-4 lg:p-6 xl:p-8 flex-1 max-w-[200px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-[280px]">
          
          {collection.subtitle && (
            <p className="mb-1 text-xs font-normal tracking-wider uppercase md:mb-2 md:text-sm lg:text-base font-satoshi text-text opacity-80">
              {collection.subtitle}
            </p>
          )}

          <h2 className="mb-2 font-chillax font-bold text-2xl leading-full tracking-2% text-text md:mb-3 md:text-3xl lg:text-4xl xl:text-5xl">
            {collection.title}
          </h2>

          {collection.type && (
            <p className="mb-3 font-chillax font-medium text-2xl leading-full tracking-2% text-text opacity-80 md:mb-4 md:text-3xl lg:text-4xl xl:text-5xl">
              {collection.type}
            </p>
          )}

          <button className="text-xs font-medium transition-all duration-300 font-satoshi md:text-sm lg:text-base text-text border-text hover:border-opacity-70 w-fit">
            {collection.buttonText}
          </button>
        </div>

        <div className="relative flex items-center justify-center flex-shrink-0">
          <Image
            src={collection.imagePath}
            alt={collection.title}
            width={400}
            height={197}
            className="object-contain w-[300px] h-[150px] md:w-[350px] md:h-[175px] xl:w-[350px] lg:h-[197px]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative bg-primary overflow-hidden h-full ${
      isImageLeft ? 'flex-row-reverse' : 'flex-row'
    } flex`}>
      
      <div className={`relative flex flex-col justify-center items-start p-3 md:p-4 lg:p-6 xl:p-8 flex-1 min-w-0 ${
        isImageLeft ? 'text-center' : 'text-center'
      }`}>
        
        {collection.subtitle && (
          <p className="mb-1 text-xs font-normal tracking-wider uppercase md:mb-2 md:text-sm lg:text-base font-satoshi text-text opacity-80">
            {collection.subtitle}
          </p>
        )}

        <h2 className="mb-2 font-chillax font-bold text-3xl leading-full tracking-2% text-text md:mb-3 md:text-3xl lg:text-3xl xl:text-6xl">
          {collection.title}
        </h2>

        {collection.type && (
          <p className="mb-3 font-chillax font-medium text-2xl  tracking-2% text-text  md:mb-4 md:text-3xl lg:text-3xl xl:text-5xl">
            {collection.type}
          </p>
        )}

        <button className="text-xs font-medium transition-all duration-300 font-satoshi md:text-sm lg:text-base text-text border-text hover:border-opacity-70 w-fit">
          {collection.buttonText}
        </button>
      </div>

       <div className="relative flex-shrink-0 pr-3 md:pr-0 xl:pr-2">
        <Image
          src={collection.imagePath}
          alt={collection.title}
          width={200}
          height={300}
           className="object-cover w-auto h-full max-w-[180px] md:max-w-[200px] xl:max-w-none"
        />
      </div>
    </div>
  );
};


const CollectionsSection: React.FC = () => {
  const collections: Collection[] = [
    {
      id: 1,
      title: "Men",
      type : "collection",
      subtitle: "SALE 20% OFF",
      buttonText: "SHOP NOW",
      imagePath: "/collections/mens-collection.svg",
      discount: "SALE 20% OFF"
    },
    {
      id: 2,
      title: "Luxury",
      type : "watches",
      subtitle: "sALE 35% OFF",
      buttonText: "SHOP NOW",
      imagePath: "/collections/luxury-watches.png",
      discount: "SALE 35% OFF"
    },
    {
      id: 3,
      title: "Shoes",
      type : "collection",
      subtitle: "NEW BRANDS",
      buttonText: "SHOP NOW",
      imagePath: "/collections/shoes-collection.svg"
    },
    {
      id: 4,
      title: "Women",
      type : "collection",
      subtitle: "LIMITED OFFERS",
      buttonText: "Shop Now",
      imagePath: "/collections/womens-collection.svg"
    }
  ];

  return (
    <section className="h-full bg-white pb-96 b-40 lg:py-1 xl:py-10">
      <div className="container mx-auto max-w-9xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-6 h-[600px] md:h-[500px] lg:h-[650px] xl:h-[820px]">
          
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            <div className="flex-[2]">
              <CollectionCard 
                collection={collections[0]} 
                index={0} 
                isTopRow={true}
              />
            </div>
            <div className="flex-[1]">
              <CollectionCard 
                collection={collections[2]} 
                index={2} 
                isTopRow={false}
                isShoes={true}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 xl:gap-8">
            <div className="flex-[1.4]">
              <CollectionCard 
                collection={collections[1]} 
                index={1} 
                isTopRow={true}
              />
            </div>
            <div className="flex-[2]">
              <CollectionCard 
                collection={collections[3]} 
                index={3} 
                isTopRow={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;