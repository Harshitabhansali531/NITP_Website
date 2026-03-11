import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const images = [
    "/images/DJI_20250925092321_0053_D (1).png",
    "/images/DJI_20250925145712_0143_D.png",
    "/images/IMG_20251019_214850.png",
    "/images/DJI_20250925145758_0148_D.png",
    "/images/DJI_20250925150150_0153_D.png",
    "/images/DSC_0161 (2).png",
    "/images/DJI_20250925161831_0200_D.png",
    "/images/TYNE9859(1).png",
    "/images/VIS07257.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          transition={{ 
            duration: 2, 
            ease: [0.4, 0, 0.2, 1] // Custom refined cubic-bezier for buttery smooth movement
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentIndex]}
            alt={`Campus view ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: [0, 1, 1, 0], // Fades in, stays, then fades out
            y: [30, 0, 0, -20]     // Slides up, stays, then moves up slightly on exit
          }}
          transition={{ 
            duration: 8,           // Total animation duration
            times: [0, 0.1, 0.8, 1], // Timing of each stage (0-10% in, 10-80% stay, 80-100% out)
            delay: 0.5 
          }}
          className="max-w-5xl pointer-events-none" // pointer-events-none so it doesn't block interactions after fading
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] text-white font-black mb-6 leading-[1.1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] uppercase tracking-tight">
            National Institute of <br/> Technology Patna
          </h2>
          <div className="w-24 h-1.5 bg-[#811919] mx-auto mb-8 rounded-full shadow-[0_0_20px_rgba(129,25,25,0.5)]" />
          <p className="text-xl md:text-3xl text-gray-100 drop-shadow-lg font-bold uppercase tracking-[0.2em] relative inline-block">
            <span className="relative z-10">A Legacy of Excellence since 1886.</span>
          </p>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentIndex ? 'w-12 bg-[#811919]' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
