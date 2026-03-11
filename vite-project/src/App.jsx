import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CSEDepartment from './pages/CSEDepartment';
import FacultyProfile from './components/FacultyProfile';

function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department/cse" element={<CSEDepartment />} />
        <Route path="/faculty-directory" element={<FacultyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
