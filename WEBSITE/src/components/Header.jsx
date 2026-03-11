import { useState, useEffect } from 'react';

const Header = () => {
  const [showHindi, setShowHindi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHindi(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white shadow-md z-[60] relative">
      <div className="max-w-[1750px] mx-auto px-4 py-4 md:py-6 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-6">
          <img
            src="public\images\NITP_logo1 (1).png"
            alt="NIT Patna Logo"
            className="w-24 h-24 md:w-32 md:h-32 object-contain"
          />
          <div className="relative overflow-hidden h-20 md:h-24 flex flex-col justify-center">
            <div
              className={`transition-all duration-700 ease-in-out ${
                showHindi
                  ? '-translate-y-full opacity-0'
                  : 'translate-y-0 opacity-100'
              }`}
              style={{ position: showHindi ? 'absolute' : 'relative' }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#811919] font-[var(--font-heading)] leading-tight tracking-wide">
                National Institute of Technology
              </h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#811919] font-[var(--font-heading)] leading-tight tracking-wide">Patna</h1>
            </div>
            <div
              className={`transition-all duration-700 ease-in-out ${
                showHindi
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
              }`}
              style={{ position: !showHindi ? 'absolute' : 'relative' }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#811919] leading-tight tracking-wide" style={{ fontFamily: 'var(--font-hindi)' }}>
                राष्ट्रीय प्रौद्योगिकी संस्थान </h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#811919] leading-tight tracking-wide" style={{ fontFamily: 'var(--font-hindi)' }}>
              पटना</h1>
            </div>
          </div>
        </div>

        {/* Right: Address */}
        <div className="hidden lg:flex items-center gap-4 text-right">
          <div className="text-sm md:text-base text-[#811919]/70 leading-snug">
            <p className="font-bold text-[#811919] text-lg">Ashok Rajpath, Patna</p>
            <p className="text-[#811919]/80">Bihar — 800005, India</p>
            <p className="text-[#811919] font-semibold mt-1">📞 +91-612-2371715</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#811919]/10 flex items-center justify-center border border-[#811919]/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#811919]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
