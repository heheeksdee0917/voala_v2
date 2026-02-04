import React, { useEffect, useRef, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const SignatureProjects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Use first 6 projects from projectsData
  const projects = projectsData.slice(0, 6).map(project => ({
    id: project.id,
    name: project.name,
    location: project.location,
    image: project.image,
    imageAlt: project.imageAlt
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const handleViewAllProjects = () => {
    navigate('/projects');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-linik gradient-highlight cursor-pointer hover:opacity-80 transition-opacity duration-300"
            onClick={handleViewAllProjects}
          >
            Signature Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-linik">
            Each project tells a unique story of innovative design craftsmanship and
          </p>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any; onClick: () => void }> = memo(({ project, onClick }) => {
  const { ref: imageRef, isInView } = useFadeInOnScroll();

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.name} project details`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        ref={imageRef as React.RefObject<HTMLImageElement>}
        className={`w-full h-80 transition-transform duration-300 group-hover:scale-110 ${
          isInView ? 'fadeInUpAnimated' : 'fadeInUpTrigger'
        }`}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Award Winning Tag */}
        {(project.id === 'aria-residence-award' || project.id === 'the-edge-award' || project.id === 'Emhub-1F') && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            Award Winning
          </div>
        )}
        
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="text-2xl font-bold mb-2 font-linik text-white">{project.name}</h3>
          <div className="flex items-center gap-2 text-white">
            <MapPin size={16} />
            <span className="font-linik">{project.location}</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/30 transition-all duration-300 rounded-lg"></div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default SignatureProjects;