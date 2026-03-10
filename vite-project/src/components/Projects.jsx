const projects = [
  {
    title: 'Smart Water Quality Monitoring System for Ganges River',
    pi: 'Dr. Suresh Kumar',
    funding: 'DST-SERB',
    amount: '₹45 Lakhs',
    duration: '2024–2027',
    status: 'Ongoing',
    dept: 'Civil Engineering',
  },
  {
    title: 'AI-Powered Early Warning System for Flood Prediction in Bihar',
    pi: 'Dr. Manish Kumar',
    funding: 'Ministry of Earth Sciences',
    amount: '₹1.2 Crores',
    duration: '2023–2026',
    status: 'Ongoing',
    dept: 'CSE',
  },
  {
    title: 'Development of Biodegradable Packaging from Agricultural Waste',
    pi: 'Dr. Anita Sharma',
    funding: 'DBT',
    amount: '₹38 Lakhs',
    duration: '2024–2026',
    status: 'Ongoing',
    dept: 'Chemical Eng.',
  },
  {
    title: '5G-Enabled Healthcare IoT Infrastructure for Rural Areas',
    pi: 'Dr. Rahul Verma',
    funding: 'MeitY',
    amount: '₹85 Lakhs',
    duration: '2023–2026',
    status: 'Ongoing',
    dept: 'ECE',
  },
  {
    title: 'Solar-Thermal Hybrid Energy System for Institutional Buildings',
    pi: 'Dr. Kiran Patel',
    funding: 'MNRE',
    amount: '₹62 Lakhs',
    duration: '2024–2027',
    status: 'Ongoing',
    dept: 'Mechanical Eng.',
  },
  {
    title: 'Quantum Computing Algorithms for Cryptographic Applications',
    pi: 'Dr. Vivek Singh',
    funding: 'DST',
    amount: '₹55 Lakhs',
    duration: '2025–2028',
    status: 'New',
    dept: 'Physics',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14 reveal">
          <span className="text-burnt-400 text-sm font-bold tracking-[3px] uppercase">Funded Research</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-[var(--font-heading)]">
            Sponsored Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-burnt-500 to-burnt-300 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Major sponsored research projects driving innovation and addressing real-world challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="reveal glass-card rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                  project.status === 'New' 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-burnt-500/20 text-burnt-400'
                }`}>
                  {project.status}
                </span>
                <span className="text-xs text-gray-500">{project.dept}</span>
              </div>
              
              <h3 className="text-sm font-semibold text-white leading-snug mb-3 group-hover:text-burnt-300 transition-colors line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-xs text-gray-400 mb-1">
                <span className="text-gray-500">PI:</span> {project.pi}
              </p>
              <p className="text-xs text-gray-400 mb-3">
                <span className="text-gray-500">Funding:</span> {project.funding}
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-burnt-400 font-bold text-sm">{project.amount}</span>
                <span className="text-xs text-gray-500">{project.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-14 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '₹25 Cr+', label: 'Total Funding' },
              { value: '120+', label: 'Active Projects' },
              { value: '15+', label: 'Funding Agencies' },
              { value: '200+', label: 'Researchers' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center glass-card rounded-xl py-4 px-3">
                <div className="text-2xl md:text-3xl font-bold text-burnt-400">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
