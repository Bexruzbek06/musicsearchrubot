import React, { useState } from 'react';
import { ContentText } from '../types';
import { MOCK_CHART_YANDEX, MOCK_CHART_VK } from '../constants';

interface ChartsProps {
  text: ContentText;
}

const Charts: React.FC<ChartsProps> = ({ text }) => {
  const [activeTab, setActiveTab] = useState<'yandex' | 'vk'>('yandex');

  const currentData = activeTab === 'yandex' ? MOCK_CHART_YANDEX : MOCK_CHART_VK;

  return (
    <section id="charts" className="py-24 bg-dark text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{text.charts_title}</h2>
            
            <div className="inline-flex bg-white/10 p-1 rounded-xl backdrop-blur-md">
                <button
                    onClick={() => setActiveTab('yandex')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        activeTab === 'yandex' ? 'bg-brand text-dark shadow-lg' : 'text-gray-300 hover:text-white'
                    }`}
                >
                    {text.charts_tab_yandex}
                </button>
                <button
                    onClick={() => setActiveTab('vk')}
                    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        activeTab === 'vk' ? 'bg-brand text-dark shadow-lg' : 'text-gray-300 hover:text-white'
                    }`}
                >
                    {text.charts_tab_vk}
                </button>
            </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-2 md:p-6 border border-white/10">
            {currentData.map((song) => (
                <div 
                    key={song.rank}
                    className="flex items-center p-4 hover:bg-white/5 rounded-xl transition-colors group"
                >
                    <span className="w-8 text-xl font-bold text-brand mr-4 text-center">{song.rank}</span>
                    <img 
                        src={song.cover} 
                        alt={song.title} 
                        className="w-12 h-12 rounded-md object-cover mr-4 shadow-sm" 
                    />
                    <div className="flex-grow">
                        <h4 className="font-bold text-white text-lg leading-tight group-hover:text-brand transition-colors">{song.title}</h4>
                        <p className="text-gray-400 text-sm">{song.artist}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-0 h-0 border-l-[6px] border-l-brand border-y-[4px] border-y-transparent ml-0.5"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Charts;
