
import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductDetailProps {
  onAddToCart: (product: Product, size: string, color: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
    } else {
      navigate('/404');
    }
  }, [product, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!product) return;
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    onAddToCart(product, selectedSize, selectedColor);
  };

  return (
    <div className="px-8 lg:px-16 pt-12 pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`aspect-square bg-neutral-100 transition-opacity ${activeImage === idx ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:sticky lg:top-32 self-start space-y-12">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h1 className="text-4xl font-display tracking-tight uppercase leading-none">{product.name}</h1>
              <span className="text-xl font-medium">${product.price}</span>
            </div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest">{product.category}</p>
          </div>

          <div className="space-y-8">
            <p className="text-sm text-neutral-500 leading-relaxed font-body">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Select Color</h4>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">{selectedColor}</span>
              </div>
              <div className="flex space-x-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-all ${selectedColor === color ? 'bg-black text-white border-black' : 'border-neutral-200 hover:border-black'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
               <div className="flex justify-between items-center">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em]">Select Size</h4>
                <button className="text-[9px] text-neutral-400 uppercase tracking-widest underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-12 flex items-center justify-center text-xs border transition-all ${selectedSize === size ? 'bg-black text-white border-black' : 'border-neutral-200 hover:border-black'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-neutral-800 transition-all transform hover:-translate-y-1"
            >
              Add to Bag
            </button>
          </div>

          <div className="pt-12 border-t border-neutral-100 grid grid-cols-2 gap-8 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
            <div>
               <p className="text-black mb-2">Free Shipping</p>
               <p>On orders over $300</p>
            </div>
            <div>
               <p className="text-black mb-2">Extended Returns</p>
               <p>30-day effortless returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
