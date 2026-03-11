import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, BookOpen, Briefcase, Award, FileText, 
  Search, ChevronRight, ArrowLeft, Calendar 
} from 'lucide-react';
import { cseData } from '../data/departments';

/**
 * CSEDepartment Page
 * 
 * Displays the departmental overview for Computer Science and Engineering.
 * Features stats, real-time announcements, and modular academic links.
 */
const CSEDepartment = () => {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pb-24">
      <header className="bg-white py-8 border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-[1750px] mx-auto px-6 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2.5 text-[#811919] font-black uppercase text-xs tracking-widest group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Campus Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-black text-center text-[#811919] uppercase tracking-tighter">
            Computer Science and Engineering
          </h1>
          <div className="w-32 hidden lg:block" />
        </div>
      </header>

      <div className="max-w-[1750px] mx-auto px-6 pt-12 space-y-24">
        
        {/* Top Grid: Hero & Feed */}
        <section className="grid lg:grid-cols-3 gap-10">
          <DepartmentHero />
          <AnnouncementFeed announcements={cseData.announcements} />
        </section>

        {/* Content Section: About & Quick Stats */}
        <section className="space-y-20">
          <article className="max-w-4xl">
            <h3 className="text-sm font-black text-[#811919] uppercase tracking-[0.4em] mb-8 border-l-4 border-[#811919] pl-6">
              Departmental Overview
            </h3>
            <p className="text-xl text-slate-600 font-medium leading-[1.8] tracking-tight">
              The Department of Computer Science and Engineering remains at the forefront of digital innovation, offering a wide spectrum of academic programs designed for the evolving technological landscape. From undergraduate B.Tech programs in AI and Data Science to advanced Ph.D. research opportunities, we bridge the gap between academic theory and industry application.
            </p>
          </article>

          <StatGrid stats={cseData.stats} />
        </section>

        {/* Navigation Grid */}
        <nav className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cseData.academicLinks.map((item, idx) => (
            <AcademicCard key={item.title} item={item} index={idx} />
          ))}
        </nav>
      </div>
    </main>
  );
};

/* --- Page Modules --- */

const DepartmentHero = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    className="lg:col-span-2 relative rounded-[3rem] overflow-hidden shadow-2xl h-[550px]"
  >
    <img 
      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
      alt="Coding Environment" 
      className="w-full h-full object-cover brightness-[0.8] contrast-125"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 p-16">
      <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
        Empowering <br/> The Next Gen
      </h2>
    </div>
  </motion.div>
);

const AnnouncementFeed = ({ announcements }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100 flex flex-col"
  >
    <header className="bg-[#811919] p-8">
      <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-4">
        <Calendar size={24} /> News & Alerts
      </h3>
    </header>
    <div className="p-8 flex-1 overflow-y-auto space-y-10 custom-scrollbar">
      {announcements.map((item, i) => (
        <div key={i} className="group">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">{item.date}</p>
          <h4 className="text-[1.1rem] font-bold text-slate-800 group-hover:text-[#811919] transition-colors leading-snug">
            {item.title}
          </h4>
          <Link to={item.link} className="inline-flex items-center gap-2 text-[11px] font-black text-[#811919] mt-4 uppercase tracking-widest group-hover:gap-3 transition-all">
            Full Notice <ChevronRight size={14} />
          </Link>
        </div>
      ))}
    </div>
    <footer className="p-8 border-t border-slate-50 bg-slate-50/50">
      <button className="w-full py-4 text-xs font-black text-[#811919] uppercase tracking-[0.3em] hover:bg-[#811919] hover:text-white transition-all rounded-2xl border-2 border-[#811919]/10">
        Archive Portal
      </button>
    </footer>
  </motion.div>
);

const StatGrid = ({ stats }) => {
  const icons = [Users, Search, Briefcase, Award, FileText, BookOpen];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {stats.map((stat, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div 
            key={stat.label}
            whileHover={{ y: -15, scale: 1.02 }}
            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 text-center hover:shadow-2xl transition-all"
          >
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Icon size={24} className="text-[#811919]" />
            </div>
            <div className="text-5xl font-black text-slate-900 mb-2 tabular-nums">{stat.value}</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const AcademicCard = ({ item, index }) => {
  const icons = [BookOpen, Users, Search, Briefcase];
  const Icon = icons[index % icons.length];
  
  return (
    <div className="p-10 bg-white rounded-[3rem] shadow-lg border border-slate-50 hover:border-[#811919] transition-all group cursor-pointer hover:shadow-2xl">
      <div className="p-4 bg-slate-50 rounded-2xl w-fit mb-8 group-hover:bg-[#811919] transition-all group-hover:scale-110">
        <Icon size={28} className="text-[#811919] group-hover:text-white" />
      </div>
      <h4 className="text-2xl font-black text-slate-800 group-hover:text-[#811919] transition-colors mb-2 uppercase tracking-tight">{item.title}</h4>
      <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>
    </div>
  );
};

export default CSEDepartment;
