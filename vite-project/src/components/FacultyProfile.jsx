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
  FlaskConical,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section id="faculty-profile" className="pt-24 pb-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#811919]/5 blur-[120px] rounded-full -mr-24 -mt-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#811919]/5 blur-[100px] rounded-full -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-[1750px] mx-auto px-4 relative z-10">
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="flex items-center gap-2 text-[#811919] font-bold hover:underline group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
            Faculty Directory / Profile
          </div>
        </div>
        
        {/* Profile Hero Header */}
        <div className="relative bg-white rounded-[40px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 mb-12">
          <div className="h-48 bg-gradient-to-r from-[#811919] via-[#651414] to-[#4d0d0d]" />
          
          <div className="px-10 pb-12 -mt-24">
            <div className="flex flex-col lg:flex-row gap-10 items-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#811919] rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-72 h-72 rounded-3xl object-cover border-[10px] border-white shadow-2xl relative z-10"
                />
              </div>
              
              <div className="flex-1 pb-4">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h1 className="text-4xl md:text-5xl font-black text-[#1a1c1e] tracking-tight uppercase">{profile.name}</h1>
                  <span className="px-5 py-2 bg-[#811919] text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-[#811919]/20">
                    {profile.designation}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-8 text-[#5c6166] mb-8 font-bold text-base">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-6 h-6 text-[#811919]" />
                    <span>{profile.department}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-6 h-6 text-[#811919]" />
                    <a href={`mailto:${profile.email}`} className="hover:text-[#811919] underline decoration-[#811919]/30 underline-offset-4 transition-colors">{profile.email}</a>
                  </div>
                  {profile.ext_no && (
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-6 h-6 text-[#811919]" />
                      <span>{profile.ext_no}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  {profile.linkedin && (
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-[#811919]/5 text-[#811919] rounded-xl hover:bg-[#811919] hover:text-white transition-all shadow-sm border border-[#811919]/10">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {profile.google_scholar && (
                    <a href={profile.google_scholar} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-[#811919]/5 text-[#811919] rounded-xl hover:bg-[#811919] hover:text-white transition-all shadow-sm border border-[#811919]/10">
                      <GraduationCap className="w-5 h-5" />
                    </a>
                  )}
                  {profile.orcid && (
                    <a href={profile.orcid} target="_blank" rel="noopener noreferrer" className="p-3.5 bg-[#811919]/5 text-[#811919] rounded-xl hover:bg-[#811919] hover:text-white transition-all shadow-sm border border-[#811919]/10">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {profile.cv && (
                    <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3.5 bg-[#811919] text-white font-black uppercase text-[11px] tracking-[0.2em] rounded-xl hover:scale-105 transition-all shadow-xl shadow-[#811919]/30">
                      Download CV <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Quick Stats Overlay */}
              <div className="hidden xl:flex gap-10 px-12 py-10 bg-white/60 backdrop-blur-xl rounded-[32px] border border-white shadow-2xl h-fit self-center">
                <div className="text-center">
                  <p className="text-[11px] font-black uppercase text-[#811919]/40 tracking-[0.2em] mb-2">Publications</p>
                  <p className="text-4xl font-black text-[#811919]">{journal_papers?.length || 0}</p>
                </div>
                <div className="w-[1px] bg-red-100" />
                <div className="text-center">
                  <p className="text-[11px] font-black uppercase text-[#811919]/40 tracking-[0.2em] mb-2">PhD Guided</p>
                  <p className="text-4xl font-black text-[#811919]">{phd_candidates?.length || 0}</p>
                </div>
                <div className="w-[1px] bg-red-100" />
                <div className="text-center">
                  <p className="text-[11px] font-black uppercase text-[#811919]/40 tracking-[0.2em] mb-2">Experience</p>
                  <p className="text-4xl font-black text-[#811919]">{work_experience?.length || 0} </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content Tabs */}
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Tabs Navigation */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-28 space-y-3 p-3 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-inner">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-5 w-full px-6 py-5 rounded-[2rem] font-bold uppercase text-[12px] tracking-[0.15em] transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
                    activeTab === tab.id 
                    ? 'bg-white text-[#811919] shadow-2xl shadow-[#811919]/10 border border-red-50' 
                    : 'text-[#94a3b8] hover:text-[#811919] hover:bg-white'
                  }`}
                >
                  <div className={`p-2.5 rounded-2xl shadow-sm transition-colors ${activeTab === tab.id ? 'bg-[#811919] text-white' : 'bg-[#f1f5f9] text-[#94a3b8]'}`}>
                    {tab.icon}
                  </div>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Research Interests Card */}
            <div className="mt-10 p-10 bg-gradient-to-br from-[#811919] to-[#3a0b0b] rounded-[40px] text-white shadow-2xl relative overflow-hidden group border border-[#811919]/20">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <FlaskConical className="w-24 h-24" />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight mb-8 relative z-10">Research Interests</h4>
              <div className="flex flex-wrap gap-3 relative z-10">
                {profile.research_interest.split(',').map((interest, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#811919] transition-all cursor-default border border-white/10">
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
                  <div className="p-12 bg-white rounded-[40px] border border-slate-100 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-3 h-full bg-[#811919]" />
                    <h3 className="text-3xl font-black text-[#1a1c1e] uppercase tracking-tight mb-8">About the Professor</h3>
                    <div className="space-y-6">
                      {about_me.map((bio) => (
                        <p key={bio.id} className="text-[#2d3436] leading-relaxed text-xl font-medium whitespace-pre-line">
                          {bio.content}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Education Timeline */}
                  <div className="pt-10">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-1.5 bg-[#811919] rounded-full" />
                      <h3 className="text-3xl font-black text-[#1a1c1e] uppercase tracking-tight">Academic Background</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                      {education.map((edu, idx) => (
                        <div key={idx} className="p-10 bg-white rounded-[32px] border border-slate-100 hover:border-[#811919]/30 hover:shadow-2xl transition-all group">
                          <span className="inline-block px-5 py-2 bg-[#811919]/5 text-[#811919] text-[11px] font-black rounded-xl mb-8 uppercase tracking-widest border border-[#811919]/10">
                            {edu.certification}
                          </span>
                          <h4 className="text-xl font-black text-[#1a1c1e] mb-3 leading-tight uppercase group-hover:text-[#811919] transition-colors">
                            {edu.specialization}
                          </h4>
                          <p className="text-[#64748b] font-bold text-sm uppercase mb-6">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-[#811919] font-black uppercase text-[11px] tracking-widest">
                            <Award className="w-5 h-5" />
                            <span>Batch of {edu.passing_year}</span>
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
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl font-black text-[#1a1c1e] uppercase tracking-tight flex items-center gap-4">
                      <BookOpen className="w-10 h-10 text-[#811919]" /> Selected Journal Papers
                    </h3>
                    <div className="px-6 py-2.5 bg-[#811919]/5 text-[#811919] border border-[#811919]/20 rounded-full text-[12px] font-black uppercase tracking-widest">
                      Total: {journal_papers.length} Papers
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    {journal_papers.map((paper, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={idx} 
                        className="bg-white p-10 rounded-[36px] border border-slate-100 shadow-md hover:shadow-2xl hover:border-[#811919]/20 transition-all group"
                      >
                        <div className="flex justify-between items-start gap-6 mb-6">
                          <span className="px-4 py-1.5 bg-[#1a1c1e] text-white text-[11px] font-black uppercase rounded-lg tracking-widest">
                            {paper.indexing || 'Journal'}
                          </span>
                          <span className="text-[#811919]/10 font-black text-6xl leading-none group-hover:text-[#811919]/20 transition-colors">
                            {(idx + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                        <h4 className="text-2xl font-bold text-[#1a1c1e] mb-4 leading-snug group-hover:text-[#811919] transition-colors">
                          {paper.title}
                        </h4>
                        <p className="text-[#811919] text-base font-bold mb-6 italic leading-relaxed opacity-80">
                          {paper.authors}
                        </p>
                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-slate-50">
                          <div className="flex items-center gap-2.5">
                            <BookOpen className="w-5 h-5 text-[#811919]" />
                            <span className="text-[12px] font-black uppercase text-[#5c6166]">{paper.journal_name}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <span className="text-[12px] font-black uppercase bg-[#811919]/5 px-3 py-1 rounded-full text-[#811919] border border-[#811919]/10">Year: {paper.publication_year}</span>
                          </div>
                          {paper.doi_url && (
                            <a href={paper.doi_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[12px] font-black uppercase text-[#811919] hover:underline decoration-2 underline-offset-4">
                              View Publication <ExternalLink className="w-4 h-4" />
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
                  <h3 className="text-3xl font-black text-[#1a1c1e] uppercase tracking-tight flex items-center gap-4 mb-10">
                    <div className="w-12 h-1.5 bg-[#811919] rounded-full" /> Teaching Engagement
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {teaching_engagement.slice(0, 8).map((course, idx) => (
                      <div key={idx} className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-lg hover:shadow-2xl hover:border-[#811919]/30 transition-all flex items-start gap-8">
                        <div className="w-20 h-20 bg-slate-100 rounded-[2rem] flex flex-col items-center justify-center shrink-0 border border-slate-200 shadow-inner group-hover:bg-[#811919] transition-colors">
                          <span className="text-[11px] font-black text-[#94a3b8] group-hover:text-white/60 uppercase">Code</span>
                          <span className="text-xl font-black text-[#1a1c1e] group-hover:text-white">{course.course_number.split('S')[1] || course.course_number}</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#811919] mb-3">{course.level} Level · {course.semester}th Sem</p>
                          <h4 className="text-2xl font-black text-[#1a1c1e] mb-4 leading-tight uppercase tracking-tight">{course.course_title}</h4>
                          <div className="flex items-center gap-4">
                            <span className="text-[12px] font-bold text-[#5c6166] bg-slate-100 px-4 py-1.5 rounded-full">{course.course_type}</span>
                            <span className="text-[12px] font-bold text-[#811919]/60">Cap: {course.student_count} Students</span>
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
                  <h3 className="text-3xl font-black text-[#1a1c1e] uppercase tracking-tight flex items-center gap-4 mb-10">
                    <div className="w-12 h-1.5 bg-[#811919] rounded-full" /> Professional Career
                  </h3>
                  <div className="relative pl-12 space-y-12 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5 before:bg-slate-100 after:absolute after:left-0 after:top-2 after:w-1.5 after:h-32 after:bg-[#811919] after:rounded-full">
                    {work_experience.map((exp, idx) => (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[54px] top-6 w-8 h-8 bg-white border-[6px] border-[#811919] rounded-full z-10 shadow-lg group-hover:scale-110 transition-transform" />
                        <div className="p-10 bg-white rounded-[40px] border border-slate-100 shadow-xl hover:shadow-2xl hover:border-[#811919]/20 transition-all transform hover:scale-[1.01]">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                            <h4 className="text-2xl font-black text-[#1a1c1e] uppercase tracking-tight leading-tight">{exp.work_experiences}</h4>
                            <span className="px-6 py-2.5 bg-[#811919] text-white text-[12px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-[#811919]/20 whitespace-nowrap">
                              {new Date(exp.start_date).getFullYear()} — {exp.end_date ? (exp.end_date === 'Continue' ? 'Present' : new Date(exp.end_date).getFullYear()) : 'Present'}
                            </span>
                          </div>
                          <p className="text-xl font-bold text-[#5c6166] uppercase tracking-wide">{exp.institute}</p>
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

