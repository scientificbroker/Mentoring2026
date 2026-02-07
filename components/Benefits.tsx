import React from 'react';
import { Award, Globe, Video, FolderGit2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: Globe, title: "Red Exclusiva", desc: "Networking con expertos en biotecnología." },
    { icon: Video, title: "Acceso Extendido", desc: "Grabaciones disponibles por 3 meses." },
    { icon: FolderGit2, title: "Repositorio MIT", desc: "Acceso total a código y herramientas." },
    { icon: Award, title: "Certificación", desc: "Credencial digital 'Mentor Senior'." },
  ];

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
             {/* Certificate Mockup */}
             <div className="relative bg-white border-8 border-gray-100 p-8 shadow-2xl rounded-lg text-center aspect-[4/3] flex flex-col justify-center transform hover:scale-105 transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-text mb-2">CERTIFICADO DE FINALIZACIÓN</h3>
                <p className="text-sm text-textLight mb-6">Otorgado a [Nombre del Mentor]</p>
                <div className="w-24 h-0.5 bg-gray-200 mx-auto mb-6"></div>
                <h4 className="text-xl font-bold text-secondary mb-1">MENTOR SENIOR BIOHUBVENTURE</h4>
                <p className="text-xs text-textLight mt-8">Febrero - Marzo 2026</p>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Más que una formación, una acreditación</h2>
            <p className="text-lg text-textLight mb-12">
              Al finalizar el programa satisfactoriamente, recibirás una certificación que valida tus competencias en gestión de innovación científica bajo estándares internacionales.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-50 p-3 rounded-lg text-primary mr-4">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text mb-1">{item.title}</h4>
                    <p className="text-sm text-textLight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;