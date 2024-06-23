import { FC, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import { useLocale } from './i18n';

import Home from './pages/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import pic1 from "./assets/1.jpg"

const App: FC = () => {

  const { locales, langCode, restOfPath } = useLocale();
  const navigate = useNavigate();

  // Change fonts in different languages. >> index.css
  const langFont = langCode === "en" ? "enFont" : "zhFont";

  // redirect to /en , if langCode doesn't exist.
  useEffect(() => {
    locales.hasOwnProperty(langCode) ? navigate(`${langCode}/${restOfPath}`) : navigate('/en');
  }, [langCode, locales, navigate, restOfPath]);

  return (
    <HelmetProvider>
      <div className={`w-full min-h-screen flex flex-col ${langFont}`}>

        <Navbar />
        <img src={pic1} alt="hero" />

        <Routes>
          <Route path="/" element={<Navigate replace to="/en" />} />
          <Route path="/:langCode" element={<Home />} />
          <Route path="/:langCode/about" element={<About />} />
          <Route path="*" element={<Navigate replace to="/en" />} />
        </Routes>

        <Footer />

      </div>
    </HelmetProvider>
  );
};

export default App;
