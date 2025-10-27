import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Cause from './components/Cause';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-navy font-sans text-slate antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Cause />
        <Stats />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;