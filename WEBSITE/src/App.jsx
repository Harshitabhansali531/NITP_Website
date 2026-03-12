import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CSEDepartment from './pages/CSEDepartment';
import FacultyProfile from './components/FacultyProfile';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <div className={`min-h-screen bg-white ${loading ? 'overflow-hidden max-h-screen' : ''}`}>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department/cse" element={<CSEDepartment />} />
          <Route path="/faculty-directory" element={<FacultyProfile />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

