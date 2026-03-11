import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesCarousel from '../components/FeaturesCarousel';
import NoticeEvents from '../components/NoticeEvents';
import ResearchModule from '../components/ResearchModule';
import FacultyProfile from '../components/FacultyProfile';
import CampusImage from '../components/CampusImage';

const Home = () => {
  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesCarousel />
      <NoticeEvents />
      <ResearchModule />
      <FacultyProfile />
      <CampusImage />
    </main>
  );
};

export default Home;
