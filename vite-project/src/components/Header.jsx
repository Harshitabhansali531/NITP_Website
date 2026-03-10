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
    <header className="bg-white border-b border-burnt-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.png"
            alt="NIT Patna Logo"
            className="w-16 h-16 object-contain"
            width={64}
            height={64}
          />
          <div className="relative overflow-hidden h-14 flex items-center">
            <div
              className={`transition-all duration-700 ease-in-out ${
                showHindi
                  ? '-translate-y-full opacity-0'
                  : 'translate-y-0 opacity-100'
              }`}
              style={{ position: showHindi ? 'absolute' : 'relative' }}
            >
              <h1 className="text-xl md:text-2xl font-bold text-navy-900 font-[var(--font-heading)] leading-tight">
                National Institute of Technology
              </h1>
              <p className="text-sm md:text-base text-burnt-700 font-semibold tracking-wide">
                Patna
              </p>
            </div>
            <div
              className={`transition-all duration-700 ease-in-out ${
                showHindi
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-full opacity-0'
              }`}
              style={{ position: !showHindi ? 'absolute' : 'relative' }}
            >
              <h1 className="text-xl md:text-2xl font-bold text-navy-900 leading-tight" style={{ fontFamily: 'var(--font-hindi)' }}>
                राष्ट्रीय प्रौद्योगिकी संस्थान
              </h1>
              <p className="text-sm md:text-base text-burnt-700 font-semibold tracking-wide" style={{ fontFamily: 'var(--font-hindi)' }}>
                पटना
              </p>
            </div>
          </div>
        </div>

        {/* Right: Address */}
        <div className="hidden md:flex items-center gap-3 text-right">
          <div className="text-sm text-gray-600 leading-snug">
            <p className="font-semibold text-navy-800">Ashok Rajpath, Patna</p>
            <p>Bihar — 800005, India</p>
            <p className="text-burnt-600 font-medium">📞 +91-612-2371715</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-burnt-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-burnt-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
