import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface VoalaSlide {
  image: string;
}

interface VoalaIntroGalleryProps {
  slides: VoalaSlide[];
}

const VoalaIntroGallery: React.FC<VoalaIntroGalleryProps> = memo(({ slides }) => {
  const { ref: imageRef, isInView } = useFadeInOnScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full overflow-hidden">
        <motion.div
          ref={imageRef as React.RefObject<HTMLImageElement>}
          className={`w-full max-w-full ${isMobile ? 'h-[70vh]' : 'h-screen'}`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            backgroundImage: 'url(/Voala/ProjectSource/VoalaCoreValues.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maxWidth: '100vw'
          }}
        />
      </div>
    </div>
  );
});

VoalaIntroGallery.displayName = 'VoalaIntroGallery';

export default VoalaIntroGallery;