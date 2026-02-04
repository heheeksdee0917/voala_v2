"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === loadedImages.length ? 0 : prevIndex + 1
    );
  }, [loadedImages.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? loadedImages.length - 1 : prevIndex - 1
    );
  }, [loadedImages.length]);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      console.log("Starting to load images:", images);
      
      const loadPromises = images.map((image) => {
        return new Promise<string | null>((resolve) => {
          const img = new Image();
          img.src = image;
          img.onload = () => {
            console.log(`✅ Image loaded successfully: ${image}`);
            resolve(image);
          };
          img.onerror = () => {
            console.warn(`❌ Failed to load image: ${image}`);
            resolve(null);
          };
        });
      });

      try {
        const results = await Promise.all(loadPromises);
        const validImages = results.filter(image => image !== null) as string[];
        console.log("✅ Valid images loaded:", validImages.length, "out of", images.length);
        setLoadedImages(validImages);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    };

    if (images.length > 0) {
      loadImages();
    }
  }, [images]);

  useEffect(() => {
    if (loading || loadedImages.length === 0) {
      console.log("⏳ Skipping autoplay setup - loading:", loading, "images:", loadedImages.length);
      return;
    }

    console.log("🎬 Setting up autoplay and keyboard controls");

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        console.log("🔄 Auto-advancing to next image");
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious, loading, loadedImages.length]);

  const areImagesLoaded = !loading && loadedImages.length > 0;

  console.log("🎨 Render state:", {
    areImagesLoaded,
    currentIndex,
    totalImages: loadedImages.length,
    loading
  });

  if (loading) {
    return (
      <div
        className={cn(
          "overflow-hidden h-full w-full relative flex items-center justify-center",
          className
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black"></div>
          <p className="ml-4 text-black font-louis-george-cafe">Loading...</p>
        </div>
      </div>
    );
  }

  if (!areImagesLoaded) {
    return (
      <div
        className={cn(
          "overflow-hidden h-full w-full relative flex items-center justify-center",
          className
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-50">
          <p className="text-white font-louis-george-cafe">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Children content (text overlay) */}
      <div className="relative z-30">
        {children}
      </div>
      
      {/* Overlay */}
      {overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-20", overlayClassName)}
        />
      )}

      {/* Animated Images */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: `url(${loadedImages[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </AnimatePresence>
    </div>
  );
};