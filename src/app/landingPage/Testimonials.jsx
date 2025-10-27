import React, { useState, useEffect } from "react";
import hemanth from "../../assets/Wilson.jpg";
import prachit from "../../assets/athel.gif";
import smit from "../../assets/gurham.gif";

const testimonials = [
  {
    id: 1,
    name: "Wilson Lam Wee Shen",
    image: hemanth, // Placeholder; replace with correct image if needed
    text: 'The FASS Scholarship made my fulfilling academic journey possible, especially with my father as the sole breadwinner. It allowed me to pursue my honours thesis and gain valuable internships with service agencies. I am grateful for this gift of education, which enabled my dream of a civil service career upon graduation.',
    meta: "FASS Scholarship Recipient in AY2017",
    course: "Political Science Major",
  },
  {
    id: 2,
    name: "Athel Hu",
    image: prachit, // Placeholder; replace with correct image if needed
    text: 'Receiving bursary support motivated me to study harder and succeed, even while caring for my mum. Today, I largely contribute back to the gift funds, and mentor to establish a bursary for students. My hope helps other students, is giving back to society is my constant motivation to strive in life.',
    meta: "FASS bursary recipient in AY2007",
    course: "Sociology Major",
  },
  {
    id: 3,
    name: "Gurshan Singh",
    image: smit, // Placeholder; replace with correct image if needed
    text: 'I lost my father to a sudden heart attack in 2010 and as the eldest of four children has a lot depending on my success. My mother, who isn’t in good health works as a kitchen helper. This bursary is what my wife, it gives me peace of mind that will not be caught out by a sudden expenditure.',
    meta: "Bursary award recipient in AY2020",
    course: "Political Science Major",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  // Reset expanded state when testimonial changes
  useEffect(() => {
    setIsExpanded(false);
  }, [activeIndex]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section className="relative h-full sm:h-auto pt-10 pb-0 md:pb-20 md:pt-0 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"
        style={{ filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-30 translate-x-1/2 translate-y-1/2"
        style={{ filter: "blur(60px)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Hear From Our Students
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our students achieved their academic dreams with our
            support and guidance
          </p>
        </div>

        <div className="relative py-0 sm:py-28 w-full max-w-6xl mx-auto pb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`px-5 w-full transition-all duration-500 ease-in-out ${
                index === activeIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-full"
              } ${
                isMobile 
                  ? index === activeIndex ? "relative block" : "hidden" 
                  : "absolute"
              }`}
              style={
                isMobile
                  ? {}
                  : {
                      transform: `translate(${(index - activeIndex) * 100}%, -50%)`,
                      top: '50%',
                    }
              }
            >
              <div className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden mb-4">
                <div className="flex flex-col md:flex-row items-center gap-8 p-8">
                  <div className="relative group">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}'s testimonial`}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 drop-shadow-lg border backdrop-blur-sm rounded-2xl transform -rotate-12 transition-transform duration-300 group-hover:rotate-0" />
                    <svg
                      className="absolute top-4 right-4 w-8 h-8 text-white/80"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 21C3 16.5 6.5 13 11 13V7C5.5 7 1 11.5 1 17V21H3ZM13 21C13 16.5 16.5 13 21 13V7C15.5 7 11 11.5 11 17V21H13Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#1e1b4b]">
                        {testimonial.name}
                      </h3>
                      <div className="flex flex-col md:flex-row gap-2 text-sm text-blue-500 font-medium">
                        <span>{testimonial.meta}</span>
                        <span className="hidden md:block">•</span>
                        <span>{testimonial.course}</span>
                      </div>
                      <div>
                        <p
                          className={`text-gray-600 leading-relaxed text-lg md:line-clamp-none ${
                            isExpanded ? "" : "line-clamp-4 md:line-clamp-none"
                          }`}
                        >
                          "{testimonial.text}"
                        </p>
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="md:hidden text-blue-500 font-medium mt-2 hover:text-blue-600 transition-colors duration-200"
                        >
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full bg-white/80 backdrop-blur-sm hover:bg-white text-blue-500 p-3 sm:p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-10"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-4 w-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full bg-white/80 backdrop-blur-sm hover:bg-white text-blue-500 p-3 sm:p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 z-10"
            aria-label="Next testimonial"
          >
            <svg
              className="h-4 w-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Enhanced navigation dots */}
        <div className="hidden sm:flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-blue-500 w-6"
                  : "bg-blue-500/40 hover:bg-blue-500/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
