import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Artists from './components/Artists';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';

import StylePage from './pages/StylePage';
import NotFound from './pages/NotFound';

import './index.css';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Helmet>
        <title>Inkverse Studio | Estúdio Criativo de Tatuagem e Design</title>
        <meta
          name="description"
          content="Inkverse Studio: Especialistas em design, tatuagem e artes visuais. Veja nossos trabalhos nas categorias Old School, Realismo, Minimalista e Aquarela."
        />
        <meta property="og:title" content="Inkverse Studio" />
        <meta property="og:description" content="Design, tatuagem e criatividade em um só lugar." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        {/* Header fixo no topo */}
        <Header />

        {/* Conteúdo principal ocupa todo o espaço disponível */}
        <main className="flex-grow">
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
            {/* /oldschool, /minimalista, /realismo, /aquarela — ver src/data/styles.js */}
            <Route path="/:slug" element={<StylePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer fixo ao final da página */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
