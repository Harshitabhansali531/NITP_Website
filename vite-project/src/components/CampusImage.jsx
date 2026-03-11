const CampusImage = () => {
  return (
    <section id="campus" className="relative">
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="vite-project\public\images\TYNE9859 (1).png"
          alt="NIT Patna Campus Aerial View"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[var(--font-heading)] mb-3">
              Our Campus
            </h2>
            <p className="text-gray-200 max-w-xl text-sm md:text-base leading-relaxed">
              Spread across a lush green campus on the banks of the Ganges, NIT Patna provides a 
              serene and inspiring environment for academic excellence and holistic development.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 text-burnt-400 hover:text-burnt-300 font-semibold text-sm transition-colors"
            >
              Take a Virtual Tour
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusImage;
