// external imports
import React from 'react';
import tw from 'twin.macro';

// internal imports
import Header from 'components/Header';
import Hero from 'components/Hero';
import FeaturePreview from 'components/FeaturePreview';
import FeatureGrid from 'components/FeatureGrid';
import Testimonial from 'components/Testimonial';
import Blog from 'components/Blog';
import CallToAction from 'components/CallToAction';
import Footer from 'components/Footer';

const LandingPage = () => {
  return (
    <div className={tw`bg-white`}>
      <div className={tw`relative overflow-hidden`}>
        <Header />

        <main>
          <Hero />

          <FeaturePreview />

          <FeatureGrid />

          <Testimonial />

          <Blog />

          <CallToAction />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
