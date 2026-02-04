import React, { useState, useEffect, useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { ref: imageRef, isInView } = useFadeInOnScroll();

  const testimonials = [
    {
      text: "We are unpacking gradually now. Very happy with everything. <3 <3 <3. Thank you for your team/’s great work. I noticed the carpentry quality of your company is excellent. Very detail and meticulous.",
      author: "Ellie",
      position: "Bukit Jalil",
      image: "/Voala/ProjectSource/Signature-Projects/Rimba/RimbaInfo/1.jpg"
    },
    {
      text: "Yes big pleasure and very happy with the outcome (-: . As well as the journey! Anna was especially helpful - answering all our questions almost anytime of the day. :P",
      author: "Lewis",
      position: "Mont Kiara",
      image: "/Voala/ProjectSource/Signature-Projects/Rimba/RimbaInfo/1.jpg"
    },
    {
      text: "Thanks so much once again for making my home a heaven! Not only the design is good, it is also very functional! Super well done once again. Let’s catch up again next month when I am back. <3 SUPER GRATEFUL AND THANKFUL! Voala is the SUPER BEST!!! Love you all!!! <3",
      author: "Susan",
      position: "Bukit Jalil",
      image: "/Voala/ProjectSource/Signature-Projects/Rimba/RimbaInfo/1.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-linik gradient-highlight">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-linik">
            Hear from our satisfied clients about their experience with Voala Interior
          </p>
        </div>
        
        <div ref={carouselRef} className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 bg-white p-12 text-center">
                  <Quote size={48} className="text-black mx-auto mb-6" />
                  <blockquote className="text-2xl text-black leading-relaxed mb-8 italic font-linik">
                    "{testimonial.text.split(' ').map((word, i) => {
                      const highlightWords = ['impressed', 'flawless', 'detail', 'exceeded', 'impeccable', 'unforgettable'];
                      return highlightWords.includes(word.toLowerCase().replace(/[.,]/g, '')) ? 
                        <span key={i} className="gradient-highlight">{word} </span> : 
                        <span key={i}>{word} </span>
                    })}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <p className="font-bold text-black font-linik gradient-highlight">{testimonial.author}</p>
                      <p className="text-gray-600 font-linik">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black hover:bg-gray-800 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;