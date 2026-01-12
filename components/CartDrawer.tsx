
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string, size: string) => void;
  onUpdateQty: (id: string, size: string, delta: number) => void;
  total: number;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty, total }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    // GSAP animation for opening/closing handled via state or simple CSS transition for reliability in demo
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div 
        ref={drawerRef}
        className="relative w-full max-w-md bg-[#f8f7f5] h-full flex flex-col shadow-2xl animate-slide-left"
      >
        <div className="flex items-center justify-between p-8 border-b border-neutral-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em]">Shopping Bag</h2>
          <button onClick={onClose} className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">Close</button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Your bag is empty</p>
              <Link to="/shop" onClick={onClose} className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-black pb-1 hover:pb-2 transition-all">Start Shopping</Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex space-x-6">
                <div className="w-20 aspect-[3/4] bg-neutral-100 flex-shrink-0">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider">{item.name}</h3>
                    <button onClick={() => onRemove(item.id, item.selectedSize)} className="text-[10px] text-neutral-400 hover:text-black">Remove</button>
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-1 uppercase">Size: {item.selectedSize}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-neutral-200 px-2 py-1 space-x-4">
                      <button onClick={() => onUpdateQty(item.id, item.selectedSize, -1)} className="text-xs">-</button>
                      <span className="text-[10px] w-4 text-center">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, item.selectedSize, 1)} className="text-xs">+</button>
                    </div>
                    <span className="text-[11px] font-medium">${item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-neutral-100 space-y-6">
            <div className="flex justify-between items-end">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">Estimated Total</span>
              <span className="text-lg font-medium">${total}</span>
            </div>
            <Link 
              to="/checkout" 
              onClick={onClose}
              className="block w-full bg-black text-white text-center py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors"
            >
              Continue to Checkout
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slideLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default CartDrawer;
