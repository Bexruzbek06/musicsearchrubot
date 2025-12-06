import React from 'react';
import { ContentText } from '../types';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  text: ContentText;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="bg-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg mb-1">MusicSearch Ru</h4>
            <p className="text-sm">© {new Date().getFullYear()} {CONTACT_INFO.companyName}. {text.footer_rights}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
            <a href="#" className="hover:text-brand transition-colors">{text.footer_policy}</a>
            <a href="#" className="hover:text-brand transition-colors">{text.footer_terms}</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
