
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenuDrawer from './MobileMenuDrawer';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const location = useLocation();
  const isTransparent = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-8 lg:px-16 flex items-center justify-between ${isTransparent ? 'bg-transparent' : 'bg-[#f8f7f5]/80 backdrop-blur-md'}`}>
        {/* Left Side: Hamburger on Mobile, Nav Links on Desktop */}
        <div className="flex items-center justify-start flex-1">
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-xs uppercase tracking-widest">
            Menu
          </button>
          <div className="hidden md:flex space-x-8 text-xs font-medium tracking-widest uppercase">
            <Link to="/shop" className="hover:opacity-50 transition-opacity">Shop</Link>
            <Link to="/collections" className="hover:opacity-50 transition-opacity">Collections</Link>
          </div>
        </div>

        {/* Center: Logo */}
        <Link to="/" className="text-2xl font-display tracking-tighter text-center mx-auto">
          OJCLOTHINGS
        </Link>

        {/* Right Side: Nav Links on Desktop, Cart on all */}
        <div className="flex-1 flex justify-end items-center space-x-8 text-xs font-medium tracking-widest uppercase">
          <Link to="/about" className="hidden md:block hover:opacity-50 transition-opacity">About</Link>
          <Link to="/contact" className="hidden md:block hover:opacity-50 transition-opacity">Contact</Link>
          <button 
            onClick={onOpenCart}
            className="relative group flex items-center space-x-2"
          >
            <span className="hidden md:inline">Cart</span>
            <span className="flex items-center justify-center bg-black text-white w-5 h-5 rounded-full text-[10px] transform transition-transform group-hover:scale-110">
              {cartCount}
            </span>
          </button>
        </div>
      </nav>
      <MobileMenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
