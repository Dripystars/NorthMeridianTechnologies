import React from 'react';
import Hero from './Hero';
import EngineSection from './EngineSection';
import EconomySection from './EconomySection';
import FeaturedProject from './FeaturedProject';

const MainPage: React.FC = () => {
  return (
    <>
      <Hero />
      <EngineSection />
      <EconomySection />
      <FeaturedProject />
    </>
  );
};

export default MainPage;