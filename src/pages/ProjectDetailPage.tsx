import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Maximize2, Tag } from 'lucide-react';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { projectsData } from '../data/projectsData';
import StandardButton from '../components/ui/standard-button';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import ImageGalleryModal from '../components/ui/ImageGalleryModal';
import GalleryImageCard from '../components/GalleryImageCard';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { ref: imageRef, isInView } = useFadeInOnScroll();
  const [isGalleryModalOpen, setIsGalleryModalOpen] = React.useState(false);
  const [currentGalleryImageIndex, setCurrentGalleryImageIndex] = React.useState(0);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = React.useState(false);
  
  const project = projectsData.find(p => p.id === projectId);

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (index: number) => {
    setCurrentGalleryImageIndex(index);
    setIsGalleryModalOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryModalOpen(false);
  };

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };
  
  if (!project) {
    return (
      <div className="min-h-screen bg-white font-linik flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <StandardButton onClick={() => navigate('/projects')} variant="primary">
            Back to Projects
          </StandardButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-linik">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          ref={imageRef as React.RefObject<HTMLImageElement>}
          className={`w-full h-full ${
            isInView ? 'fadeInUpAnimated' : 'fadeInUpTrigger'
          }`}
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate('/projects')}
          className="absolute top-4 md:top-8 left-4 md:left-8 z-10 flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
        >
          <ArrowLeft size={16} className="md:w-5 md:h-5" />
          <span className="font-medium">Back to Projects</span>
        </motion.button>
        
        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 lg:p-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <span className="px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium">
                  {project.category}
                </span>
                <span className="px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium capitalize">
                  {project.type}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 font-linik leading-tight">
                {project.name}
              </h1>
              
              <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed max-w-3xl">
                <span dangerouslySetInnerHTML={{ __html: project.description }} />
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center gap-2 md:gap-3 text-white">
                  <MapPin size={16} className="md:w-5 md:h-5 text-white/80" />
                  <div>
                    <p className="text-xs md:text-sm text-white/80">Location</p>
                    <p className="font-semibold text-sm md:text-base">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-white">
                  <Calendar size={16} className="md:w-5 md:h-5 text-white/80" />
                  <div>
                    <p className="text-xs md:text-sm text-white/80">Completed</p>
                    <p className="font-semibold text-sm md:text-base">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-white">
                  <Maximize2 size={16} className="md:w-5 md:h-5 text-white/80" />
                  <div>
                    <p className="text-xs md:text-sm text-white/80">Size</p>
                    <p className="font-semibold text-sm md:text-base">{project.size}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 font-linik text-black">
                Project <span className="gradient-highlight">Overview</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: project.overview || 'This project represents our commitment to creating exceptional spaces that blend functionality with aesthetic excellence. Every detail has been carefully considered to deliver a result that exceeds expectations and stands the test of time.' }} />
              </p>
            </motion.div>
            
            {/* Project Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-linik text-black text-center">
                Project <span className="gradient-highlight">Gallery</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {project.galleryImages.map((image, index) => (
                  <GalleryImageCard
                    key={index}
                    imageSrc={image.src}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            </motion.div>
            
            {/* Call to Action Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-linik text-black">
                Ready to Start Your <span className="gradient-highlight">Project</span>?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <StandardButton onClick={() => navigate('/projects')} variant="primary">
                  Explore More Projects
                </StandardButton>
                <StandardButton onClick={() => navigate('/contact')} variant="outline">
                  Get Your Quote
                </StandardButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BackToTop />
      
      {/* Image Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryModalOpen}
        onClose={handleCloseGallery}
        images={project.galleryImages}
        initialIndex={currentGalleryImageIndex}
      />
    </div>
  );
};

export default ProjectDetailPage;