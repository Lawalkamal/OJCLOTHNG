
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-24 pb-12 px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-display mb-8 tracking-tighter">OJCLOTHING</h2>
          <p className="max-w-xs text-sm text-neutral-500 leading-relaxed mb-8">
            Handcrafted minimalist essentials for the modern silhouette. Focused on architectural purity and timeless quality.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs uppercase tracking-widest font-medium hover:underline">Instagram</a>
            <a href="#" className="text-xs uppercase tracking-widest font-medium hover:underline">Twitter</a>
            <a href="#" className="text-xs uppercase tracking-widest font-medium hover:underline">Vimeo</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6">Menu</h4>
          <ul className="space-y-3 text-sm text-neutral-500">
            <li><Link to="/shop" className="hover:text-black transition-colors">Shop All</Link></li>
            <li><Link to="/collections" className="hover:text-black transition-colors">Collections</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">Philosophy</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-6">Support</h4>
          <ul className="space-y-3 text-sm text-neutral-500">
            <li><a href="#" className="hover:text-black transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Returns</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Care Guide</a></li>
            <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-24 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-400">
        <p>© 2024 OJCLOTHING. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
