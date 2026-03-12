import { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate progress while images load
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate as it gets closer
        const increment = prev < 60 ? 4 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Wait a moment at 100% then fade out
      const timer = setTimeout(() => setFadeOut(true), 300);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(() => onFinish(), 700);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background: 'linear-gradient(135deg, #1a0505 0%, #2d0a0a 30%, #811919 70%, #a52222 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial glow behind logo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />
        {/* Subtle animated rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/5"
          style={{ animation: 'pulse-ring 2s ease-in-out infinite' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-white/[0.03]"
          style={{ animation: 'pulse-ring 2s ease-in-out infinite 0.5s' }}
        />
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo with glow */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-40"
            style={{
              background: 'radial-gradient(circle, rgba(255,200,150,0.3) 0%, transparent 70%)',
              transform: 'scale(2)',
            }}
          />
          <img
            src="/images/NITP_logo1 (1).png"
            alt="NIT Patna Logo"
            className="w-28 h-28 md:w-36 md:h-36 object-contain relative z-10 drop-shadow-2xl"
            style={{ animation: 'float-logo 2.5s ease-in-out infinite' }}
          />
        </div>

        {/* Institution name */}
        <div className="text-center relative z-10">
          <h1
            className="text-2xl md:text-3xl font-bold text-white tracking-wide"
            style={{ fontFamily: 'var(--font-heading)', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            National Institute of Technology
          </h1>
          <h2
            className="text-xl md:text-2xl font-bold text-white/90 tracking-[0.3em] uppercase mt-1"
            style={{ fontFamily: 'var(--font-heading)', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            Patna
          </h2>
        </div>

        {/* Progress bar */}
        <div className="w-56 md:w-72 relative z-10 mt-4">
          <div className="h-[3px] bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full rounded-full transition-all duration-200 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #f4a460, #fff5e6, #f4a460)',
                boxShadow: '0 0 15px rgba(244,164,96,0.5), 0 0 30px rgba(244,164,96,0.2)',
              }}
            />
          </div>
          <p className="text-white/40 text-[11px] text-center mt-3 font-medium tracking-[0.2em] uppercase">
            {progress < 100 ? 'Loading...' : 'Welcome'}
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-logo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
