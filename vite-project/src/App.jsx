import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NotificationStrip from './components/NotificationStrip';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RecentPublications from './components/RecentPublications';
import ResearchHighlights from './components/ResearchHighlights';
import Projects from './components/Projects';
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
      <NotificationStrip />
      <main>
        <HeroSection />
        <AboutSection />
        <RecentPublications />
        <ResearchHighlights />
        <Projects />
        <CampusImage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
