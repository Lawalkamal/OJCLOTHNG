
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-8">
      <h1 className="text-[12rem] font-display text-neutral-100 absolute z-0 select-none">404</h1>
      <div className="relative z-10">
        <h2 className="text-4xl font-display tracking-tight mb-4">LOST IN SPACE</h2>
        <p className="text-sm text-neutral-500 mb-8 max-w-xs mx-auto">The page you're looking for has either been moved or doesn't exist in our current collection.</p>
        <Link to="/" className="inline-block bg-black text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-800 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
