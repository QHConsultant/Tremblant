
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="h-screen w-full flex items-center justify-center relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/tremblant/1920/1080')` }}
      ></div>
      <div className="absolute inset-0 bg-navy opacity-70"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl text-lightest-slate uppercase tracking-wider">
          Tremblant <span className="text-brand-cyan">24h</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-light-slate">
          The ultimate ski & snowboard festival where teams challenge themselves for 24 hours to support children's causes.
        </p>
        <div className="mt-8">
          <a
            href="#about"
            className="bg-brand-cyan text-navy font-bold py-3 px-8 rounded-md hover:bg-brand-cyan-dark transition-all duration-300 text-lg"
          >
            Discover the Event
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
