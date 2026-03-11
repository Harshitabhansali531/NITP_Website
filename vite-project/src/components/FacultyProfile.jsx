import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Award, 
  FileText, 
  Users, 
  Globe,
  Loader2,
  AlertCircle,
  MapPin,
  Phone,
  Link2,
  FlaskConical
} from 'lucide-react';

const FacultyProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://admin.nitp.ac.in/api/faculty?type=balaji.cs@nitp.ac.in');
        if (!response.ok) throw new Error('Failed to fetch faculty data');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center bg-gray-50/50">
        <Loader2 className="w-12 h-12 text-[#811919] animate-spin mb-4" />
        <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Loading Faculty Profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-red-50 rounded-3xl mx-4 my-12 border-2 border-red-100">
        <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
        <h3 className="text-xl font-black text-navy-900 mb-2 uppercase">Error Loading Profile</h3>
        <p className="text-red-600 font-medium mb-6 max-w-md">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-[#811919] text-white font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-transform"
        >
          Try Again
        </button>
      </div>
    );
  }

  const { profile, about_me, education, work_experience, journal_papers, teaching_engagement, phd_candidates } = data;

  const tabs = [
    { id: 'about', label: 'Overview', icon: <Users className="w-4 h-4" /> },
    { id: 'publications', label: 'Publications', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'teaching', label: 'Teaching', icon: <FileText className="w-4 h-4" /> },
    { id: 'experience', label: 'History', icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <section id="faculty-profile" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#811919]/5 blur-[120px] rounded-full -mr-24 -mt-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#000080]/5 blur-[100px] rounded-full -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-[1750px] mx-auto px-4 relative z-10">
        
        {/* Profile Hero Header */}
        <div className="relative bg-white rounded-[40px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 mb-12">
          <div className="h-48 bg-gradient-to-r from-[#811919] to-navy-900" />
          
          <div className="px-8 pb-12 -mt-20">
            <div className="flex flex-col lg:flex-row gap-8 items-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#811919] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-56 h-56 rounded-3xl object-cover border-8 border-white shadow-xl relative z-10"
                />
              </div>
              
              <div className="flex-1 pb-4">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-4xl font-black text-navy-900 tracking-tight uppercase">{profile.name}</h1>
                  <span className="px-4 py-1.5 bg-[#811919] text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    {profile.designation}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-6 text-gray-500 mb-6 font-medium">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#811919]" />
                    <span>{profile.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#811919]" />
                    <a href={`mailto:${profile.email}`} className="hover:text-[#811919] transition-colors">{profile.email}</a>
                  </div>
                  {profile.ext_no && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#811919]" />
                      <span>{profile.ext_no}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  {profile.linkedin && (
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {profile.google_scholar && (
                    <a href={profile.google_scholar} target="_blank" rel="noopener noreferrer" className="p-3 bg-amber-50 text-amber-600 rounded-xl hover:bg-amber-600 hover:text-white transition-all shadow-sm">
                      <GraduationCap className="w-5 h-5" />
                    </a>
                  )}
                  {profile.orcid && (
                    <a href={profile.orcid} target="_blank" rel="noopener noreferrer" className="p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {profile.cv && (
                    <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#811919]/5 text-[#811919] font-black uppercase text-[10px] tracking-widest rounded-xl hover:bg-[#811919] hover:text-white transition-all">
                      Download CV <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Quick Stats Overlay */}
              <div className="hidden xl:flex gap-8 px-12 py-8 bg-gray-50/80 backdrop-blur-md rounded-3xl border border-white h-fit self-center">
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Publications</p>
                  <p className="text-3xl font-black text-[#811919]">{journal_papers?.length || 0}</p>
                </div>
                <div className="w-[1px] bg-gray-200" />
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">PhD Guided</p>
                  <p className="text-3xl font-black text-[#811919]">{phd_candidates?.length || 0}</p>
                </div>
                <div className="w-[1px] bg-gray-200" />
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Experience</p>
                  <p className="text-3xl font-black text-[#811919]">{work_experience?.length || 0} </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content Tabs */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Tabs Navigation */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-12 space-y-2 p-2 bg-gray-50/50 rounded-3xl border border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 w-full px-6 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all ${
                    activeTab === tab.id 
                    ? 'bg-white text-[#811919] shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] border border-gray-100' 
                    : 'text-gray-400 hover:text-navy-900 hover:bg-gray-100'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === tab.id ? 'bg-[#811919] text-white' : 'bg-gray-200 text-gray-400'}`}>
                    {tab.icon}
                  </div>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Research Interests Card */}
            <div className="mt-8 p-8 bg-gradient-to-br from-navy-900 to-[#811919] rounded-[32px] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <FlaskConical className="w-24 h-24" />
              </div>
              <h4 className="text-lg font-black uppercase tracking-tight mb-6 relative z-10">Research Interests</h4>
              <div className="flex flex-wrap gap-2 relative z-10">
                {profile.research_interest.split(',').map((interest, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#811919] transition-colors cursor-default">
                    {interest.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {activeTab === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  {/* Bio Section */}
                  <div className="p-10 bg-white rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#811919]" />
                    <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight mb-6">About the Professor</h3>
                    <div className="space-y-4">
                      {about_me.map((bio) => (
                        <p key={bio.id} className="text-gray-600 leading-relaxed text-lg font-medium whitespace-pre-line">
                          {bio.content}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Education Timeline */}
                  <div>
                    <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight mb-8 flex items-center gap-3">
                      <GraduationCap className="w-8 h-8 text-[#811919]" /> Academic Background
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {education.map((edu, idx) => (
                        <div key={idx} className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-[#811919]/20 hover:bg-white hover:shadow-xl transition-all group">
                          <span className="inline-block px-4 py-1.5 bg-[#811919]/10 text-[#811919] text-[10px] font-black rounded-lg mb-6 uppercase tracking-widest">
                            {edu.certification}
                          </span>
                          <h4 className="text-lg font-black text-navy-900 mb-2 leading-tight uppercase group-hover:text-[#811919] transition-colors">
                            {edu.specialization}
                          </h4>
                          <p className="text-gray-500 font-bold text-xs uppercase mb-4">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-[#811919]">
                            <Award className="w-4 h-4" />
                            <span className="font-black text-xs uppercase tracking-tighter">Batch: {edu.passing_year}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'publications' && (
                <motion.div
                  key="pubs"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight flex items-center gap-3">
                      <BookOpen className="w-8 h-8 text-[#811919]" /> Selected Journal Papers
                    </h3>
                    <div className="px-6 py-2 bg-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500">
                      Total: {journal_papers.length} Papers
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {journal_papers.map((paper, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={idx} 
                        className="bg-white p-8 rounded-[28px] border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.005] transition-all group"
                      >
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <span className="px-3 py-1 bg-navy-50 text-navy-900 text-[10px] font-black uppercase rounded-lg">
                            {paper.indexing || 'Journal'}
                          </span>
                          <span className="text-gray-300 font-black text-4xl leading-none group-hover:text-[#811919]/10 transition-colors">
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-black mb-3 leading-snug">
                          {paper.title}
                        </h4>
                        <p className="text-[#A0522D] text-[13px] font-medium mb-4 italic leading-relaxed">
                          {paper.authors}
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-gray-50">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-[#811919]" />
                            <span className="text-[11px] font-black uppercase text-gray-500">{paper.journal_name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-black uppercase text-[#8111919] bg-[#811919]/10 px-2 py-0.5 rounded text-[#811919]">Year: {paper.publication_year}</span>
                          </div>
                          {paper.doi_url && (
                            <a href={paper.doi_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] font-black uppercase text-blue-500 hover:underline">
                              View DOI <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'teaching' && (
                <motion.div
                  key="teach"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight flex items-center gap-3">
                    <Users className="w-8 h-8 text-[#811919]" /> Teaching Engagement
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {teaching_engagement.slice(0, 8).map((course, idx) => (
                      <div key={idx} className="p-8 bg-white rounded-[28px] border border-gray-100 shadow-sm hover:border-[#811919]/30 transition-all flex items-start gap-6">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex flex-col items-center justify-center shrink-0 border border-gray-100 shadow-inner">
                          <span className="text-[10px] font-black text-gray-400 uppercase">Code</span>
                          <span className="text-base font-black text-navy-900">{course.course_number.split('S')[1]}</span>
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#811919] mb-1">{course.level} Level · {course.semester}th Sem</p>
                          <h4 className="text-xl font-black text-navy-900 mb-2 leading-tight uppercase">{course.course_title}</h4>
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{course.course_type}</span>
                            <span className="text-[11px] font-bold text-gray-400">Students: {course.student_count}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div
                  key="exp"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-2xl font-black text-navy-900 uppercase tracking-tight flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-[#811919]" /> Professional Career
                  </h3>
                  <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:bg-gray-100 after:absolute after:left-0 after:top-2 after:w-1 after:h-24 after:bg-[#811919] after:rounded-full">
                    {work_experience.map((exp, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-10 top-2 w-5 h-5 bg-white border-4 border-[#811919] rounded-full z-10 group-hover:scale-125 transition-transform" />
                        <div className="p-8 bg-gray-50 rounded-[32px] border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-2xl transition-all">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <h4 className="text-2xl font-black text-navy-900 uppercase tracking-tight">{exp.work_experiences}</h4>
                            <span className="px-5 py-2 bg-white text-[#811919] text-[11px] font-black uppercase tracking-widest rounded-full shadow-sm whitespace-nowrap">
                              {new Date(exp.start_date).getFullYear()} — {exp.end_date ? (exp.end_date === 'Continue' ? 'Present' : new Date(exp.end_date).getFullYear()) : 'Present'}
                            </span>
                          </div>
                          <p className="text-lg font-bold text-gray-500 mb-2 uppercase">{exp.institute}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FacultyProfile;

