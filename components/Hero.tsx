import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, ChevronDown, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-02-28T23:59:59').getTime();

    const update = () => {      
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-float opacity-60 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-float opacity-60 mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 z-10 text-center relative">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm mb-8 border border-white/50 animate-fade-in-up hover:shadow-md transition-shadow cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
          <span className="text-sm font-semibold text-textLight uppercase tracking-wide">Programa de Mentoring | Feb-Mar 2026</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 tracking-tight leading-tight max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Formando Mentores, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">fortaleciendo ecosistemas</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-textLight mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Transforma ciencia en negocios sostenibles. Acompaña al bootcamp <strong className="text-text font-semibold relative inline-block">
            "Salvando la Amazonía"
            <svg className="absolute w-full h-2 bottom-0 left-0 text-primary/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </strong> y conviértete en un mentor de clase mundial.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a 
            href={SOCIAL_LINKS.form}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center bg-primary hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-primary/40 hover:-translate-y-1 min-w-[220px] overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Postula Ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </a>
          <a 
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white text-text border border-gray-200 text-lg font-medium px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-lg min-w-[220px]"
          >
            <Github className="mr-2" size={20} />
            Ver Repositorio
          </a>
        </div>

        {/* Countdown Card */}
        <div className="glass-card rounded-2xl p-6 md:p-8 inline-block shadow-xl max-w-4xl w-full animate-fade-in-up transform transition-transform hover:scale-[1.02]" style={{ animationDelay: '0.4s' }}>
          {expired ? (
            <div className="text-center py-4">
              <p className="text-2xl md:text-3xl font-bold text-accent mb-2">Postulaciones cerradas</p>
              <p className="text-textLight">El periodo de postulacion ha finalizado. Mantente atento a futuras convocatorias.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles size={16} className="text-secondary" />
                <p className="text-sm font-bold text-textLight uppercase tracking-widest">Cierre de postulaciones</p>
                <Sparkles size={16} className="text-secondary" />
              </div>

              <div className="grid grid-cols-4 gap-4 md:gap-8 divide-x divide-gray-200/50">
                {[
                  { label: 'Dias', value: timeLeft.days, color: 'text-secondary' },
                  { label: 'Horas', value: timeLeft.hours, color: 'text-secondary' },
                  { label: 'Min', value: timeLeft.minutes, color: 'text-secondary' },
                  { label: 'Seg', value: timeLeft.seconds, color: 'text-accent' }
                ].map((item, idx) => (
                  <div key={idx} className="text-center px-2">
                    <span className={`block text-3xl md:text-5xl font-extrabold ${item.color} tabular-nums mb-1`}>
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <span className="text-xs md:text-sm text-textLight font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center animate-bounce text-textLight/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
