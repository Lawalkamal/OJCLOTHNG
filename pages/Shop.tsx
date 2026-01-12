
import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

declare const gsap: any;
declare const ScrollTrigger: any;

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Grid item entrance
    const items = document.querySelectorAll('.shop-grid-item');
    gsap.fromTo(items, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.shop-grid-container',
          start: 'top 80%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, [filteredProducts]);

  return (
    <div className="px-8 lg:px-16 pt-24 pb-32">
      <header className="mb-24">
        <h1 className="text-6xl md:text-9xl font-display tracking-tighter mb-12">SHOP ALL</h1>
        
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 border-b border-neutral-100 pb-10 overflow-x-auto no-scrollbar">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold whitespace-nowrap transition-all pb-2 border-b-2 ${activeCategory === category ? 'border-black text-black' : 'border-transparent text-neutral-400 hover:text-black'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <div className="shop-grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
        {filteredProducts.map(product => (
          <div key={product.id} className="shop-grid-item opacity-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-48">
          <p className="text-xs text-neutral-400 uppercase tracking-[0.4em]">No artifacts found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
