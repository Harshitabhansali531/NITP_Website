const CampusImage = () => {
  return (
    <section id="campus" className="relative h-screen w-full">
      <div className="relative h-full w-full overflow-hidden">
        <img
          src="/images/TYNE9859(1).png"
          alt="NIT Patna Campus Aerial View"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Top Blend Gradient (Seamless transition from white section above) */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/40 to-transparent z-10" />
        
        {/* Bottom Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20 z-20">
          <div className="max-w-[1750px] mx-auto">
            <h2 className="text-5xl md:text-8xl font-black text-white font-[var(--font-heading)] mb-8 uppercase tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Our Campus
            </h2>
            
            <a
              href="#"
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#811919] text-white font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:bg-white hover:text-[#811919] transition-all shadow-2xl transform hover:scale-105 active:scale-95"
            >
              Take a Virtual Tour
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
