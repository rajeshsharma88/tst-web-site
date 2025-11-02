
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
      <div className="overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-primary mb-1">{product.category}</span>
        <h3 className="text-lg font-bold text-secondary mb-2 truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm flex-grow mb-4">{product.short}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-auto block text-center bg-primary text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
