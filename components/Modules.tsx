import React from 'react';
import { WEBINARS } from '../constants';
import { Calendar, BookOpen, Clock } from 'lucide-react';

const Modules: React.FC = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">El Programa</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Ruta de Aprendizaje</h2>
          <p className="text-lg text-textLight">Un recorrido intensivo de 4 semanas combinando teoría, práctica y análisis de casos reales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {WEBINARS.map((webinar, index) => (
            <div key={webinar.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${index % 2 === 0 ? 'from-primary to-green-300' : 'from-secondary to-blue-300'}`}></div>

              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 shadow-sm ${index % 2 === 0 ? 'bg-green-50 text-primary' : 'bg-blue-50 text-secondary'}`}>
                  <webinar.icon size={36} strokeWidth={1.5} />
                </div>
                <div className="flex items-center text-sm font-bold text-textLight bg-gray-50 px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                  <Calendar size={16} className="mr-2 text-primary" />
                  {webinar.date}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-primary transition-colors">{webinar.title}</h3>
              <p className="text-textLight mb-8 leading-relaxed">{webinar.description}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center">
                    <span className="w-8 h-[1px] bg-gray-300 mr-2"></span>
                    Conceptos Clave
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {webinar.topics.map((topic, i) => (
                      <span key={i} className="inline-block text-xs font-medium text-text bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-50">
                  <div className={`flex items-center text-sm font-semibold p-4 rounded-xl border ${index % 2 === 0 ? 'bg-green-50/50 border-green-100 text-primary' : 'bg-blue-50/50 border-blue-100 text-secondary'}`}>
                    <BookOpen size={18} className="mr-3 flex-shrink-0" />
                    <div>
                      <span className="block text-xs opacity-70 uppercase tracking-wide">Caso Práctico</span>
                      "{webinar.caseStudy}"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;