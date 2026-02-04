import React, { useEffect, useRef } from 'react';
import { InfiniteSlider } from './ui/infinite-slider';

const RecognitionGrid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-linik text-black">
            Recognized for <span className="gradient-highlight">Exceptional Work</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-linik">
            Our commitment to excellence has been recognized by industry leaders and satisfied clients
          </p>
        </div>
      </div>
      
      <div ref={gridRef} className="w-full">
        <InfiniteSlider duration={60}>
          <div
            className="h-[102px] md:h-[136px] lg:h-[136px] w-[800px] md:w-[1200px] lg:w-[1600px]"
            style={{
              backgroundImage: 'url(/Voala/ProjectSource/Awards.avif)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          />
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default RecognitionGrid;