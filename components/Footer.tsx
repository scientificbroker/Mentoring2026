import React from 'react';
import { Github, Instagram, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2B34] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-2xl font-bold tracking-tighter block mb-6">
              BioHub<span className="text-primary">Venture</span>
            </span>
            <p className="text-gray-400 leading-relaxed mb-6">
              La primera venture building especializada en bioemprendimientos amazónicos del Perú. Impulsando la innovación sostenible desde la ciencia.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Programa</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#programa" className="hover:text-primary transition-colors">Estructura</a></li>
              <li><a href="#herramientas" className="hover:text-primary transition-colors">Toolkit</a></li>
              <li><a href="#beneficios" className="hover:text-primary transition-colors">Beneficios</a></li>
              <li><a href="https://forms.gle/3hN2AuXYbzsVYHcp8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Postulación</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} className="mr-3" />
                  {SOCIAL_LINKS.email}
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Instagram size={18} className="mr-3" />
                  @biohubventure
                </a>
              </li>
              <li>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Github size={18} className="mr-3" />
                  scientificbroker/Mentoring2026
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 BioHubVenture. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Licencia MIT</span>
            <span>Perú, Amazonas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;