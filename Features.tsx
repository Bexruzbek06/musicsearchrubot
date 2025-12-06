import React from 'react';
import { Zap, Layers, TrendingUp, LifeBuoy } from 'lucide-react';
import { ContentText } from '../types';

interface FeaturesProps {
  text: ContentText;
}

const Features: React.FC<FeaturesProps> = ({ text }) => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-brand-dark" />,
      title: text.feat_instant_title,
      desc: text.feat_instant_desc,
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-dark" />,
      title: text.feat_sources_title,
      desc: text.feat_sources_desc,
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-dark" />,
      title: text.feat_charts_title,
      desc: text.feat_charts_desc,
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-brand-dark" />,
      title: text.feat_support_title,
      desc: text.feat_support_desc,
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{text.features_title}</h2>
            <div className="w-20 h-1.5 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-brand/30"
            >
              <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
