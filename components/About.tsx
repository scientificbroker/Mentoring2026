import React from 'react';
import { Users, BookOpen, Briefcase, Layout } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: "Webinars Interactivos", value: "4", icon: Layout },
    { label: "Herramientas Prácticas", value: "14", icon: BookOpen },
    { label: "Mentores a Seleccionar", value: "25", icon: Users },
    { label: "Casos Reales", value: "4", icon: Briefcase },
  ];

  return (
    <section id="programa" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6 leading-tight">
              Integración estratégica: <span className="text-secondary">PMBOK 7 + Agile</span> en la Amazonía
            </h2>
            <div className="space-y-4 text-textLight text-lg leading-relaxed">
              <p>
                BioHubVenture no es solo un curso; es un programa de entrenamiento intensivo diseñado para profesionales que buscan impactar el ecosistema de innovación peruano.
              </p>
              <p>
                Fusionamos la rigurosidad de los estándares internacionales de gestión de proyectos con la flexibilidad de las metodologías ágiles, adaptadas específicamente para startups de base científica (biotech) que operan en contextos de alta incertidumbre como la Amazonía.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-background p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center group">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={24} />
                  </div>
                  <h3 className="text-4xl font-bold text-text mb-1">{stat.value}</h3>
                  <p className="text-sm text-textLight font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;