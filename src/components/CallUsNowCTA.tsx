import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import StandardButton from './ui/standard-button';

const CallUsNowCTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      },
      { threshold: 0.5 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8">
        <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-linik gradient-highlight">
              Need help? Call us now →
            </h2>
            <p className="text-xl text-gray-700 font-linik">
              Our design consultants are ready to discuss your project requirements
            </p>
          </div>
          
          <StandardButton
            onClick={() => window.location.href = 'tel:+60125053395'}
            variant="primary"
            className="inline-flex items-center gap-3"
            showArrow
          >
            <Phone size={20} />
            Call Us Now
          </StandardButton>
        </div>
      </div>
    </section>
  );
};

export default CallUsNowCTA;