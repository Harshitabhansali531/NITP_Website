const highlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Advanced Materials Research',
    description: 'Pioneering research in nanomaterials, composites, and smart materials for sustainable technologies and biomedical applications.',
    stats: '45+ Papers | 12 Patents',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    description: 'Cutting-edge research in deep learning, NLP, computer vision, and AI-driven solutions for healthcare, agriculture, and smart cities.',
    stats: '60+ Papers | 8 Projects',
    color: 'from-burnt-500 to-red-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Renewable Energy Systems',
    description: 'Research on solar energy, fuel cells, energy storage systems, and sustainable power generation for a greener future.',
    stats: '35+ Papers | 6 Patents',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: 'IoT & Cyber Security',
    description: 'Building secure IoT ecosystems, blockchain applications, and robust cybersecurity frameworks for digital India.',
    stats: '50+ Papers | 15 Projects',
    color: 'from-blue-500 to-cyan-600',
  },
];

const ResearchHighlights = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="text-burnt-600 text-sm font-bold tracking-[3px] uppercase">Innovation Hub</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-[var(--font-heading)] section-heading section-heading-center">
            Research Highlights
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Breakthrough research across disciplines driving technological advancement and societal impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="reveal group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              <div className="relative z-10 flex gap-5">
                <div className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-burnt-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs text-burnt-600 font-semibold mt-3 tracking-wide">
                    {item.stats}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;
