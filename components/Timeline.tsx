import React from 'react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="cronograma" className="py-24 bg-background relative">
      {/* Texture */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-gray-50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-text mb-20">Cronograma 2026</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block rounded-full"></div>
          
          <div className="space-y-12">
            {TIMELINE.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className="w-full md:w-5/12 p-2">
                  <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden ${index % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                    <div className={`absolute top-0 w-2 h-full ${index % 2 === 0 ? 'left-0 bg-primary' : 'right-0 bg-secondary md:right-0 md:left-auto left-0'}`}></div>
                    
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${index % 2 === 0 ? 'bg-green-50 text-primary' : 'bg-blue-50 text-secondary'}`}>
                      {event.date}
                    </span>
                    <h3 className="text-2xl font-bold text-text mb-3">{event.title}</h3>
                    <p className="text-textLight leading-relaxed">{event.description}</p>
                  </div>
                </div>
                
                {/* Center Node */}
                <div className="w-2/12 flex justify-center my-4 md:my-0 relative">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-md z-10 transition-transform duration-300 group-hover:scale-150 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}></div>
                </div>
                
                {/* Spacer */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;