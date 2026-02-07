import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programa', href: '#programa' },
    { name: 'Herramientas', href: '#herramientas' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Cronograma', href: '#cronograma' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get the navbar height to offset the scroll position
      const navHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer">
              <span className={`font-bold tracking-tighter transition-all duration-300 ${scrolled ? 'text-xl text-primary' : 'text-2xl text-primary'}`}>
                BioHub<span className="text-secondary">Venture</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-text hover:text-primary transition-colors font-medium text-sm cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-textLight hover:text-text transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href={SOCIAL_LINKS.form}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-primary hover:bg-green-700 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg ${scrolled ? 'px-5 py-1.5 text-sm' : 'px-6 py-2.5'}`}
            >
              Postula Ahora
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text"
              aria-label={isOpen ? 'Cerrar menu de navegacion' : 'Abrir menu de navegacion'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full p-4 flex flex-col space-y-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-text hover:text-primary font-medium p-3 hover:bg-gray-50 rounded-lg transition-colors block"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={SOCIAL_LINKS.form}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-center py-3 rounded-lg font-bold block mt-2 hover:bg-green-700 transition-colors"
          >
            Postula Ahora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;