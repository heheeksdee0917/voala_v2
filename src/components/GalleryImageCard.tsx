import React, { useState } from 'react';

interface GalleryImageCardProps {
  imageSrc: string;
  onClick: () => void;
}

const GalleryImageCard: React.FC<GalleryImageCardProps> = ({ imageSrc, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {/* Loading skeleton - show until image loads or errors */}
      {!imageLoaded && !imageError && (
        <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-500 text-sm font-linik">Loading...</span>
          </div>
        </div>
      )}
      
      {/* Error state */}
      {imageError && (
        <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-400 text-sm font-linik">Failed to load image</div>
          </div>
        </div>
      )}
      
      {/* Actual image - always render but control visibility */}
      <img
        src={imageSrc}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        className={`w-full h-64 object-cover object-center transition-all duration-500 ease-out group-hover:scale-110 ${
          imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Hover overlay - only show when image is loaded and no error */}
      {imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-center justify-center">
          <div className="text-white text-sm font-linik bg-black/50 px-3 py-1 rounded-full">
            Click to view
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImageCard;