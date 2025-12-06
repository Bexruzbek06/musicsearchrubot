import React from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { ContentText } from '../types';
import { CONTACT_INFO } from '../constants';

interface ContactProps {
  text: ContentText;
}

const Contact: React.FC<ContactProps> = ({ text }) => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{text.contact_title}</h2>
          <div className="w-20 h-1.5 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Company & Phone */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-700">
               <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">{text.contact_phone}</h3>
            <p className="text-brand font-bold text-lg">{CONTACT_INFO.phone}</p>
            <p className="text-gray-400 text-sm mt-2">{text.contact_company}: {CONTACT_INFO.companyName}</p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
             <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-700">
               <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{text.contact_email}</h3>
            {CONTACT_INFO.emails.map(email => (
                <a key={email} href={`mailto:${email}`} className="text-gray-600 hover:text-brand block transition-colors">
                    {email}
                </a>
            ))}
          </div>

          {/* Telegram */}
          <a 
            href={CONTACT_INFO.tgSupport} 
            target="_blank" 
            rel="noreferrer"
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md hover:border-brand/30 transition-all group"
          >
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-500 group-hover:bg-blue-100 transition-colors">
               <Send className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{text.contact_tg_support}</h3>
            <span className="text-sm text-brand font-medium">@pbm5_5_support_bot</span>
          </a>

          {/* TamTam */}
          <a 
            href={CONTACT_INFO.ttSupport} 
            target="_blank" 
            rel="noreferrer"
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md hover:border-brand/30 transition-all group"
          >
             <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4 text-indigo-500 group-hover:bg-indigo-100 transition-colors">
               <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{text.contact_tt_support}</h3>
            <span className="text-sm text-brand font-medium">TamTam Support</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
