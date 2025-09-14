'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: string;
  rating: number;
  image: string;
  alt: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center justify-center gap-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-sm ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ⭐
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-sm hover:shadow-md group">
      <div className="relative overflow-hidden aspect-square bg-gray-50">
        <div className="absolute z-10 top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium text-white bg-black rounded">
            {product.discount}
          </span>
        </div>
        
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4 text-center bg-primary-light">
        {renderStars(product.rating)}
        
        <h3 className="mb-3 text-sm font-medium text-text md:text-base line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500 line-through">
            {product.originalPrice.toFixed(2)} LE
          </span>
          <span className="text-lg font-bold text-text">
            {product.salePrice.toFixed(2)} LE
          </span>
        </div>
      </div>
    </div>
  );
};

const DealsOfTheDay: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const productSets: Product[][] = [
  
    [
      {
        id: 1,
        name: "Slim Fit Half Turtleneck Pullover",
        originalPrice: 650.00,
        salePrice: 430.00,
        discount: "-9%",
        rating: 5,
        image: "/collections/mens-collection.svg", 
        alt: "Slim Fit Half Turtleneck Pullover"
      },
      {
        id: 2,
        name: "Jude-Chiffon Vanilla",
        originalPrice: 750.00,
        salePrice: 320.00,
        discount: "-9%",
        rating: 5,
        image: "/collections/womens-collection.svg",
        alt: "Jude-Chiffon Vanilla"
      },
      {
        id: 3,
        name: "Relax Fit Crew Neck Pullover",
        originalPrice: 750.00,
        salePrice: 540.00,
        discount: "-13%",
        rating: 5,
        image: "/collections/luxury-watches.png",
        alt: "Relax Fit Crew Neck Pullover"
      },
      {
        id: 4,
        name: "Jude-Pastel Green Daisy",
        originalPrice: 750.00,
        salePrice: 340.00,
        discount: "-7%",
        rating: 5,
        image: "/collections/shoes-collection.svg",
        alt: "Jude-Pastel Green Daisy"
      }
    ],
  
    [
      {
        id: 5,
        name: "Classic Blue Denim Jacket",
        originalPrice: 850.00,
        salePrice: 680.00,
        discount: "-20%",
        rating: 4,
        image: "/collections/mens-collection.svg",
        alt: "Classic Blue Denim Jacket"
      },
      {
        id: 6,
        name: "Elegant Summer Dress",
        originalPrice: 600.00,
        salePrice: 420.00,
        discount: "-30%",
        rating: 5,
        image: "/collections/womens-collection.svg",
        alt: "Elegant Summer Dress"
      },
      {
        id: 7,
        name: "Smart Watch Classic",
        originalPrice: 1200.00,
        salePrice: 960.00,
        discount: "-20%",
        rating: 5,
        image: "/collections/luxury-watches.png",
        alt: "Smart Watch Classic"
      },
      {
        id: 8,
        name: "Running Sneakers Pro",
        originalPrice: 900.00,
        salePrice: 630.00,
        discount: "-30%",
        rating: 4,
        image: "/collections/shoes-collection.svg",
        alt: "Running Sneakers Pro"
      }
    ],
    [
      {
        id: 9,
        name: "Winter Wool Coat",
        originalPrice: 1100.00,
        salePrice: 770.00,
        discount: "-30%",
        rating: 5,
        image: "/collections/mens-collection.svg",
        alt: "Winter Wool Coat"
      },
      {
        id: 10,
        name: "Silk Evening Gown",
        originalPrice: 1500.00,
        salePrice: 1050.00,
        discount: "-30%",
        rating: 5,
        image: "/collections/womens-collection.svg",
        alt: "Silk Evening Gown"
      },
      {
        id: 11,
        name: "Diamond Ring Special",
        originalPrice: 2000.00,
        salePrice: 1400.00,
        discount: "-30%",
        rating: 5,
        image: "/collections/luxury-watches.png",
        alt: "Diamond Ring Special"
      },
      {
        id: 12,
        name: "Leather Boots Premium",
        originalPrice: 800.00,
        salePrice: 560.00,
        discount: "-30%",
        rating: 4,
        image: "/collections/shoes-collection.svg",
        alt: "Leather Boots Premium"
      }
    ]
  ];

  const currentProducts = productSets[currentSlide];

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 bg-white md:py-16 lg:py-20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-chillax text-text">
            DEALS OF THE DAY
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 transition-all duration-500 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {currentProducts.map((product, index) => (
            <div 
              key={`${currentSlide}-${product.id}`} 
              className="fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-8 md:mt-12">
          {productSets.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 transition-all duration-300 border-2 hover:scale-110 ${
                index === currentSlide 
                  ? 'bg-text border-text' 
                  : 'bg-transparent border-gray-300 hover:border-gray-500'
              }`}
              aria-label={`Switch to product set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;