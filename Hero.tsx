import React from 'react';
import { motion } from 'framer-motion';
import { Send, BarChart2 } from 'lucide-react';
import { ContentText } from '../types';
import { CONTACT_INFO } from '../constants';

interface HeroProps {
  text: ContentText;
}

const Hero: React.FC<HeroProps> = ({ text }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-50/50 skew-x-12 transform translate-x-20 -z-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand/10 text-brand-dark font-semibold text-sm mb-6 tracking-wide">
              Pbm5_5 FZ-LLC
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-8">
              {text.hero_title.split('—')[0]} 
              <span className="text-brand block mt-2">
                 {text.hero_title.includes('—') ? text.hero_title.split('—')[1] : ''}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              {text.hero_subtitle}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href={CONTACT_INFO.botLink} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-dark hover:bg-gray-800 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Send className="w-5 h-5 mr-2" />
              {text.hero_btn_bot}
            </a>
            <a 
              href="#charts"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-dark bg-brand hover:bg-brand-light rounded-xl transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
            >
              <BarChart2 className="w-5 h-5 mr-2" />
              {text.hero_btn_charts}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
