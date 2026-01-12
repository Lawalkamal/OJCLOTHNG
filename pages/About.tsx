
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="px-8 lg:px-16 pt-16 pb-32">
      <div className="max-w-4xl mx-auto space-y-24">
        <header>
          <h1 className="text-6xl md:text-9xl font-display tracking-tighter mb-12">THE STUDIO</h1>
          <p className="text-xl md:text-3xl font-light text-neutral-600 leading-snug">
            OJCLOTHING is a modern design studio focused on the intersection of architectural precision and wearable art.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
           <div className="aspect-[3/4] bg-neutral-100">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800" 
                alt="Studio" 
                className="w-full h-full object-cover"
              />
           </div>
           <div className="space-y-8 pt-12">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold">Philosophy</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-body">
                Founded in 2024, our studio was born from a desire to strip away the noise of fast fashion. We believe that clothing is a sculptural extension of the self. 
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed font-body">
                Every stitch, every seam, and every fabric choice is calculated. We work exclusively with family-owned mills in Japan and Italy to source materials that last a lifetime, not just a season.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed font-body">
                Our silhouettes are oversized yet structured, designed to provide comfort without compromising the sharp, editorial aesthetic we're known for.
              </p>
           </div>
        </section>

        <section className="border-t border-neutral-100 pt-24">
           <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-16">Core Principles</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <span className="text-4xl font-display mb-4 block">01</span>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Material First</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-body">We start with the touch. If the fabric doesn't tell a story, the design won't either.</p>
              </div>
              <div>
                <span className="text-4xl font-display mb-4 block">02</span>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Zero Waste</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-body">Our production methods prioritize efficiency and environmental responsibility at every step.</p>
              </div>
              <div>
                <span className="text-4xl font-display mb-4 block">03</span>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Timeless Form</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-body">We design for the year 2050. Trends are temporary; structure is permanent.</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;
