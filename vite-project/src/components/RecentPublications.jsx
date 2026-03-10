const publications = [
  {
    title: 'Deep Learning-Based Fault Detection in Smart Grid Systems Using Real-Time Sensor Data',
    authors: 'Dr. Rajesh Kumar, Ankit Sharma, Priya Verma',
    journal: 'IEEE Transactions on Smart Grid',
    year: '2026',
    doi: '10.1109/TSG.2026.001234',
    department: 'Electrical Engineering',
    tag: 'AI/ML',
  },
  {
    title: 'Novel Biocompatible Nanocomposites for Targeted Drug Delivery in Cancer Treatment',
    authors: 'Dr. Sunita Devi, Rahul Gupta, Dr. Anil Mishra',
    journal: 'Advanced Materials',
    year: '2025',
    doi: '10.1002/adma.202500123',
    department: 'Chemistry',
    tag: 'Nano',
  },
  {
    title: 'Optimized Resource Allocation Algorithm for 6G Heterogeneous Networks',
    authors: 'Dr. Vikash Singh, Mohan Das, Sneha Patel',
    journal: 'IEEE Communications Letters',
    year: '2026',
    doi: '10.1109/LCOMM.2026.005678',
    department: 'ECE',
    tag: '6G',
  },
  {
    title: 'Machine Learning Approaches for Flood Prediction in Ganges Basin',
    authors: 'Dr. Amit Jha, Kavita Roy, Dr. Deepak Sharma',
    journal: 'Journal of Hydrology',
    year: '2026',
    doi: '10.1016/j.jhydrol.2026.001',
    department: 'Civil Engineering',
    tag: 'ML',
  },
  {
    title: 'Blockchain-Enabled Secure E-Voting System with Zero-Knowledge Proofs',
    authors: 'Dr. Neha Kumari, Arjun Thakur, Dr. Sanjay Gupta',
    journal: 'ACM Computing Surveys',
    year: '2025',
    doi: '10.1145/3590003',
    department: 'CSE',
    tag: 'Blockchain',
  },
  {
    title: 'Green Synthesis of Metal-Organic Frameworks for Efficient CO₂ Capture',
    authors: 'Dr. Pooja Singh, Ravi Shankar, Dr. Manoj Kumar',
    journal: 'ACS Sustainable Chemistry',
    year: '2025',
    doi: '10.1021/acssuschemeng.2025',
    department: 'Chemical Eng.',
    tag: 'Green',
  },
];

const tagColors = {
  'AI/ML': 'bg-purple-100 text-purple-700',
  'Nano': 'bg-blue-100 text-blue-700',
  '6G': 'bg-emerald-100 text-emerald-700',
  'ML': 'bg-amber-100 text-amber-700',
  'Blockchain': 'bg-rose-100 text-rose-700',
  'Green': 'bg-green-100 text-green-700',
};

const RecentPublications = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="text-burnt-600 text-sm font-bold tracking-[3px] uppercase">Scholarly Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 font-[var(--font-heading)] section-heading section-heading-center">
            Recent Publications
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Our faculty and researchers are actively contributing to cutting-edge research across diverse fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub, idx) => (
            <article
              key={idx}
              className="reveal bg-white rounded-xl border border-gray-100 hover:border-burnt-200 p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-burnt-500 to-burnt-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${tagColors[pub.tag]}`}>
                  {pub.tag}
                </span>
                <span className="text-xs text-gray-400">{pub.year}</span>
              </div>
              
              <h3 className="text-sm font-semibold text-navy-900 leading-snug mb-3 group-hover:text-burnt-700 transition-colors line-clamp-3">
                {pub.title}
              </h3>
              
              <p className="text-xs text-gray-500 mb-2">{pub.authors}</p>
              
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                <span className="text-xs text-burnt-600 font-medium">{pub.department}</span>
                <span className="text-xs text-gray-400 italic truncate max-w-[140px]">{pub.journal}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Publications
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentPublications;
