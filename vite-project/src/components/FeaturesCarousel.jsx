import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Admissions',
    description: 'Join our prestigious institution. Explore programs, requirements, and deadlines.',
    bgClass: 'bg-[#811919] text-white',
    link: '#',
  },
  {
    id: 2,
    title: 'Training and Placement',
    description: 'Launch your career. We connect top talent with industry-leading organizations.',
    bgClass: 'bg-white text-navy-900 border border-gray-100',
    link: '#',
  },
  {
    id: 3,
    title: 'Study In India',
    description: 'Experience world-class education and rich cultural heritage at NIT Patna.',
    bgClass: 'bg-red-50 text-[#811919]',
    link: '#',
  },
  {
    id: 4,
    title: 'Recruitment',
    description: 'Join our faculty and staff. Build the future of technology education with us.',
    bgClass: 'bg-navy-900 text-white',
    link: '#',
  },
  {
    id: 5,
    title: 'Alumni',
    description: 'Stay connected. Join our global network of distinguished graduates.',
    bgClass: 'bg-gradient-to-br from-[#811919] to-red-900 text-white',
    link: '#',
  },
  {
    id: 6,
    title: 'International Affairs',
    description: 'Global partnerships and exchange programs for a boundaryless education.',
    bgClass: 'bg-white text-[#811919] border border-gray-100',
    link: '#',
  },
  {
    id: 7,
    title: 'Electronics & ICT Academy',
    description: 'Advanced training programs sponsored by the Ministry of Electronics and IT.',
    bgClass: 'bg-red-100 text-navy-900',
    link: '#',
  },
  {
    id: 8,
    title: 'Development Fund',
    description: 'Support NIT Patna\'s growth. Contribute to infrastructure and research.',
    bgClass: 'bg-navy-50 text-[#811919]',
    link: '#',
  },
];

const FeaturesCarousel = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" ref={containerRef}>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#811919]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#811919]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1750px] mx-auto px-4 relative z-10 w-full mb-8 flex justify-between items-end">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 font-[var(--font-heading)] uppercase tracking-wider">
            WELCOME TO <span className="text-[#811919]">NIT PATNA</span>
          </h2>
        </div>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-[#811919] hover:text-white hover:border-[#811919] transition-all shadow-sm"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:bg-[#811919] hover:text-white hover:border-[#811919] transition-all shadow-sm"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 md:px-12 pb-12 pt-4 snap-x snap-mandatory scrollbar-hide relative z-10"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((feature) => (
          <motion.a
            href={feature.link}
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: feature.id * 0.1 }}
            className={`min-w-[320px] md:min-w-[400px] w-[320px] md:w-[400px] h-[450px] relative rounded-3xl overflow-hidden group snap-center cursor-pointer block shrink-0 transition-transform duration-300 hover:-translate-y-2 ${feature.bgClass} shadow-lg`}
          >
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />

            {/* Content layout */}
            <div className="absolute inset-0 z-10 p-10 flex flex-col h-full">
              {/* Top accent line */}
              <div className="w-12 h-1 bg-current opacity-30 mb-8 rounded-full" />
              
              <h3 className="text-3xl font-bold mb-4 font-[var(--font-heading)] leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-lg opacity-80 mb-8 flex-1">
                {feature.description}
              </p>
              
              {/* Bottom Interactive Element */}
              <div className="flex items-center gap-3 font-semibold mt-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm uppercase tracking-wider">Explore</span>
                <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-current group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:!text-inherit">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      
      {/* Mobile nav indicator */}
      <div className="flex w-full justify-center gap-2 mt-4 md:hidden relative z-10 px-4">
        {features.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-gray-300" />
        ))}
        <div className="w-2 h-2 rounded-full bg-[#811919] absolute" />
      </div>

    </section>
  );
};

export default FeaturesCarousel;
