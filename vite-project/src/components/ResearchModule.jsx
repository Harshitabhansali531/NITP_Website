import React from 'react';
import { motion } from 'framer-motion';
import { 
  FlaskConical, 
  Cpu, 
  Sun, 
  ShieldCheck, 
  Network,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

const highlights = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Advanced Materials Research',
    description: 'Pioneering research in nanomaterials, composites, and smart materials for sustainable technologies.',
    stats: '45+ Papers | 12 Patents',
    color: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge research in deep learning, NLP, and computer vision for digital transformation.',
    stats: '60+ Papers | 8 Projects',
    color: 'bg-red-50 text-[#811919] border-red-100',
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Renewable Energy Systems',
    description: 'Research on solar energy, fuel cells, and sustainable power generation for a greener future.',
    stats: '35+ Papers | 6 Patents',
    color: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'IoT & Cyber Security',
    description: 'Building secure IoT ecosystems, blockchain applications, and robust cybersecurity frameworks.',
    stats: '50+ Papers | 15 Projects',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: '6G Communication',
    description: 'Next-generation wireless networks and ultra-reliable low latency communication protocols.',
    stats: '40+ Papers | 5 Projects',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
];

const publications = [
  {
    authors: 'A Prabhakara Rao, Rakesh Ranjan, Bikash Chandra Sahana, G Prasanna Kumar',
    title: 'SchizoLMNet: a modified lightweight MobileNetV2-architecture for automated schizophrenia detection using EEG-derived spectrograms',
    journal: 'Physical and Engineering Sciences in Medicine (Springer)',
    year: '2025',
  },
  {
    authors: 'Dr. Vikash Singh, Mohan Das, Sneha Patel',
    title: 'Optimized Resource Allocation Algorithm for 6G Heterogeneous Networks with ultra-low latency requirements',
    journal: 'IEEE Communications Letters',
    year: '2026',
  },
  {
    authors: 'Dr. Rajesh Kumar, Ankit Sharma, Priya Verma',
    title: 'Deep Learning-Based Fault Detection in Smart Grid Systems Using Real-Time Sensor Data',
    journal: 'IEEE Transactions on Smart Grid',
    year: '2026',
  },
  {
    authors: 'Dr. Neha Kumari, Arjun Thakur, Dr. Sanjay Gupta',
    title: 'Blockchain-Enabled Secure E-Voting System with Zero-Knowledge Proofs for Rural Governance',
    journal: 'ACM Computing Surveys',
    year: '2025',
  },
  {
    authors: 'Dr. Pooja Singh, Ravi Shankar, Dr. Manoj Kumar',
    title: 'Green Synthesis of Metal-Organic Frameworks for Efficient CO2 Capture and Environmental Remediation',
    journal: 'ACS Sustainable Chemistry & Engineering',
    year: '2026',
  },
  {
    authors: 'Dr. Amit Jha, Kavita Roy, Dr. Deepak Sharma',
    title: 'Machine Learning Approaches for Flood Prediction in Ganges Basin using Hybrid Neural Networks',
    journal: 'Journal of Hydrology',
    year: '2026',
  },
];

const sponsoredProjects = [
  {
    title: 'Time-Modulated Metasurface Based Multibeam Adaptive Beamforming for Radar Applications',
    pi: 'Rajarshi Bhattacharya, Rajan Agrahari',
    sponsor: 'ISRO RACS NITP',
    grant: '1487568.00',
    period: '2025-12-10 — 2027-12-10',
  },
  {
    title: 'AI-Powered Smart Irrigation System with IoT enabled sensors for Bihar Region',
    pi: 'Dr. Amit Jha, S. Roy',
    sponsor: 'DST, Gov of India',
    grant: '4550000.00',
    period: '2024-06-01 — 2026-06-01',
  },
  {
    title: 'Development of High Performance Solar Cells using Perovskite Materials',
    pi: 'Dr. Neha Kumari',
    sponsor: 'SERB',
    grant: '3200000.00',
    period: '2025-01-15 — 2028-01-15',
  },
  {
    title: 'Development of Blockchain-Enabled Secure E-Governance Framework for Digital India Initiative',
    pi: 'Dr. Neha Kumari, Dr. Sanjay Gupta',
    sponsor: 'MeitY',
    grant: '3200000.00',
    period: '2025-02-01 — 2027-02-01',
  },
  {
    title: 'Design and Implementation of Low-Cost IoT-Based Smart Water Quality Management System',
    pi: 'Dr. Pooja Singh',
    sponsor: 'CSIR',
    grant: '2500000.00',
    period: '2024-09-15 — 2026-09-15',
  },
  {
    title: 'Advanced Seismic Analysis of Multi-Storey Buildings in High-Risk Zones',
    pi: 'Dr. Amit Jha, P. Singh',
    sponsor: 'DST',
    grant: '1850000.00',
    period: '2025-03-10 — 2027-03-10',
  },
];

