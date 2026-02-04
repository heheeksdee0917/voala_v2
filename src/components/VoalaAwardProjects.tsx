import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VoalaAwardProjects: React.FC = () => {
  const [isSectionHovered, setIsSectionHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Project data
  const projects = [
    {
      id: 1,
      name: "ARIA",
      description: "A luxury residential development featuring contemporary design elements and premium finishes.",
      location: "Kuala Lumpur, Malaysia",
      image: "/Voala/ProjectSource/Award-Winning-Projects/Aria/AriaCoverPhoto.avif"
    },
    {
      id: 2,
      name: "THE EDGE",
      description: "Modern commercial space with innovative design and sustainable features.",
      location: "Kuala Lumpur, Malaysia",
      image: "/Voala/ProjectSource/Award-Winning-Projects/TheEdge/TheEdgeCoverPhoto.avif"
    }
  ];

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleViewProjects = () => {
    // Navigate to The Edge award-winning project detail page using the first project's ID
    navigate('/award-winning-projects/aria-residence-award');
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsSectionHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsSectionHovered(false);
    }
  };

  const handleTouchStart = () => {
    if (isMobile) {
      setIsSectionHovered(true);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setIsSectionHovered(false);
    }
  };

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-voala-secondary"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* Left Diagonal Panel */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            clipPath: 'polygon(0% 0%, 66.5% 0%, 33.5% 100%, 0% 100%)'
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
            style={{
              backgroundImage: `url(${projects[0].image})`,
              transform: isSectionHovered ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        </div>

        {/* Right Diagonal Panel */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            clipPath: 'polygon(66.5% 0%, 100% 0%, 100% 100%, 33.5% 100%)'
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
            style={{
              backgroundImage: `url(${projects[1].image})`,
              transform: isSectionHovered ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        </div>

        {/* Cutting Line */}
        <div 
          className="absolute inset-0 z-2"
          style={{
            backgroundColor: '#b2a190',
            clipPath: 'polygon(66% 0%, 67% 0%, 34% 100%, 33% 100%)',
            zIndex: 2
          }}
        />

        {/* Central Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-20">
          <div className="text-center text-white flex flex-col items-center">
            {/* VOALA Logo */}
            <img
              src="Voala/ProjectSource/Logo/VOALA NEW_WHITE.png"
              alt="VOALA"
              className="h-24 md:h-32 lg:h-40 mb-4 object-contain"
             loading="lazy"
              style={{
                filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.8)) drop-shadow(0 4px 16px rgba(0, 0, 0, 0.6))'
              }}
            />
            
            {/* Award Winning Projects Text */}
            <h2 
              className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.5em] opacity-90 mb-8"
              style={{
                textShadow: '0 4px 16px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)'
              }}
            >
              AWARD WINNING PROJECTS
            </h2>
            
            {/* Explore Button */}
            <div className="flex justify-center">
              <button
                onClick={handleViewProjects}
                className="group/btn flex items-center gap-2 px-6 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/20 pointer-events-auto"
              >
                Explore
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div 
        className="md:hidden absolute inset-0 bg-black"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Project Images */}
          {projects.map((project, index) => (
            <div key={project.id} className="relative flex-1 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
                style={{
                  backgroundImage: `url(${project.image})`,
                  transform: isSectionHovered ? 'scale(1.1)' : 'scale(1)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Mobile Central Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
          <div className="text-center text-white flex flex-col items-center">
            {/* Mobile VOALA Logo */}
            <img
              src="Voala/ProjectSource/Logo/VOALA NEW_WHITE.png"
              alt="VOALA"
              className="h-12 mb-2 object-contain"
             loading="lazy"
              style={{
                filter: 'drop-shadow(0 4px 16px rgba(0, 0, 0, 0.8))'
              }}
            />
            
            {/* Mobile Award Winning Projects Text */}
            <h2 
              className="text-xs tracking-[0.3em] opacity-90 mb-4"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
              }}
            >
              AWARD WINNING PROJECTS
            </h2>
            
            {/* Mobile Explore Button */}
            <div className="flex justify-center">
              <button
                onClick={handleViewProjects}
                className="flex items-center gap-2 px-4 py-2 border border-white text-white bg-transparent text-sm pointer-events-auto"
              >
                Explore
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoalaAwardProjects;