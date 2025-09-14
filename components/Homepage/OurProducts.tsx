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
  category: 'featured' | 'new-arrivals' | 'best-seller';
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

type FilterType = 'featured' | 'new-arrivals' | 'best-seller';

const OurProducts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('featured');

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Layered Velvet Skirt-Beige",
      originalPrice: 750.00,
      salePrice: 500.00,
      discount: "-9%",
      rating: 5,
      image: "/collections/womens-collection.svg",
      alt: "Layered Velvet Skirt-Beige",
      category: 'featured'
    },
    {
      id: 2,
      name: "Standard Fit Polo Collar Pullover",
      originalPrice: 750.00,
      salePrice: 540.00,
      discount: "-13%",
      rating: 5,
      image: "/collections/mens-collection.svg",
      alt: "Standard Fit Polo Collar Pullover",
      category: 'featured'
    },
    {
      id: 3,
      name: "Short Braids Pullover-Beige",
      originalPrice: 750.00,
      salePrice: 600.00,
      discount: "-9%",
      rating: 5,
      image: "/collections/womens-collection.svg",
      alt: "Short Braids Pullover-Beige",
      category: 'featured'
    },
    {
      id: 4,
      name: "Standard Fit Crew Neck Pullover",
      originalPrice: 750.00,
      salePrice: 580.00,
      discount: "-11%",
      rating: 5,
      image: "/collections/mens-collection.svg",
      alt: "Standard Fit Crew Neck Pullover",
      category: 'featured'
    },
    {
      id: 5,
      name: "Standard Fit Knitwear Pullover",
      originalPrice: 750.00,
      salePrice: 650.00,
      discount: "-9%",
      rating: 5,
      image: "/collections/mens-collection.svg",
      alt: "Standard Fit Knitwear Pullover",
      category: 'featured'
    },
    {
      id: 6,
      name: "Denim Fringed Coat-Blue",
      originalPrice: 750.00,
      salePrice: 540.00,
      discount: "-11%",
      rating: 5,
      image: "/collections/womens-collection.svg",
      alt: "Denim Fringed Coat-Blue",
      category: 'featured'
    },
    {
      id: 7,
      name: "Slim Fit Half Turtleneck Pullover",
      originalPrice: 650.00,
      salePrice: 430.00,
      discount: "-9%",
      rating: 5,
      image: "/collections/mens-collection.svg",
      alt: "Slim Fit Half Turtleneck Pullover",
      category: 'featured'
    },
    {
      id: 8,
      name: "Removable Sleeves Coat-Olive",
      originalPrice: 750.00,
      salePrice: 540.00,
      discount: "-7%",
      rating: 5,
      image: "/collections/womens-collection.svg",
      alt: "Removable Sleeves Coat-Olive",
      category: 'featured'
    },
    {
      id: 9,
      name: "Jude-Chiffon Vanilla",
      originalPrice: 750.00,
      salePrice: 320.00,
      discount: "-9%",
      rating: 5,
      image: "/collections/womens-collection.svg",
      alt: "Jude-Chiffon Vanilla",
      category: 'featured'
    },
    {
      id: 10,
      name: "Relax Fit Crew Neck Pullover",
      originalPrice: 750.00,
      salePrice: 540.00,
      discount: "-13%",
      rating: 5,
      image: "/collections/mens-collection.svg",
      alt: "Relax Fit Crew Neck Pullover",
      category: 'featured'
    },
    {
      id: 11,
      name: "Jude-Pastel Green Daisy",
      originalPrice: 750.00,
      salePrice: 340.00,
      discount: "-7%",
      rating: 5,
      image: "/collections/womens-collection.svg",
      alt: "Jude-Pastel Green Daisy",
      category: 'featured'
    },
    {
      id: 12,
      name: "Standard Fit Dog Collar Pullover",
      originalPrice: 750.00,
      salePrice: 600.00,
      discount: "-13%",
      rating: 5,
      image: "/collections/mens-collection.svg",
      alt: "Standard Fit Dog Collar Pullover",
      category: 'featured'
    },
    
    {
      id: 13,
      name: "Latest Fashion Jacket",
      originalPrice: 800.00,
      salePrice: 650.00,
      discount: "-19%",
      rating: 4,
      image: "/collections/mens-collection.svg",
      alt: "Latest Fashion Jacket",
      category: 'new-arrivals'
    },
    {
      id: 14,
      name: "Modern Casual Dress",
      originalPrice: 600.00,
      salePrice: 480.00,
      discount: "-20%",
      rating: 5,
      image: "/collections/womens-collection.svg",
      alt: "Modern Casual Dress",
      category: 'new-arrivals'
    },
    {
      id: 15,
      name: "Trendy Sports Shoes",
      originalPrice: 700.00,
      salePrice: 560.00,
      discount: "-20%",
      rating: 4,
      image: "/collections/shoes-collection.svg",
      alt: "Trendy Sports Shoes",
      category: 'new-arrivals'
    },
    {
      id: 16,
      name: "Smart Watch 2024",
      originalPrice: 1200.00,
      salePrice: 960.00,
      discount: "-20%",
      rating: 5,
      image: "/collections/luxury-watches.png",
      alt: "Smart Watch 2024",
      category: 'new-arrivals'
    },

    {
      id: 17,
      name: "Bestseller Classic Shirt",
      originalPrice: 500.00,
      salePrice: 400.00,
      discount: "-20%",
      rating: 5,
      image: "/collections/mens-collection.svg",
      alt: "Bestseller Classic Shirt",
      category: 'best-seller'
    },
    {
      id: 18,
      name: "Popular Summer Top",
      originalPrice: 450.00,
      salePrice: 360.00,
      discount: "-20%",
      rating: 5,
      image: "/collections/womens-collection.svg",
      alt: "Popular Summer Top",
      category: 'best-seller'
    },
    {
      id: 19,
      name: "Favorite Running Shoes",
      originalPrice: 650.00,
      salePrice: 520.00,
      discount: "-20%",
      rating: 5,
      image: "/collections/shoes-collection.svg",
      alt: "Favorite Running Shoes",
      category: 'best-seller'
    },
    {
      id: 20,
      name: "Top Selling Watch",
      originalPrice: 1000.00,
      salePrice: 800.00,
      discount: "-20%",
      rating: 5,
      image: "/collections/luxury-watches.png",
      alt: "Top Selling Watch",
      category: 'best-seller'
    }
  ];

  const filteredProducts = allProducts.filter(product => product.category === activeFilter);

  const filterButtons = [
    { key: 'featured' as FilterType, label: 'Featured' },
    { key: 'new-arrivals' as FilterType, label: 'New Arrivals' },
    { key: 'best-seller' as FilterType, label: 'Best Seller' },
  ];

  return (
    <section className="py-12 bg-white md:py-16 lg:py-20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl font-chillax text-text">
            OUR PRODUCTS
          </h2>
          
          <div className="flex justify-center gap-1 mx-auto overflow-hidden bg-gray-100 border-2 border-black w-fit ">
            {filterButtons.map((button) => (
              <button
                key={button.key}
                onClick={() => setActiveFilter(button.key)}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 border-l-2 border-black ${
                  activeFilter === button.key
                    ? 'bg-primary text-text'
                    : 'bg-white text-gray-600 hover:text-text'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="fade-in-up"
              style={{ 
                animationDelay: `${index * 50}ms`,
              }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 font-medium transition-colors duration-300 rounded-lg bg-primary text-text hover:bg-primary/90">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;