const CampusImage = () => {
  return (
    <section id="campus" className="relative">
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="/images/TYNE9859(1).png"
          alt="NIT Patna Campus Aerial View"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Top Blend Gradient (Seamless transition from white section above) */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
        
        {/* Bottom Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
          <div className="max-w-[1750px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white font-[var(--font-heading)] mb-4 uppercase tracking-tight drop-shadow-2xl">
              Our Campus
            </h2>
            
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3 bg-[#811919] text-white font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all shadow-xl"
            >
              Take a Virtual Tour
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
