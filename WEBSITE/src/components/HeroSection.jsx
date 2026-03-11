import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroImages } from '../data/navigation';

/**
 * HeroSection Component
 * 
 * Features a cinematic background image carousel with high-contrast text overlays.
 * Uses Framer Motion for buttery-smooth transitions and text animations.
 */
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoized rotation logic for the carousel
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  // Automatic slide rotation every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full overflow-hidden bg-slate-900"
      aria-label="Campus Highlights"
    >
      {/* Background Layer: Cinematic Image Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ 
              duration: 2.5, 
              ease: [0.33, 1, 0.68, 1] // Custom "Ease Out" for premium feel
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentIndex]}
              alt={`Campus Panorama ${currentIndex + 1}`}
              className="w-full h-full object-cover brightness-[0.7] contrast-[1.05]"
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Gradients for Depth and Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#811919]/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Layer: Primary Branding and Messaging */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <header className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              y: [40, 0, 0, -30] 
            }}
            transition={{ 
              duration: 9, 
              times: [0, 0.15, 0.85, 1],
              ease: "circOut"
            }}
            className="pointer-events-none select-none"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] text-white font-black mb-6 leading-[1.05] drop-shadow-2xl uppercase tracking-tighter">
              National Institute of <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Technology Patna</span>
            </h1>
            
            <div className="w-32 h-1.5 bg-[#811919] mx-auto mb-10 rounded-full shadow-[0_0_30px_rgba(129,25,25,0.6)]" />
            
            <p className="text-xl md:text-4xl text-white/90 font-bold uppercase tracking-[0.3em] drop-shadow-lg">
              A Legacy of Excellence since 1886
            </p>
          </motion.div>
        </header>

        {/* Scroll Indicator Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-3 text-white/40 uppercase text-[10px] tracking-[0.4em] font-black"
        >
          <span>Discover More</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#811919] to-transparent rounded-full animate-bounce" />
        </motion.div>
      </div>

      {/* Interactive Layer: Slide Pagination */}
      <nav 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4 p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10"
        role="tablist"
      >
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            role="tab"
            aria-selected={idx === currentIndex}
            aria-label={`Show slide ${idx + 1}`}
            className={`
              h-2 rounded-full transition-all duration-700 
              ${idx === currentIndex ? 'w-16 bg-[#811919] shadow-[0_0_15px_rgba(129,25,25,0.8)]' : 'w-4 bg-white/40 hover:bg-white'}
            `}
          />
        ))}
      </nav>
    </section>
  );
};

export default HeroSection;
