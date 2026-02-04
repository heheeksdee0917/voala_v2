import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { ref: videoRef, isInView } = useIntersectionObserver();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div ref={aboutRef} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {isInView && (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div 
                  ref={videoRef as React.RefObject<HTMLDivElement>}
                  className="rounded-lg shadow-2xl w-full h-96 overflow-hidden"
                >
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube-nocookie.com/embed/kyrh4C3fqZY?autoplay=0&mute=0&controls=1&showinfo=1&rel=0&modestbranding=1&playsinline=1" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}
            {!isInView && (
              <div 
              ref={videoRef as React.RefObject<HTMLDivElement>}
              className="rounded-lg shadow-2xl w-full h-96 overflow-hidden bg-gray-200 animate-pulse"
            >
            </div>
            )}
            <div className="absolute -bottom-6 -right-6 bg-black p-6 rounded-lg shadow-lg">
              <p className="text-white font-bold text-2xl font-linik">15+</p>
              <p className="text-white text-sm font-linik">Years Experience</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-louis-george-cafe text-voala-secondary">
              <span className="gradient-highlight">Bespoke</span> interior solutions<br />
              from concept to <span className="gradient-highlight">completion</span>
            </h2>
            
            <p className="text-lg text-voala-gray leading-relaxed font-louis-george-cafe">
              At <strong>VOALA</strong> we offer more than just design—we deliver a full journey, 
              <strong> tailored to you.</strong> From the first spark of an idea to the final layer of styling, we craft interiors that feel personal, purposeful, and beautifully finished.
            </p>
            
            <p className="text-lg text-voala-gray leading-relaxed font-louis-george-cafe">
              With over 15 years of experience in design and fit-out, our team is committed to turning vision into reality. <strong>Every space we create</strong>, blends thoughtful function with timeless elegance, ensuring the result is not only beautiful but built to last.
            </p>

           <p className="text-lg text-voala-gray leading-relaxed font-louis-george-cafe">
              Whether it's a <strong>private home or a commercial space</strong>, we manage every detail with heart and precision—so you can simply enjoy the space that’s <strong>truly yours.</strong>
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 font-louis-george-cafe gradient-highlight">200+</div>
                <p className="text-voala-gray font-louis-george-cafe">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 font-louis-george-cafe gradient-highlight">98%</div>
                <p className="text-voala-gray font-louis-george-cafe">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 font-louis-george-cafe gradient-highlight">10+</div>
                <p className="text-voala-gray font-louis-george-cafe">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;