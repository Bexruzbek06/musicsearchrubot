import React from 'react';
import { motion } from 'framer-motion';
import { Play, Search, Headphones } from 'lucide-react';
import { ContentText } from '../types';

interface AboutProps {
  text: ContentText;
}

const About: React.FC<AboutProps> = ({ text }) => {
  const steps = [
    {
      icon: <Play className="w-8 h-8 text-white" />,
      title: text.step_1_title,
      desc: text.step_1_desc,
    },
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: text.step_2_title,
      desc: text.step_2_desc,
    },
    {
      icon: <Headphones className="w-8 h-8 text-white" />,
      title: text.step_3_title,
      desc: text.step_3_desc,
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{text.about_title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{text.about_desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-0"></div>

            {steps.map((step, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative z-10 flex flex-col items-center text-center group"
                >
                    <div className="w-24 h-24 bg-dark rounded-2xl shadow-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 border-b-4 border-brand">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed px-4">{step.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
