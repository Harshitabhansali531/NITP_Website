import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Bell, Calendar, BookOpen, ArrowRight, Info } from 'lucide-react';

const notices = [
  { id: 1, title: 'Advertisement for recruitment of Project Assistant/Field Assistant on purely contractual basis for the research project "Urban Biodiversity and City Biodiversity Index Assessment"', date: '26 Feb 2026', link: '#' },
  { id: 2, title: 'View Notice for recruitment of Assistant Professor (Grade-I & II) in various Departments', date: 'Feb 20, 2026', link: '#' },
  { id: 3, title: 'Extension of last date for submission of application for Non-Teaching positions', date: 'Feb 15, 2026', link: '#' },
];

const academicNotices = [
  { id: 1, title: 'Notice regarding Open Ph.D. Viva-voce exam of Ph.D. Research Scholar Prashnatita Pal (195EC31)', date: '27 Feb 2026', link: '#' },
  { id: 2, title: 'Revised Academic Calendar for UG/PG Even Semester 2025-26', date: 'Feb 22, 2026', link: '#' },
  { id: 3, title: 'Registration link for Mid-Semester Supplementary Examination', date: 'Feb 18, 2026', link: '#' },
];

const events = [
  { id: 1, title: 'Electronic Technologies (ICEFEET-2026), 09-10, July 2026, Department of Electrical Engineering, NIT Patna', date: '9-7-2026 - 10-7-2026', link: '#', location: 'NIT Patna', brochure: '#' },
  { id: 2, title: 'Annual Cultural Fest "Melange" 2026 - Celebrity Performance', date: 'Apr 05, 2026', link: '#' },
  { id: 3, title: 'National Level Technical Symposium on Cyber Security', date: 'Mar 28, 2026', link: '#' },
];

const ScrollingList = ({ items, icon: Icon, title, linkText }) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const y = useMotionValue(0);

  // Smooth scroll logic
  useAnimationFrame((time, delta) => {
    if (isPaused || !contentRef.current) return;
    
    // speed in px per ms
    const speed = 0.05; 
    let currentY = y.get();
    currentY -= speed * delta;
    
    // If we've scrolled past one full set of items (which is 1/3 of the duplicated list)
    // We reset smoothly. The items are tripled.
    const height = contentRef.current.offsetHeight / 3;
    if (currentY <= -height) {
      currentY = 0;
    }
    
    y.set(currentY);
  });

  // Triple the items for smooth infinite loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div 
      className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col h-[600px] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tab Header */}
      <div className="bg-[#811919] p-6 text-white flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold uppercase tracking-wider">{title}</h3>
        </div>
        <a href="#" className="hover:bg-white/10 p-2 rounded-full transition-colors">
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Scrolling Content */}
      <div className="relative flex-1 p-6 overflow-hidden z-0" ref={containerRef}>
        <motion.div
          ref={contentRef}
          style={{ y }}
          className="flex flex-col gap-4"
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="p-5 rounded-2xl border border-transparent hover:border-[#811919]/20 hover:bg-red-50/50 transition-all duration-300 group/item flex flex-col gap-2 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-[#811919] font-medium text-xs opacity-80">
                <Calendar className="w-3.5 h-3.5" />
                {item.date}
              </div>
              <p className="text-gray-800 font-bold leading-snug text-lg">
                {item.title}
              </p>
              {item.location && (
                <p className="text-gray-500 text-sm italic font-medium">📍 {item.location}</p>
              )}
              <div className="flex items-center gap-4 mt-3">
                <a href={item.link} className="text-[#811919] text-sm font-bold flex items-center gap-1 hover:underline">
                  <Info className="w-4 h-4" />
                  View Notice
                </a>
                {item.brochure && (
                  <a href={item.brochure} className="text-[#811919] text-sm font-bold flex items-center gap-1 hover:underline">
                    <BookOpen className="w-4 h-4" />
                    Brochure
                  </a>
                )}
              </div>
              <div className="mt-2 w-8 h-1 bg-[#811919]/10 group-hover/item:bg-[#811919]/40 transition-colors rounded-full" />
            </div>
          ))}
        </motion.div>

        {/* Overlay Fade effects */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="p-6 border-t border-gray-50 text-center z-20">
        <a href="#" className="text-[#811919] font-bold text-sm uppercase tracking-widest hover:underline flex items-center justify-center gap-2">
          {linkText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const NoticeEvents = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1750px] mx-auto px-4">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 mt-12">
          <ScrollingList 
            items={notices} 
            icon={Bell} 
            title="Notice Board" 
            linkText="View All Notices" 
          />
          <ScrollingList 
            items={academicNotices} 
            icon={BookOpen} 
            title="Academic News" 
            linkText="Academic Portal" 
          />
          <ScrollingList 
            items={events} 
            icon={Calendar} 
            title="Institute Events" 
            linkText="Full Event Calendar" 
          />
        </div>

      </div>
    </section>
  );
};

export default NoticeEvents;
