import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Charts from './components/Charts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';
import { TRANSLATIONS } from './constants';

function App() {
  const [lang, setLang] = useState<Language>(Language.RU);

  // Scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const text = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header lang={lang} setLang={setLang} text={text} />
      
      <main className="flex-grow">
        <Hero text={text} />
        <About text={text} />
        <Features text={text} />
        <Charts text={text} />
        <Contact text={text} />
      </main>

      <Footer text={text} />
    </div>
  );
}

export default App;
