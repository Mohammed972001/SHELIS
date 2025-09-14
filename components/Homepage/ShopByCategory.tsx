'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Category {
  id: number;
  name: string;
  image: string;
  alt: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="cursor-pointer group">
      <div className="relative mb-4 overflow-hidden bg-white aspect-square">
        <Image
          src={category.image}
          alt={category.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-center capitalize font-satoshi text-text tracking-2%" 
          style={{ lineHeight: '32px' }}>
        {category.name}
      </h3>
    </div>
  );
};

const ShopByCategory: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categorySets: Category[][] = [
    [
      {
        id: 1,
        name: "Men Clothes",
        image: "/collections/mens-collection.svg",
        alt: "Men Clothes"
      },
      {
        id: 2,
        name: "Women Clothes", 
        image: "/collections/womens-collection.svg",
        alt: "Women Clothes"
      },
      {
        id: 3,
        name: "Sneakers Shoes",
        image: "/collections/shoes-collection.svg",
        alt: "Sneakers Shoes"
      },
      {
        id: 4,
        name: "Luxury Watches",
        image: "/collections/luxury-watches.png",
        alt: "Luxury Watches"
      }
    ],
    [
      {
        id: 5,
        name: "Sports Wear",
        image: "/collections/mens-collection.svg",
        alt: "Sports Wear"
      },
      {
        id: 6,
        name: "Accessories",
        image: "/collections/womens-collection.svg",
        alt: "Accessories"
      },
      {
        id: 7,
        name: "Bags & Backpacks",
        image: "/collections/shoes-collection.svg",
        alt: "Bags & Backpacks"
      },
      {
        id: 8,
        name: "Electronics",
        image: "/collections/luxury-watches.png",
        alt: "Electronics"
      }
    ],
    [
      {
        id: 9,
        name: "Home & Living",
        image: "/collections/mens-collection.svg",
        alt: "Home & Living"
      },
      {
        id: 10,
        name: "Beauty & Care",
        image: "/collections/womens-collection.svg",
        alt: "Beauty & Care"
      },
      {
        id: 11,
        name: "Books & Media",
        image: "/collections/shoes-collection.svg",
        alt: "Books & Media"
      },
      {
        id: 12,
        name: "Gaming",
        image: "/collections/luxury-watches.png",
        alt: "Gaming"
      }
    ]
  ];

  const currentCategories = categorySets[currentSlide];

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-10 md:py-10 lg:py-10 bg-primary-light">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl font-chillax text-text">
            SHOP BY CATEGORY
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 transition-all duration-500 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {currentCategories.map((category, index) => (
            <div 
              key={`${currentSlide}-${category.id}`} 
              className="fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 mt-8 md:mt-12">
          {categorySets.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 transition-all duration-300 border-2 hover:scale-110 ${
                index === currentSlide 
                  ? 'bg-text border-text' 
                  : 'bg-transparent border-gray-300 hover:border-gray-500'
              }`}
              aria-label={`Switch to category set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;