const ResearchModule = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.83-1.413 1.414L53.214 1.41zM5.373 0l-.83.83L5.956 2.244 7.37 .83zM0 5.373l.83-.83L2.244 5.956 1.413 7.37zm0 49.254l.83.83 1.414-1.413-1.414-1.414zM54.627 60l.83-.83-1.413-1.414-1.414 1.414zm-49.254 0l-.83-.83 1.414-1.413 1.413 1.414zM60 54.627l-.83.83-1.414-1.413 1.414-1.414zm0-49.254l-.83-.83-1.413 1.414 1.414 1.413z\' fill=\'%23000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'}} />

      <div className="max-w-[1750px] mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch">
          
          {/* LEFT COLUMN: RECENT PUBLICATIONS */}
          <div className="lg:w-[30%] flex flex-col">
            <div className="flex flex-col items-center justify-center mb-12 h-[100px] text-center">
              <div className="w-10 h-10 bg-[#811919] text-white rounded-xl flex items-center justify-center shrink-0 mb-3 shadow-md">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black text-navy-900 uppercase tracking-tight leading-tight">Recent <br/> Publications</h2>
            </div>
            
            <div className="flex flex-col justify-between flex-grow gap-6">
              {publications.slice(0, 5).map((pub, idx) => (
                <div key={idx} className="bg-white p-5 border-l-4 border-[#811919] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-lg transition-all group cursor-default">
                  <p className="text-[#A0522D] text-[13px] font-medium mb-1 transition-colors group-hover:text-[#811919]">
                    {pub.authors}, "
                  </p>
                  <h3 className="text-[15px] font-bold text-black leading-snug mb-1">
                    {pub.title}", <span className="text-gray-600 italic font-medium">{pub.journal}</span>
                  </h3>
                  <p className="text-gray-400 text-[10px] font-black mt-3 uppercase tracking-wider">
                    YEAR: {pub.year}
                  </p>
                </div>
              ))}
            </div>
            
            <a href="#" className="mt-12 flex items-center justify-center gap-2 w-full py-4 border-2 border-[#811919] text-[#811919] font-black uppercase text-xs tracking-widest hover:bg-[#811919] hover:text-white transition-all rounded-xl">
              View All Publications
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* MIDDLE COLUMN: RESEARCH HIGHLIGHTS */}
          <div className="lg:w-[40%] flex flex-col">
            <div className="flex flex-col items-center justify-center mb-12 h-[100px] text-center">
              <span className="text-[#811919] font-black uppercase tracking-[0.3em] text-[10px] mb-2 leading-none">Innovation Core</span>
              <h2 className="text-2xl font-black text-navy-900 uppercase tracking-tight leading-tight">Research <br/> Highlights</h2>
            </div>
            
            <div className="flex flex-col justify-between flex-grow gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] cursor-default flex items-center gap-6 ${item.color} border-transparent hover:border-current h-full`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 tracking-tight leading-tight">{item.title}</h3>
                    <p className="text-[13px] opacity-80 leading-relaxed font-medium line-clamp-1">
                      {item.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{item.stats}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#" className="mt-12 flex items-center justify-center gap-2 w-full py-4 border-2 border-gray-100 text-gray-400 font-black uppercase text-xs tracking-widest hover:border-[#811919] hover:text-[#811919] transition-all rounded-xl">
              Explore Research Hub
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* RIGHT COLUMN: SPONSORED PROJECTS */}
          <div className="lg:w-[30%] flex flex-col">
            <div className="flex flex-col items-center justify-center mb-12 h-[100px] text-center">
              <div className="w-10 h-10 bg-[#811919] text-white rounded-xl flex items-center justify-center shrink-0 mb-3 shadow-md">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black text-navy-900 uppercase tracking-tight leading-tight">Sponsored <br/> Projects</h2>
            </div>
            
            <div className="flex flex-col justify-between flex-grow gap-6">
              {sponsoredProjects.slice(0, 5).map((project, idx) => (
                <div key={idx} className="bg-white p-5 border-l-4 border-[#811919] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-lg transition-all group">
                  <h3 className="text-[15px] font-bold text-black leading-snug mb-4 group-hover:text-[#811919] transition-all">
                    {project.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-[#811919] uppercase mb-0.5">PI:</p>
                      <p className="text-[11px] text-gray-600 font-medium truncate">{project.pi}</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-[#811919] uppercase mb-0.5">Sponsor:</p>
                      <p className="text-[11px] text-gray-600 font-medium truncate">{project.sponsor}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#811919] uppercase mb-0.5">Grant:</p>
                      <p className="text-[11px] text-gray-600 font-bold">{project.grant}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#811919] uppercase mb-0.5">Period:</p>
                      <p className="text-[11px] text-gray-600 font-medium whitespace-nowrap">{project.period.split('—')[0]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#" className="mt-12 flex items-center justify-center gap-2 w-full py-4 border-2 border-[#811919] text-[#811919] font-black uppercase text-xs tracking-widest hover:bg-[#811919] hover:text-white transition-all rounded-xl">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResearchModule;
