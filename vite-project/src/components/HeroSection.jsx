import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/hero1.png',
    title: 'Shaping the Future of Technology',
    subtitle: 'A premier institute of national importance nurturing world-class engineers and innovators since 1886',
  },
  {
    image: '/images/hero2.png',
    title: 'Excellence in Education & Research',
    subtitle: 'Cutting-edge research facilities, distinguished faculty, and a vibrant academic ecosystem',
  },
  {
    image: '/images/hero3.png',
    title: 'Where Innovation Meets Tradition',
    subtitle: 'Over a century of academic excellence on the banks of the sacred Ganges river',
  },
];

const stats = [
  { value: '130+', label: 'Years of Legacy' },
  { value: '5000+', label: 'Students' },
  { value: '300+', label: 'Faculty Members' },
  { value: '50+', label: 'Research Labs' },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-[85vh] min-h-[550px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover ${idx === current ? 'animate-hero-zoom' : ''}`}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl">
          <div
            key={current}
            className="animate-fade-in-up"
          >
            <span className="inline-block bg-burnt-600/80 text-white text-xs font-bold tracking-[3px] uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              An Institute of National Importance
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-[var(--font-heading)] leading-tight drop-shadow-lg">
              {slides[current].title}
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              {slides[current].subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="bg-burnt-600 hover:bg-burnt-700 text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg animate-pulse-glow"
            >
              Apply Now →
            </a>
            <a
              href="#about"
              className="glass-card text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Explore Campus
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-6xl mx-auto px-4 pb-6">
            <div className="glass-card rounded-2xl px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-burnt-400">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current
                ? 'bg-burnt-500 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
