
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CheckoutProps {
  cartItems: CartItem[];
  total: number;
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems, total }) => {
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-display mb-4">Your bag is empty</h1>
        <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="px-8 lg:px-16 pt-12 pb-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Forms */}
        <div className="lg:col-span-7 space-y-16">
          <header>
            <h1 className="text-4xl font-display tracking-tight mb-2">CHECKOUT</h1>
            <p className="text-xs text-neutral-400 uppercase tracking-widest">Minimal Secure Checkout</p>
          </header>

          <section className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Contact Information</h3>
            <input type="email" placeholder="Email Address" className="w-full border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black" />
          </section>

          <section className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Shipping Address</h3>
            <div className="grid grid-cols-2 gap-4">
               <input type="text" placeholder="First Name" className="border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black" />
               <input type="text" placeholder="Last Name" className="border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black" />
            </div>
            <input type="text" placeholder="Address" className="w-full border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black" />
            <div className="grid grid-cols-3 gap-4">
               <input type="text" placeholder="City" className="border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black" />
               <input type="text" placeholder="Postal Code" className="border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black" />
               <input type="text" placeholder="Country" className="border border-neutral-200 p-4 text-sm focus:outline-none focus:border-black" />
            </div>
          </section>

          <section className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold">Payment Method</h3>
            <div className="p-8 border border-black bg-neutral-50 flex justify-between items-center">
               <span className="text-xs font-bold uppercase tracking-widest">Credit Card</span>
               <div className="flex space-x-2">
                 <div className="w-8 h-5 bg-neutral-300 rounded" />
                 <div className="w-8 h-5 bg-neutral-300 rounded" />
               </div>
            </div>
          </section>

          <button className="w-full bg-black text-white py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-neutral-800 transition-colors">
            Complete Order — ${total + 25}
          </button>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-5">
           <div className="bg-white p-8 lg:sticky lg:top-32 border border-neutral-100">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 pb-4 border-b border-neutral-100">Order Summary</h3>
              <div className="space-y-6 mb-8 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-4">
                       <div className="w-12 aspect-[3/4] bg-neutral-50">
                         <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                       </div>
                       <div>
                         <p className="font-bold uppercase tracking-wider">{item.name}</p>
                         <p className="text-neutral-400 text-[10px] mt-1 uppercase">QTY {item.quantity} / {item.selectedSize}</p>
                       </div>
                    </div>
                    <span className="font-medium">${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-neutral-100">
                <div className="flex justify-between text-[11px] uppercase tracking-widest text-neutral-400">
                  <span>Subtotal</span>
                  <span className="text-black font-medium">${total}</span>
                </div>
                <div className="flex justify-between text-[11px] uppercase tracking-widest text-neutral-400">
                  <span>Shipping</span>
                  <span className="text-black font-medium">$25.00</span>
                </div>
                <div className="flex justify-between text-[11px] uppercase tracking-widest font-bold text-black pt-4 border-t border-neutral-100">
                  <span>Total</span>
                  <span className="text-xl">${total + 25}</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
