import React from 'react';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Features from './components/Features';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import SocialProof from './components/SocialProof';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Hero />
      <Methodology />
      <Features />
      <Offer />
      <Testimonials />
      <FAQ />
      <Footer />
      <SocialProof />
    </div>
  );
}

export default App;