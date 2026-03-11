const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Video/Screen Recording 2026-03-11 175445.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-5xl animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] text-white font-bold mb-6 leading-tight drop-shadow-2xl font-[var(--font-heading)] tracking-wide">
            NATIONAL INSTITUTE OF TECHNOLOGY PATNA
          </h2>
          <p className="text-xl md:text-3xl text-gray-200 drop-shadow-md font-light font-[var(--font-heading)] mt-4">
            A Legacy of Excellence since 1886.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
