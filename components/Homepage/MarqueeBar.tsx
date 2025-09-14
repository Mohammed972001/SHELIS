import React from 'react';

interface MarqueeItem {
  id: number;
  text: string;
}

interface MarqueeBarProps {
  items?: MarqueeItem[];
  speed?: number;
  className?: string;
}

const MarqueeBar: React.FC<MarqueeBarProps> = ({ 
  items,
  speed = 30,
  className = ""
}) => {
  const defaultItems: MarqueeItem[] = [
    { id: 1, text: "NEW WOMEN COLLECTION" },
    { id: 2, text: "LUXURY WATCHES" },
    { id: 3, text: "WELL MADE SHOES" },
    { id: 4, text: "30% OFF WINTER COLLECTION" },
    { id: 5, text: "FREE SHIPPING ON ORDERS OVER $100" },
    { id: 6, text: "EXCLUSIVE DEALS" },
  ];

  const marqueeItems = items || defaultItems;

  return (
    <div className={`hidden md:block w-full py-5 bg-black text-text overflow-hidden whitespace-nowrap my-6 ${className}`}>
      <div 
        className="inline-block animate-marquee"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {marqueeItems.map((item) => (
          <span 
            key={`first-${item.id}`}
            className="inline-block py-2 text-sm font-medium tracking-wider uppercase font-satoshi md:text-base lg:text-lg"
          >
            {item.text}
            <span className="mx-20 text-xl text-text">•</span>
          </span>
        ))}
        
        {marqueeItems.map((item) => (
          <span 
            key={`second-${item.id}`}
            className="inline-block py-2 text-sm font-medium tracking-wider uppercase font-satoshi md:text-base lg:text-lg"
          >
            {item.text}
                <span className="mx-20 text-xl text-text">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBar;