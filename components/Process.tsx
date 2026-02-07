import React from 'react';
import { FileText, Search, UserCheck, Mail, ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    { icon: FileText, title: "1. Registro", desc: "Completa el formulario antes del 13 Feb" },
    { icon: Search, title: "2. Revisión", desc: "Evaluación de perfil y experiencia" },
    { icon: UserCheck, title: "3. Selección", desc: "Resultados el 15 Feb" },
    { icon: Mail, title: "4. Onboarding", desc: "Bienvenida y acceso a plataforma" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-green-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Proceso de Postulación</h2>
            <p className="text-green-50 text-xl font-light">Buscamos compromiso, experiencia y pasión por la Amazonía.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Dashed Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-green-300/50"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border-4 border-green-400/30 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <step.icon size={32} className="text-white group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-full hover:bg-white/20 transition-colors border border-green-400/20">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-green-100 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="https://forms.gle/3hN2AuXYbzsVYHcp8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              Iniciar Postulación <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
    </section>
  );
};

export default Process;