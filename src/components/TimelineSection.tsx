import React, { memo } from 'react';
import { Timeline } from './ui/timeline';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const ServiceImage: React.FC<{ src: string; alt: string; className?: string }> = memo(({ 
  src, 
  alt, 
  className = "rounded-lg shadow-xl w-full h-64" 
}) => {
  const { ref: imageRef, isInView } = useFadeInOnScroll();

  return (
    <div
      ref={imageRef as React.RefObject<HTMLImageElement>}
      className={`${className} ${isInView ? 'fadeInUpAnimated' : 'fadeInUpTrigger'}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
});

ServiceImage.displayName = 'ServiceImage';

const TimelineSection: React.FC = () => {
  const servicesData = [
    {
      title: "Planning & Consultation",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed font-linik">
            Our comprehensive planning phase ensures your project starts on solid ground. We conduct thorough site analysis, 
            space optimization studies, and regulatory compliance reviews to establish the perfect foundation for your vision.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Comprehensive site analysis and space assessment</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Regulatory compliance and permit coordination</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Budget planning and timeline development</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ServiceImage
              src="/Voala/1.avif"
              alt="Planning and consultation process"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Bespoke Interior Design",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed font-linik">
            Transform your vision into reality with our bespoke design services. We create personalized concepts, select premium materials, and provide photorealistic 3D visualizations that bring every detail to life.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Personalized design concepts and mood boards</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Premium material selection and sourcing</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Photorealistic 3D visualization and renderings</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ServiceImage
              src="/Voala/2.avif"
              alt="Custom interior design process"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Professional Fit-Out",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed font-linik">
            Our professional fit-out services combine quality craftsmanship with precise project management. 
            We coordinate all vendors and trades to deliver exceptional results on schedule and within budget.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Quality craftsmanship and construction management</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Vendor coordination and trade supervision</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Timeline management and quality control</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ServiceImage
              src="/Voala/3.avif"
              alt="Professional fit-out construction"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Luxury Styling & Finishing",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed font-linik">
            The final touches that transform spaces into extraordinary experiences. Our luxury styling services include 
            precise furniture placement, curated art selection, and premium accessory coordination.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Precise furniture placement and arrangement</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Curated art selection and installation</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Premium accessory coordination and styling</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ServiceImage
              src="/Voala/4.avif"
              alt="Luxury styling and finishing touches"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div style={{ paddingTop: '0px', paddingBottom: '0px' }}>
      <Timeline data={servicesData} />
    </div>
  );
};

export default TimelineSection;