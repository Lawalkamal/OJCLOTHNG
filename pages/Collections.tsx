
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

declare const gsap: any;
declare const ScrollTrigger: any;

const Collections: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('.collection-item');
    items.forEach((item: any) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );

      // Image Parallax within the item
      const img = item.querySelector('img');
      gsap.to(img, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  const items = [
    { title: 'Spring / Summer', year: '2024', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200' },
    { title: 'The Monolith', year: 'Archive', img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Essential Layers', year: 'Core', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Nocturnal', year: 'Edition', img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200' },
  ];

  return (
    <div className="px-8 lg:px-16 pt-24 pb-32">
      <h1 className="text-6xl md:text-[10rem] font-display tracking-tighter mb-32">COLLECTIONS</h1>
      
      <div className="space-y-48">
        {items.map((item, idx) => (
          <div key={idx} className={`collection-item flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
            <div className="flex-1 overflow-hidden">
               <div className="aspect-[4/5] md:aspect-[4/3] bg-neutral-100 group cursor-pointer relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 scale-125"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-10 py-5 text-[10px] font-bold uppercase tracking-[0.3em]">View Archive</span>
                  </div>
               </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-[0.5em] text-neutral-400">{item.year}</span>
              <h2 className="text-5xl md:text-8xl font-display tracking-tighter mt-6 mb-10 leading-none">{item.title}</h2>
              <p className="text-lg text-neutral-500 font-body max-w-sm mx-auto md:mx-0 leading-relaxed mb-12">
                An exploration of material and form, focusing on the dialogue between the wearer and the urban environment. Architectural precision meeting human fluidity.
              </p>
              <Link to="/shop" className="text-[12px] font-bold uppercase tracking-[0.3em] border-b-2 border-black pb-2 hover:pb-4 transition-all duration-500">Shop Series</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
