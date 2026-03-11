import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesCarousel from './components/FeaturesCarousel';
import NoticeEvents from './components/NoticeEvents';
import ResearchModule from './components/ResearchModule';
import CampusImage from './components/CampusImage';
import Footer from './components/Footer';

function App() {
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
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesCarousel />
        <NoticeEvents />
        <ResearchModule />
        <CampusImage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
