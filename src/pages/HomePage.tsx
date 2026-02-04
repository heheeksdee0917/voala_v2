import React, { useState, Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import VoalaAwardProjects from '../components/VoalaAwardProjects';
import ServicesSection from '../components/ServicesSection';
import TimelineSection from '../components/TimelineSection';
import BackToTop from '../components/BackToTop';
import Service from './Services/Service';
import {
  LazyAboutSection,
  LazySignatureProjects,
  LazyTestimonialCarousel,
  LazyCallUsNowCTA,
  LazyRecognitionGrid,
} from '../components/LazyComponents';

const ComponentLoader = () => (
  <div className="py-20 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-64 w-full max-w-4xl rounded-lg"></div>
  </div>
);



const HomePage: React.FC = ({

}) => {


  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TimelineSection />
      <VoalaAwardProjects />
      <Suspense fallback={<ComponentLoader />}>
        <LazySignatureProjects />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyAboutSection />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyTestimonialCarousel />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyCallUsNowCTA />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyRecognitionGrid />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <Service />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
      </Suspense>
      <BackToTop />
    </>
  );
};

export default HomePage;