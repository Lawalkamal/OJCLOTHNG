
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const location = useLocation();
  const isTransparent = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 lg:px-16 flex items-center justify-between ${isTransparent ? 'bg-transparent' : 'bg-[#f8f7f5]/80 backdrop-blur-md'}`}>
      <div className="flex-1 hidden md:flex space-x-8 text-xs font-medium tracking-widest uppercase">
        <Link to="/shop" className="hover:opacity-50 transition-opacity">Shop</Link>
        <Link to="/collections" className="hover:opacity-50 transition-opacity">Collections</Link>
      </div>

      <Link to="/" className="text-2xl font-display tracking-tighter text-center flex-1">
        OJCLOTHING
      </Link>

      <div className="flex-1 flex justify-end items-center space-x-8 text-xs font-medium tracking-widest uppercase">
        <Link to="/about" className="hidden md:block hover:opacity-50 transition-opacity">About</Link>
        <button 
          onClick={onOpenCart}
          className="relative group flex items-center space-x-2"
        >
          <span>Cart</span>
          <span className="flex items-center justify-center bg-black text-white w-5 h-5 rounded-full text-[10px] transform transition-transform group-hover:scale-110">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
