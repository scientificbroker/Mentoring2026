import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import Toolkit from './components/Toolkit';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-text bg-background overflow-x-hidden">
      <a href="#programa" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Saltar al contenido principal
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Modules />
        <Process />
        <Toolkit />
        <Benefits />
        <Timeline />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;