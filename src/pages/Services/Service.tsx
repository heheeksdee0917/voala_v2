import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCard {
  id: string;
  name: string;
  shortDescription: string;
  route: string;
}

const Service: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: 'consultation',
      name: 'Design Consultation',
      shortDescription: 'Professional guidance to kickstart your dream space transformation.',
      route: '/Services/consultation'
    },
    {
      id: 'space-planning',
      name: 'Space Planning',
      shortDescription: 'Optimize every square foot for maximum functionality and flow.',
      route: '/services/spaceplanning'
    },
    {
      id: '3d-visualization',
      name: '3D Visualization',
      shortDescription: 'See your future home in stunning photorealistic detail.',
      route: '/services/3d-visualization'
    },
    {
      id: 'bedroom-design',
      name: 'Bedroom Design',
      shortDescription: 'Create serene sanctuaries built for rest and relaxation.',
      route: '/services/bedroom-design'
    },
    {
      id: 'living-room',
      name: 'Living Room Design',
      shortDescription: 'Family spaces that balance comfort, style, and entertainment.',
      route: '/services/living-room-design'
    },
    {
      id: 'material-selection',
      name: 'Material Selection',
      shortDescription: 'Humidity-proof finishes that look beautiful and last.',
      route: '/services/material-selection'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cardsPerView = 3;
  const totalSlides = Math.ceil(services.length / cardsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const visibleServices = services.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#59514e] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to your needs
          </p>
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Arrow Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Previous services"
            >
              <ChevronLeft className="w-6 h-6 text-[#59514e]" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
              aria-label="Next services"
            >
              <ChevronRight className="w-6 h-6 text-[#59514e]" />
            </button>

            {/* Cards Container */}
            <div className="grid grid-cols-3 gap-6">
              {visibleServices.map((service) => (
                <Link
                  key={service.id}
                  to={service.route}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-[#59514e] mb-4 group-hover:text-[#453e3b] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center text-[#59514e] font-medium group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 bg-[#59514e]'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Scrollable Grid */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.route}
              className="group block"
            >
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-bold text-[#59514e] mb-3 group-hover:text-[#453e3b] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex items-center text-[#59514e] font-medium text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;