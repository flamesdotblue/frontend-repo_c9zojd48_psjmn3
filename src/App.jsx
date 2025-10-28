import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <Steps />
      <CTA />
      <footer className="border-t border-white/10 bg-neutral-950 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} FitSnap. Built with AI vision, designed for athletes.
      </footer>
    </div>
  );
};

export default App;
