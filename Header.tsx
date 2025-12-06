import React, { useState } from 'react';
import { Menu, X, Music, Globe } from 'lucide-react';
import { ContentText, Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  text: ContentText;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#hero", label: text.nav_home },
    { href: "#about", label: text.nav_about },
    { href: "#features", label: text.nav_features },
    { href: "#charts", label: text.nav_charts },
    { href: "#contact", label: text.nav_contact },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center shadow-lg">
              <Music className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-dark">MusicSearch Ru</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-600 hover:text-brand font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-brand transition-colors font-medium border border-gray-200 rounded-full px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                {lang}
              </button>
              <div className="absolute right-0 mt-0 w-40 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden hidden group-hover:block pt-2">
                 <div className="flex flex-col bg-white">
                    {(Object.keys(Language) as Array<keyof typeof Language>).map((key) => (
                    <button
                        key={key}
                        onClick={() => setLang(Language[key])}
                        className={`px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors ${lang === Language[key] ? 'text-brand font-bold bg-yellow-50' : 'text-gray-700'}`}
                    >
                        {Language[key]}
                    </button>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Simple Lang Toggle for Mobile */}
             <button 
                onClick={() => {
                  const langs = Object.values(Language);
                  const idx = langs.indexOf(lang);
                  setLang(langs[(idx + 1) % langs.length]);
                }}
                className="text-sm font-bold text-brand border border-brand/30 px-2 py-1 rounded"
             >
                {lang}
             </button>

            <button onClick={toggleMenu} className="text-gray-800 hover:text-brand transition-colors">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
