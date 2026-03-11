import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Cpu, 
  Globe, 
  Award, 
  Search, 
  Building,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  Code,
  Network,
  Database,
  ShieldCheck
} from 'lucide-react';

const CSEDepartment = () => {
  const stats = [
    { label: 'Faculty Members', value: '45+', icon: Users },
    { label: 'Research Areas', value: '12', icon: Search },
    { label: 'Ongoing Projects', value: '25+', icon: Cpu },
    { label: 'Student Enrollment', value: '800+', icon: GraduationCap },
  ];

  const specialization = [
    { title: 'Artificial Intelligence', icon: Cpu, desc: 'Deep Learning, Neural Networks, and Predictive Analytics.' },
    { title: 'Cyber Security', icon: ShieldCheck, desc: 'Network Defense, Cryptography, and Digital Forensics.' },
    { title: 'Data Science', icon: Database, desc: 'Big Data Processing, Statistical Modeling, and Mining.' },
    { title: 'Cloud Computing', icon: Globe, desc: 'Distributed Systems and Scalable Infrastructure.' },
  ];

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'research', label: 'Research' },
    { id: 'labs', label: 'Labs' },
    { id: 'achievements', label: 'Achievements' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Department Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
            alt="CSE Department" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1750px] mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#811919]/20 border border-[#811919]/30 text-[#ff4d4d] text-sm font-bold uppercase tracking-widest mb-6">
              <Code className="w-4 h-4" />
              Academic Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
              Computer Science <br/> & <span className="text-[#ff4d4d]">Engineering</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-medium">
              Empowering future innovators through cutting-edge technology, rigorous academic research, and industry-aligned education since its inception.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#811919] text-white font-black rounded-xl hover:scale-105 transition-all shadow-xl flex items-center gap-2">
                Explore Programs <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-xl hover:bg-white/20 transition-all">
                Department Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Quick Nav */}
      <div className="sticky top-16 z-40 bg-white border-b border-slate-200 shadow-sm overflow-x-auto scrollbar-hide">
        <div className="max-w-[1750px] mx-auto px-6">
          <div className="flex gap-10 py-4">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-[#811919] transition-colors whitespace-nowrap">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1750px] mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1.5 bg-[#811919] rounded-full" />
                <h2 className="text-3xl font-black uppercase tracking-tight text-navy-950">Department Overview</h2>
              </div>
              <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed space-y-6">
                <p>
                  The Department of Computer Science and Engineering at NIT Patna is a vibrant community of scholars and students dedicated to technical excellence. We offer a comprehensive suite of programs including B.Tech, M.Tech, and Ph.D., focusing on the foundational principles of computing and their practical applications.
                </p>
                <p>
                  Our curriculum is meticulously designed to bridge the gap between theoretical knowledge and industry demands. With state-of-the-art laboratories and a focus on collaborative research, we prepare our students to become global leaders in the digital landscape.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {stats.map((stat, i) => (
                  <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-center group">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#811919] transition-colors">
                      <stat.icon className="w-6 h-6 text-[#811919] group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-3xl font-black text-navy-950 mb-1">{stat.value}</div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Focus */}
            <section id="research" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-1.5 bg-[#811919] rounded-full" />
                <h2 className="text-3xl font-black uppercase tracking-tight text-navy-950">Research Specializations</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {specialization.map((spec, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-[#811919]/30 transition-all group">
                    <div className="p-3 bg-slate-50 rounded-2xl w-fit mb-6 group-hover:bg-[#811919]/10 transition-colors">
                      <spec.icon className="w-8 h-8 text-[#811919]" />
                    </div>
                    <h3 className="text-xl font-black text-navy-950 mb-3 group-hover:text-[#811919] transition-colors">{spec.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{spec.desc}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* HOD Message Card */}
            <div className="bg-[#811919] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-150 transition-transform duration-700">
                <MessageSquare className="w-32 h-32" />
              </div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white/20 mx-auto mb-6 shadow-xl hover:scale-105 transition-transform">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&fit=crop" alt="HOD" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight">Dr. Amit Kumar</h4>
                <p className="text-red-200 text-xs font-black uppercase tracking-wider mb-6">Head of Department, CSE</p>
                <p className="italic text-lg font-medium leading-relaxed opacity-90 mb-8">
                  "Our mission is to nurture intellectual curiosity and technical proficiency in every student."
                </p>
                <button className="w-full py-4 bg-white text-[#811919] font-black rounded-xl hover:bg-red-50 transition-colors uppercase tracking-widest text-xs">
                  Read Full Message
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl space-y-8">
              <h4 className="text-lg font-black uppercase tracking-[0.2em] text-navy-950 border-b-2 border-slate-50 pb-4">Department Links</h4>
              <nav className="space-y-4">
                {[
                  { label: 'Academic Curriculum', icon: BookOpen },
                  { label: 'Faculty Directory', icon: Users },
                  { label: 'Laboratory Facilities', icon: Building },
                  { label: 'Research Publications', icon: FileText },
                  { label: 'Placement Statistics', icon: LineChart },
                ].map((item, i) => (
                  <a key={i} href="#" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group font-bold text-slate-600 hover:text-[#811919]">
                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-white transition-colors shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CSEDepartment;
