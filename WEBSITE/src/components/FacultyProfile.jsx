import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, Linkedin, ExternalLink, GraduationCap, Briefcase, 
  BookOpen, Award, FileText, Users, Globe, Loader2, 
  AlertCircle, Phone, FlaskConical, ArrowLeft 
} from 'lucide-react';

import { useFaculty } from '../hooks/useFaculty';

/**
 * FacultyProfile Page
 * 
 * Displays detailed academic and professional information about a faculty member.
 * Organizes content into tabbed sections for Publications, Teaching, and Career.
 */
const FacultyProfile = () => {
  // Currently hardcoded to Balaji Rao, but designed to accept props or URL params in future
  const facultyEmail = 'balaji.cs@nitp.ac.in';
  const { data, loading, error, refetch } = useFaculty(facultyEmail);
  const [activeTab, setActiveTab] = useState('overview');

  // Loading State - Premium Spinner with subtle branding
  if (loading) return <FullScreenLoader />;

  // Error State - User-friendly error with retry capability
  if (error) return <ProfileError message={error} onRetry={refetch} />;

  // Destructure for cleaner JSX
  const { 
    profile, 
    about_me, 
    education, 
    work_experience, 
    journal_papers, 
    teaching_engagement, 
    phd_candidates 
  } = data;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Users className="w-4 h-4" /> },
    { id: 'publications', label: 'Research', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'teaching', label: 'Academics', icon: <FileText className="w-4 h-4" /> },
    { id: 'experience', label: 'Career', icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <main className="min-h-screen pt-24 pb-24 bg-white relative overflow-hidden font-sans">
      {/* Decorative Brand Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#811919]/5 blur-[120px] rounded-full -mr-24 -mt-24 pointer-events-none" />
      
      <div className="max-w-[1750px] mx-auto px-6 relative z-10">
        
        {/* Secondary Navigation */}
        <nav className="flex items-center justify-between mb-12">
          <Link 
            to="/" 
            className="flex items-center gap-2.5 text-[#811919] font-black uppercase text-xs tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
            Back to Campus Home
          </Link>
          <div className="hidden md:block text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            Internal / Academic Directory / {profile.name}
          </div>
        </nav>
        
        {/* Profile Identity Header */}
        <ProfileHeader profile={profile} stats={{ publications: journal_papers.length, phd: phd_candidates.length, experience: work_experience.length }} />

        {/* Dynamic Content Grid */}
        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          
          {/* Sidebar: Navigation & Contextual Info */}
          <aside className="lg:w-80 shrink-0 space-y-12">
            <nav className="sticky top-32 space-y-3 p-4 bg-slate-50 rounded-[2.5rem] border border-slate-100/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-5 w-full px-7 py-5 rounded-[1.8rem] 
                    font-black uppercase text-[11px] tracking-[0.2em] 
                    transition-all duration-300 transform 
                    ${activeTab === tab.id 
                      ? 'bg-white text-[#811919] shadow-xl shadow-[#811919]/5 border border-red-50' 
                      : 'text-slate-400 hover:text-[#811919] hover:bg-white'}
                  `}
                >
                  <div className={`p-2.5 rounded-2xl transition-colors ${activeTab === tab.id ? 'bg-[#811919] text-white' : 'bg-slate-200/50'}`}>
                    {tab.icon}
                  </div>
                  {tab.label}
                </button>
              ))}
            </nav>

            <ResearchCard interests={profile.research_interest} />
          </aside>

          {/* Primary Content Viewport */}
          <section className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <OverviewTab key="overview" bio={about_me} education={education} />
              )}
              {activeTab === 'publications' && (
                <PublicationsTab key="pubs" papers={journal_papers} />
              )}
              {activeTab === 'teaching' && (
                <TeachingTab key="teach" courses={teaching_engagement} />
              )}
              {activeTab === 'experience' && (
                <CareerTab key="exp" experience={work_experience} />
              )}
            </AnimatePresence>
          </section>
        </div>
      </div>
    </main>
  );
};

/* --- Sub-Components --- */

const ProfileHeader = ({ profile, stats }) => (
  <header className="relative bg-white rounded-[4rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
    <div className="h-52 bg-gradient-to-r from-[#811919] via-[#651414] to-[#3a0b0b]" />
    
    <div className="px-12 pb-14 -mt-24">
      <div className="flex flex-col lg:flex-row gap-12 items-end">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#811919] rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <img 
            src={profile.image} 
            alt={profile.name} 
            className="w-72 h-72 rounded-[3rem] object-cover border-[12px] border-white shadow-2xl relative z-10 scale-100 group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        
        <div className="flex-1 pb-4">
          <div className="flex flex-wrap items-center gap-5 mb-5">
            <h1 className="text-4xl md:text-6xl font-black text-[#1a1c1e] tracking-tighter uppercase leading-none">
              {profile.name}
            </h1>
            <span className="px-6 py-2.5 bg-[#811919] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full shadow-lg shadow-[#811919]/20">
              {profile.designation}
            </span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-12 mb-10 text-slate-500 font-bold text-[14px] uppercase tracking-wider">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-[#811919]" />
              <span>{profile.department}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#811919]" />
              <a href={`mailto:${profile.email}`} className="hover:text-[#811919] transition-colors border-b-2 border-slate-100 hover:border-[#811919]/20 pb-1">{profile.email}</a>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <SocialButton icon={<Linkedin />} href={profile.linkedin} />
            <SocialButton icon={<GraduationCap />} href={profile.google_scholar} />
            <SocialButton icon={<Globe />} href={profile.orcid} />
            {profile.cv && (
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-10 py-5 bg-[#811919] text-white font-black uppercase text-[11px] tracking-[0.25em] rounded-2xl hover:bg-black transition-all shadow-xl shadow-[#811919]/20 active:scale-95">
                Download Full CV <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Global Statistics Visualizer */}
        <div className="hidden xl:flex gap-12 px-14 py-10 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-inner h-fit self-center">
          <StatItem label="Publications" value={stats.publications} />
          <div className="w-[1px] bg-slate-200" />
          <StatItem label="PhD Guidance" value={stats.phd} />
          <div className="w-[1px] bg-slate-200" />
          <StatItem label="Years Exp." value={stats.experience} />
        </div>
      </div>
    </div>
  </header>
);

const SocialButton = ({ icon, href }) => href ? (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-5 bg-slate-50 text-slate-400 rounded-2xl hover:bg-[#811919] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm"
  >
    {icon}
  </a>
) : null;

const StatItem = ({ label, value }) => (
  <div className="text-center">
    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2">{label}</p>
    <p className="text-4xl font-black text-[#811919] tabular-nums">{value}</p>
  </div>
);

const ResearchCard = ({ interests }) => (
  <div className="p-10 bg-gradient-to-br from-[#811919] to-[#2a0505] rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700">
      <FlaskConical className="w-24 h-24" />
    </div>
    <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 relative z-10 text-white/50">Core Specializations</h4>
    <div className="flex flex-wrap gap-2.5 relative z-10">
      {interests.split(',').map((interest, i) => (
        <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[11px] font-bold uppercase tracking-wider border border-white/10">
          {interest.trim()}
        </span>
      ))}
    </div>
  </div>
);

/* --- Tab Views --- */

const OverviewTab = ({ bio, education }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-16">
    <article className="p-14 bg-white rounded-[4rem] border border-slate-100 shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-3 h-full bg-[#811919] opacity-20 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-2xl font-black text-[#1a1c1e] uppercase tracking-[0.2em] mb-10 flex items-center gap-4">
        <Users className="w-8 h-8 text-[#811919]" /> Biographical Sketch
      </h3>
      <div className="space-y-8">
        {bio.map((para) => (
          <p key={para.id} className="text-slate-600 leading-[1.8] text-xl font-medium tracking-tight">
            {para.content}
          </p>
        ))}
      </div>
    </article>

    <div className="grid md:grid-cols-3 gap-8">
      {education.map((edu, idx) => (
        <div key={idx} className="p-10 bg-slate-50 rounded-[3rem] border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-2xl transition-all duration-500 group">
          <span className="inline-block px-5 py-2 bg-[#811919]/5 text-[#811919] text-[10px] font-black rounded-xl mb-10 uppercase tracking-[0.3em]">
            {edu.certification}
          </span>
          <h4 className="text-xl font-black text-slate-800 mb-2 leading-tight uppercase group-hover:text-[#811919]">
            {edu.specialization}
          </h4>
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-8">{edu.institution}</p>
          <div className="flex items-center gap-2 text-[#811919] font-black uppercase text-[10px] tracking-widest">
            <Award className="w-5 h-5" />
            <span>Class of {edu.passing_year}</span>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const PublicationsTab = ({ papers }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
    <header className="flex items-center justify-between px-6">
      <h3 className="text-3xl font-black text-[#1a1c1e] uppercase tracking-tighter">Scholarly Publications</h3>
      <p className="text-[11px] font-black text-[#811919] bg-[#811919]/5 px-5 py-2 rounded-full uppercase tracking-widest uppercase">Indexed: {papers.length}</p>
    </header>
    <div className="grid gap-8">
      {papers.map((paper, idx) => (
        <div key={idx} className="bg-white p-12 rounded-[4rem] border border-slate-100 hover:shadow-2xl transition-all group relative overflow-hidden">
          <span className="absolute -right-4 -top-4 text-[10rem] font-black text-slate-50 group-hover:text-[#811919]/5 transition-colors">
            {idx + 1}
          </span>
          <div className="relative z-10">
            <div className="flex gap-3 mb-6">
              <span className="px-4 py-1.5 bg-black text-white text-[9px] font-black uppercase rounded-lg tracking-widest">{paper.indexing}</span>
              <span className="px-4 py-1.5 bg-[#811919] text-white text-[9px] font-black uppercase rounded-lg tracking-widest">{paper.publication_year}</span>
            </div>
            <h4 className="text-2xl font-black text-[#1a1c1e] mb-5 leading-tight group-hover:text-[#811919] transition-colors max-w-4xl">{paper.title}</h4>
            <p className="text-slate-500 font-bold italic mb-8 border-l-4 border-slate-100 pl-6">{paper.authors}</p>
            <div className="flex items-center gap-6 pt-8 border-t border-slate-50 text-[11px] font-black uppercase tracking-widest text-[#811919]">
              <div className="flex items-center gap-2 bg-slate-50 px-5 py-2 rounded-full">
                <BookOpen size={16} /> {paper.journal_name}
              </div>
              {paper.doi_url && (
                <a href={paper.doi_url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                  Access DOI <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const TeachingTab = ({ courses }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
    <h3 className="text-3xl font-black text-[#1a1c1e] uppercase tracking-tighter mb-10 px-6">Current Courses</h3>
    <div className="grid md:grid-cols-2 gap-8">
      {courses.map((course, idx) => (
        <div key={idx} className="p-10 bg-white rounded-[3.5rem] border border-slate-100 shadow-lg hover:shadow-2xl transition-all flex gap-8 items-start">
          <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center shrink-0 text-white font-black text-xl shadow-xl">
            {course.course_number.slice(-3)}
          </div>
          <div>
            <p className="text-[10px] font-black text-[#811919] uppercase tracking-[0.3em] mb-2">{course.level} · Sem {course.semester}</p>
            <h4 className="text-xl font-black text-[#1a1c1e] mb-5 uppercase leading-tight">{course.course_title}</h4>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-slate-50 text-slate-500 rounded-xl text-[11px] font-black uppercase tracking-widest">{course.course_type}</span>
              <span className="px-4 py-2 bg-[#811919]/5 text-[#811919] rounded-xl text-[11px] font-black uppercase tracking-widest">Enroll: {course.student_count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const CareerTab = ({ experience }) => (
  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
    <h3 className="text-3xl font-black text-[#1a1c1e] uppercase tracking-tighter mb-12 px-6">Career Timeline</h3>
    <div className="relative space-y-12 before:absolute before:left-12 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-100">
      {experience.map((exp, idx) => (
        <div key={idx} className="relative flex gap-12 group">
          <div className="relative z-10 w-24 h-24 bg-white border-4 border-[#811919] rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform">
            <span className="text-[#811919] font-black text-sm">{new Date(exp.start_date).getFullYear()}</span>
          </div>
          <div className="flex-1 p-12 bg-white rounded-[4rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex justify-between items-start mb-6">
              <h4 className="text-2xl font-black text-[#1a1c1e] uppercase tracking-tight leading-none">{exp.work_experiences}</h4>
              <span className="bg-[#811919]/5 text-[#811919] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                {exp.end_date === 'Continue' ? 'Present' : new Date(exp.end_date).getFullYear()}
              </span>
            </div>
            <p className="text-xl font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
              <Building className="w-6 h-6 text-[#811919]/30" /> {exp.institute}
            </p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

/* --- Feedback UI --- */

const FullScreenLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white">
    <div className="relative">
      <div className="absolute inset-0 bg-[#811919] blur-3xl opacity-20 animate-pulse" />
      <Loader2 className="w-16 h-16 text-[#811919] animate-spin relative z-10" />
    </div>
    <p className="mt-8 text-slate-400 font-black uppercase tracking-[0.5em] text-[10px]">Retrieving Faculty Profile</p>
  </div>
);

const ProfileError = ({ message, onRetry }) => (
  <div className="min-h-screen flex items-center justify-center px-6">
    <div className="max-w-xl w-full p-16 bg-white rounded-[4rem] border border-slate-100 shadow-2xl text-center">
      <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-8" />
      <h3 className="text-2xl font-black text-slate-800 uppercase tracking-widest mb-4">Connection Interrupted</h3>
      <p className="text-slate-500 mb-10 leading-relaxed font-medium">{message}</p>
      <button 
        onClick={onRetry}
        className="w-full py-5 bg-[#811919] text-white font-black uppercase text-xs tracking-[0.4em] rounded-[2rem] hover:bg-black transition-all shadow-xl shadow-red-200"
      >
        Retry Sync
      </button>
    </div>
  </div>
);

// Simple Building icon fallback
const Building = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default FacultyProfile;
