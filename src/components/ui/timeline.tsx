"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import VoalaIntroGallery from "../VoalaIntroGallery";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans"
      style={{ paddingTop: '10px', paddingBottom: '10px' }}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div ref={ref} className="relative pb-10 md:pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-start pt-10 md:pt-20 lg:pt-10 gap-2 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-start md:items-center top-20 md:top-40 self-start w-12 md:w-1/3 -ml-4 md:ml-4">
                <div className="h-8 md:h-10 absolute -left-4 md:left-3 w-8 md:w-10 rounded-full bg-white flex items-center justify-center hidden">
                  <div className="h-3 md:h-4 w-3 md:w-4 rounded-full bg-black border border-gray-300 p-1 md:p-2" />
                </div>
                <h3 className="hidden md:block text-lg md:text-xl lg:text-5xl font-bold text-black font-linik pl-16 lg:pl-20">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-[calc(100%-3rem)] md:w-2/3 md:pr-4 ml-12 md:ml-0">
                <div>
                <h3 className="md:hidden block text-xl md:text-2xl mb-4 text-left font-bold text-black font-linik">
                  {item.title}
                </h3>
                <div className="w-full">
                  {item.content}
                </div>
                </div>
              </div>
            </div>
          ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute -eft-4 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-black via-gray-600 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
        </div>
      </div>
    </div>
  );
};