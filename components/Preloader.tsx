
import React, { useEffect, useRef } from 'react';

declare const gsap: any;

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    // Split text into characters for a more refined animation if possible, 
    // but a simple elegant reveal works best for high-end feel.
    tl.fromTo(textRef.current, 
      { 
        opacity: 0, 
        y: 20, 
        letterSpacing: "1em" 
      }, 
      { 
        opacity: 1, 
        y: 0, 
        letterSpacing: "0.2em", 
        duration: 1.2, 
        ease: "power4.out" 
      }
    )
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power4.in",
      delay: 0.5
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-white flex items-center justify-center overflow-hidden"
    >
      <h1 
        ref={textRef} 
        className="text-4xl md:text-6xl font-display tracking-[0.2em] text-black"
      >
        OJCLOTHING
      </h1>
    </div>
  );
};

export default Preloader;
