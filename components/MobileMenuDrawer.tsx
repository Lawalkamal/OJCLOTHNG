
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end md:hidden">
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div 
        className="relative w-full max-w-sm bg-[#f8f7f5] h-full flex flex-col shadow-2xl animate-slide-left"
      >
        <div className="flex items-center justify-between p-8 border-b border-neutral-100">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em]">Menu</h2>
          <button onClick={onClose} className="text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">Close</button>
        </div>

        <div className="flex flex-col p-8 space-y-8">
          {NAV_LINKS.map(link => (
            <Link 
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="text-3xl font-display tracking-tight text-neutral-800 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
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

export default MobileMenuDrawer;
