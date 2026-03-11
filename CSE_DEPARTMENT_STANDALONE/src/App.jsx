import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  Briefcase, 
  Award, 
  FileText, 
  Search, 
  ChevronRight,
  ArrowLeft,
  Calendar
} from 'lucide-react';

const App = () => {
  const stats = [
    { label: 'Faculty', value: '28', icon: Users },
    { label: 'Research Scholars', value: '264', icon: Search },
    { label: 'Projects', value: '23', icon: Briefcase },
    { label: 'Patents', value: '80', icon: Award },
    { label: 'Journal Papers', value: '876', icon: FileText },
    { label: 'Conference Papers', value: '524', icon: BookOpen },
  ];

  const announcements = [
    {
      date: 'Thursday, 13 November 2025',
      title: 'Notice for End Semester Viva Voice Schedule July- Dec 2025 Patna Campus',
      link: '#'
    },
    {
      date: 'Saturday, 1 November 2025',
      title: 'Notice for End Semester Viva-Voce Schedule July-Dec 2025.',
      link: '#'
    },
    {
      date: 'Wednesday, 13 August 2025',
      title: 'M. Tech (Data Science and Engineering ) and M. Tech ( Cyber Security ) Final Viva Voce of Dissertation Exam Jan-June 2025',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Header */}
      <div className="bg-white py-6 border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-[1750px] mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#811919] font-bold hover:underline group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-2xl md:text-4xl font-black text-center text-[#811919] uppercase tracking-wider">
            Computer Science and Engineering
          </h1>
          <div className="w-32 invisible lg:visible" /> {/* Spacer for centering */}
        </div>
      </div>

      <div className="max-w-[1750px] mx-auto px-6 py-10">
        
        {/* Main Section: Banner & Announcements */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Hero Banner Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
              alt="CSE Department" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl">
                Computer Science <br/> And Engineering
              </h2>
            </div>
          </motion.div>

          {/* Announcements Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-red-50"
          >
            <div className="bg-[#811919] p-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Announcements
              </h3>
            </div>
            <div className="p-6 h-[400px] overflow-y-auto scrollbar-hide">
              <div className="space-y-8">
                {announcements.map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.date}</p>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#811919] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <a href={item.link} className="inline-flex items-center gap-1.5 text-xs font-black text-[#811919] mt-3 uppercase tracking-wider border-b border-[#811919]/20">
                      View Notice <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50/50">
              <button className="w-full py-3 text-xs font-black text-[#811919] uppercase tracking-[0.2em] hover:bg-[#811919] hover:text-white transition-all rounded-xl border border-[#811919]/20">
                View All Announcements
              </button>
            </div>
          </motion.div>
        </div>

        {/* About & Stats Section */}
        <div className="space-y-16">
          <div className="max-w-4xl">
            <h3 className="text-2xl font-black text-[#811919] uppercase tracking-widest mb-6 relative inline-block">
              About
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#811919] rounded-full" />
            </h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              The Department of Computer Science and Engineering offers a wide spectrum of academic programs to prepare students for the rapidly evolving digital era. At the undergraduate level, the department offers a four-year B. Tech program in Computer Science and Engineering...
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-10">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-50 text-center hover:shadow-2xl transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                  <stat.icon className="w-6 h-6 text-[#811919]" />
                </div>
                <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Sections */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Academic Info', icon: BookOpen, desc: 'Curriculum, Syllabus, and Rules.' },
            { title: 'Faculty', icon: Users, desc: 'Expert scholars and researchers.' },
            { title: 'Research', icon: Search, desc: 'Innovating for a better future.' },
            { title: 'Placement', icon: Briefcase, desc: 'Connecting talent with industry.' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-[#811919] transition-all group cursor-pointer">
              <div className="p-3 bg-red-50 rounded-2xl w-fit mb-6 group-hover:bg-[#811919] transition-colors">
                <item.icon className="w-6 h-6 text-[#811919] group-hover:text-white" />
              </div>
              <h4 className="text-xl font-black text-slate-900 group-hover:text-[#811919] transition-colors mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
