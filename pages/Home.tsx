
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, HERO_IMAGES } from '../constants';
import ProductCard from '../components/ProductCard';

declare const gsap: any;
declare const ScrollTrigger: any;

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero Image Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Parallax & Reveal
    gsap.fromTo(heroTextRef.current, 
      { opacity: 0, y: 80, letterSpacing: "0.2em" }, 
      { opacity: 1, y: 0, letterSpacing: "-0.05em", duration: 1.8, ease: 'power4.out', delay: 0.5 }
    );

    gsap.to(heroImageRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: heroImageRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Section Entrance Animations
    const sections = containerRef.current?.querySelectorAll('.gsap-section');
    sections?.forEach((section: any) => {
      // Reveal the section itself
      gsap.fromTo(section,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        }
      );

      // Parallax for inner images if they exist
      const parallaxImgs = section.querySelectorAll('.gsap-parallax');
      parallaxImgs.forEach((img: any) => {
        gsap.to(img, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 3);

  return (
    <div ref={containerRef} className="bg-[#f8f7f5]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div ref={heroImageRef} className="absolute inset-0 z-0 scale-110">
          {HERO_IMAGES.map((src, index) => (
            <img 
              key={src}
              src={src} 
              alt={`Fashion Hero ${index + 1}`}
              className={`md:h-[230vh] absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} `}
            />
          ))}
          <div className="absolute inset-0 bg-black/15" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 ref={heroTextRef} className="text-7xl md:text-[12rem] font-display leading-[0.8] tracking-tighter opacity-0">
            OJ<br />CLOTHINGS
          </h1>
          <div className="mt-12 flex justify-center space-x-12">
            <Link to="/shop" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white/50 pb-2 hover:border-white transition-all duration-500">Explore Shop</Link>
            <Link to="/collections" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-white/50 pb-2 hover:border-white transition-all duration-500">Collections</Link>
          </div>
        </div>

        {/* Floating grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20 hidden lg:block">
          <div className="h-full w-[1px] bg-white absolute left-1/4" />
          <div className="h-full w-[1px] bg-white absolute left-2/4" />
          <div className="h-full w-[1px] bg-white absolute left-3/4" />
          <div className="w-full h-[1px] bg-white absolute top-1/4" />
          <div className="w-full h-[1px] bg-white absolute top-2/4" />
          <div className="w-full h-[1px] bg-white absolute top-3/4" />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="gsap-section py-40 px-8 lg:px-16 flex flex-col md:flex-row items-center gap-16 md:gap-32">
        <div className="flex-1">
          <h2 className="text-4xl lg:text-7xl font-display tracking-tight leading-tight">
            REDEFINING THE <br /> MODERN SILHOUETTE
          </h2>
        </div>
        <div className="flex-1 space-y-10">
          <p className="text-neutral-500 leading-relaxed max-w-md font-body text-lg">
            OJCLOTHING creates digital clothes that exist for those who value architectural precision over fleeting trends. We merge digital possibilities with the tangible needs of the modern minimalist.
          </p>
          <Link to="/about" className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-black pb-1 hover:pb-3 transition-all duration-500">Our Story</Link>
        </div>
      </section>

      {/* Featured Grid (Asymmetrical) */}
      <section className="gsap-section py-24 px-8 lg:px-16 bg-white overflow-hidden">
        <div className="flex justify-between items-end mb-24">
          <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold">Featured Pieces</h3>
          <Link to="/shop" className="text-[10px] text-neutral-400 uppercase tracking-widest hover:text-black transition-colors">View All Products</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-7">
            {featuredProducts[0] && <ProductCard product={featuredProducts[0]} />}
          </div>
          <div className="md:col-span-5 md:mt-48">
            {featuredProducts[1] && <ProductCard product={featuredProducts[1]} />}
          </div>
          <div className="md:col-span-5 -mt-24">
            {featuredProducts[2] && <ProductCard product={featuredProducts[2]} />}
          </div>
          <div className="md:col-span-7 md:mt-24 relative overflow-hidden group">
             <div className="aspect-[16/9] bg-neutral-50 flex items-center justify-center p-12 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Editorial" 
                  className="gsap-parallax w-full h-full object-cover grayscale opacity-80 scale-125"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-7xl md:text-[12rem] font-display text-white mix-blend-difference tracking-tighter">ESSENTIALS</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="gsap-section py-48 bg-[#1a1a1a] text-white overflow-hidden">
        <div className="px-8 lg:px-16 text-center max-w-4xl mx-auto">
          <div className="mb-12 flex justify-center">
             <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
          </div>
          <h4 className="text-2xl md:text-5xl font-light italic leading-relaxed tracking-tight mb-16 px-4">
            "Design is not just what it looks like and feels like. Design is how it works and lives with you."
          </h4>
          <p className="text-[10px] uppercase tracking-[0.6em] text-white/40">Founder's Note — OJ</p>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="gsap-section py-32 px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-neutral-200 border border-neutral-200">
           <Link to="/collections" className="group relative aspect-square md:aspect-[4/3] bg-white overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800" 
                alt="Summer 24" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-700" />
              <div className="relative z-10 text-center text-white transform transition-transform duration-700 group-hover:scale-105">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-80">Collection 24</span>
                <h3 className="text-5xl md:text-7xl font-display tracking-tight mt-3">SUMMER CAPSULE</h3>
              </div>
           </Link>
           <Link to="/collections" className="group relative aspect-square md:aspect-[4/3] bg-white overflow-hidden flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800" 
                alt="Archive" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-700" />
              <div className="relative z-10 text-center text-white transform transition-transform duration-700 group-hover:scale-105">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-80">Series One</span>
                <h3 className="text-5xl md:text-7xl font-display tracking-tight mt-3">ARCHIVE PIECES</h3>
              </div>
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
