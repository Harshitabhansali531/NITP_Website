const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="text-burnt-600 text-sm font-bold tracking-[3px] uppercase">Discover</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-[var(--font-heading)] section-heading section-heading-center">
            About NIT Patna
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* About Content - 2/3 */}
          <div className="lg:col-span-2 reveal">
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <span className="text-5xl font-bold text-burnt-600 font-[var(--font-heading)] float-left mr-3 mt-1 leading-none">N</span>
                ational Institute of Technology Patna, formerly known as Bihar College of Engineering, is one of the 
                oldest engineering institutions in India, established in <strong>1886</strong>. Located on the southern bank 
                of the holy river Ganges at Ashok Rajpath, Patna, the institute has been a centre of excellence in 
                technical education for over 130 years.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Declared as an Institute of National Importance under the NIT Act 2007, NIT Patna offers undergraduate, 
                postgraduate, and doctoral programs in various branches of engineering, science, and humanities. The 
                institute is committed to providing quality technical education and fostering an environment of innovation, 
                research, and entrepreneurship.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With state-of-the-art laboratories, a comprehensive library, modern computing facilities, and a vibrant campus, 
                NIT Patna continues to produce outstanding engineers, researchers, and leaders who contribute to the nation&apos;s 
                technological growth and global advancement.
              </p>
              
              {/* Quick Facts */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '🏛️', title: 'Established', value: '1886 (as BCE Patna)' },
                  { icon: '📍', title: 'Location', value: 'Patna, Bihar, India' },
                  { icon: '🎓', title: 'Type', value: 'Public (NIT - Institute of National Importance)' },
                  { icon: '📚', title: 'Programs', value: 'B.Tech, M.Tech, MBA, M.Sc, Ph.D' },
                ].map((fact, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-burnt-50/50 border border-burnt-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <span className="text-2xl">{fact.icon}</span>
                    <div>
                      <p className="text-xs text-burnt-600 font-semibold uppercase tracking-wider">{fact.title}</p>
                      <p className="text-sm text-navy-800 font-medium mt-0.5">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Director Info - 1/3 */}
          <div className="reveal">
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 text-white relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnt-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-burnt-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <span className="text-burnt-400 text-xs font-bold tracking-[2px] uppercase">Director&apos;s Desk</span>
                <div className="mt-4 mb-5">
                  <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden border-2 border-burnt-400/30 shadow-lg">
                    <img
                      src="/images/director.png"
                      alt="Director, NIT Patna"
                      className="w-full h-full object-cover"
                      width={112}
                      height={112}
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center font-[var(--font-heading)]">
                  Prof. Pramod Kumar Jain
                </h3>
                <p className="text-sm text-burnt-300 text-center mt-1">Director, NIT Patna</p>
                
                <p className="text-gray-300 text-sm mt-5 leading-relaxed">
                  &ldquo;NIT Patna strives to create an ecosystem that nurtures innovation, 
                  fosters critical thinking, and prepares students to be leaders in technology 
                  and society.&rdquo;
                </p>
                
                <a
                  href="#"
                  className="mt-6 w-full block text-center bg-burnt-600 hover:bg-burnt-700 text-white py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  Director&apos;s Page →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
