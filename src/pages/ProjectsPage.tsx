import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import StandardButton from '../components/ui/standard-button';
import { PortfolioTabs } from '../components/ui/portfolio-tabs';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white font-linik">
      {/* Hero Section */}
      <section className="pt-16 md:pt-20 pb-0 md:pb-0 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {/* Back to Home Button - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <StandardButton
              onClick={handleBackToHome}
              variant="outline"
              className="inline-flex items-center gap-2 text-sm md:text-base"
            >
              <ArrowLeft size={16} />
              Back to Home
            </StandardButton>
          </motion.div>
          
          {/* Centered Content */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 font-linik text-black text-center"
            >
              Our <span className="gradient-highlight">Portfolio</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed font-linik px-4 text-center"
            >
              Discover our collection of meticulously crafted spaces that showcase our commitment to 
              exceptional design, innovative solutions, and uncompromising quality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Tabs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <PortfolioTabs />
        </div>
      </section>
      <BackToTop />
    </div>
  );
};

export default ProjectsPage;