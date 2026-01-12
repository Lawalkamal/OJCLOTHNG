
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out ${isHovered ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
        />
        {product.images[1] && (
          <img 
            src={product.images[1]} 
            alt={`${product.name} alternate`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out transform ${isHovered ? 'scale-105 opacity-100' : 'scale-110 opacity-0'}`}
          />
        )}
        
        {product.isNew && (
          <span className="absolute top-4 left-4 text-[9px] font-semibold tracking-widest uppercase bg-white px-2 py-1">New</span>
        )}
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase">{product.name}</h3>
          <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-wider">{product.category}</p>
        </div>
        <p className="text-xs font-medium">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
