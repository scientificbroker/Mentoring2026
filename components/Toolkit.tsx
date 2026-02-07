import React from 'react';
import { TOOLS } from '../constants';
import { 
  Download, ClipboardList, Lightbulb, Zap, Users, 
  RefreshCcw, AlertTriangle, BarChart, CheckSquare,
  ArrowUpRight
} from 'lucide-react';

const Toolkit: React.FC = () => {
  
  // Helper to get visual config based on category
  const getCategoryConfig = (category: string) => {
    switch(category) {
      case 'Gestión': return { icon: ClipboardList, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' };
      case 'Innovación': return { icon: Lightbulb, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' };
      case 'Agilidad': return { icon: Zap, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' };
      case 'Liderazgo': return { icon: Users, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100' };
      case 'Cambio': return { icon: RefreshCcw, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' };
      case 'Riesgos': return { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100' };
      case 'Métricas': return { icon: BarChart, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' };
      case 'Cierre': return { icon: CheckSquare, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100' };
      default: return { icon: ClipboardList, color: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-100' };
    }
  };

  return (
    <section id="herramientas" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Recursos Open Source</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Toolkit del Mentor</h2>
            <p className="text-lg text-textLight">
              Accede a 14 herramientas esenciales diseñadas para estandarizar y potenciar tu labor de mentoría.
            </p>
          </div>
          <a 
            href="https://github.com/scientificbroker/Mentoring2026" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#1A2B34] text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-all shadow-lg hover:-translate-y-1"
          >
            <Download size={20} className="mr-2" />
            Descargar en GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLS.map((tool, index) => {
            const config = getCategoryConfig(tool.category);
            const Icon = config.icon;
            
            return (
              <div key={index} className="group bg-white border border-gray-100 rounded-xl p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-24 h-24 ${config.bg} rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2.5 rounded-lg ${config.bg} ${config.color} ${config.border} border shadow-sm`}>
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider mb-2 ${config.color} bg-opacity-10 px-2 py-0.5 rounded-full ${config.bg}`}>
                    {tool.category}
                  </span>
                  
                  <h3 className="font-bold text-text text-lg leading-tight group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;