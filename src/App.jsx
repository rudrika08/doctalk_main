import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
