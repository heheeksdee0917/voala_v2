import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ src: string; }>;
  initialIndex: number;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update current index when initial index changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'Escape':
          event.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors duration-200 p-2"
          aria-label="Close gallery"
        >
          <X size={32} />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-4 z-60 text-white font-louis-george-cafe">
          <span className="text-lg">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Main Image Container */}
        <div 
          className="flex items-center justify-center h-full p-4 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-200 p-3 rounded-full bg-black/30 hover:bg-black/50"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-60 text-white hover:text-gray-300 transition-colors duration-200 p-3 rounded-full bg-black/30 hover:bg-black/50"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Display */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnail Strip (Optional - for better UX) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-60">
          <div className="flex gap-2 max-w-screen-lg overflow-x-auto px-4 py-2 bg-black/30 rounded-full backdrop-blur-sm">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex 
                    ? 'border-white scale-110' 
                    : 'border-transparent hover:border-gray-400'
                }`}
              >
                <img
                  src={image.src}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-60 text-white/70 text-sm font-louis-george-cafe text-center">
          <p>Use arrow keys or click buttons to navigate • Press ESC to close</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGalleryModal;