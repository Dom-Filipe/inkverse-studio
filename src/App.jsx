import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Artists from './components/Artists';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import OldSchoolPage from './pages/OldSchoolPage';
import MinimalistaPage from './pages/MinimalistaPage';
import RealismoPage from './pages/RealismoPage';
import AquarelaPage from './pages/AquarelaPage';

import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Portfolio />
              <Artists />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <Route path="/oldschool" element={<OldSchoolPage />} />
        <Route path="/minimalista" element={<MinimalistaPage />} />
        <Route path="/realismo" element={<RealismoPage />} />
        <Route path="/aquarela" element={<AquarelaPage />} />
      </Routes>
    </Router>
  );
}

export default App;

