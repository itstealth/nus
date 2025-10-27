import React, { useEffect, useState, useRef } from "react";
import aboutBg from "../../assets/nus-building.jpg";

const About = () => {
  // State for counting numbers
  const [years, setYears] = useState(0);
  const [universities, setUniversities] = useState(0);
  const [students, setStudents] = useState(0);
  const [leaders, setLeaders] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // New state for visibility
  const statsRef = useRef(null); // Ref for the stats section

  useEffect(() => {
    // Intersection Observer to detect when the stats section is in the viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      });
    });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Counting effect
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animateNumbers = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setYears(Math.floor(progress * 9647)); // 9647+
        setUniversities(Math.floor(progress * 8277)); // 8277+
        setStudents(Math.floor(progress * 425)); // 10k+
        setLeaders(Math.floor(progress * 200000)); // 200k+
        if (progress < 1) {
          requestAnimationFrame(animateNumbers);
        }
      };

      requestAnimationFrame(animateNumbers);
    }
  }, [isVisible]);

  return (
    <div className="relative mx-auto max-w-7xl w-full bg-gradient-to-br overflow-hidden flex justify-center items-center py-12 sm:py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main container */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-14 h-full">
          {/* Text content */}
          <div className="w-full md:w-1/2 animate-fade-in-left">
            <div className="bg-gradient-to-br from-[#1B4B79] to-[#2A69A3] text-white p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group hover:shadow-blue-200/50 transition-shadow duration-300">
              {/* Decorative pattern */}
              <div className="absolute brightness-75 inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,white_25%,white_50%,transparent_50%,transparent_75%,white_75%,white_100%)] bg-[length:20px_20px]"></div>

              <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text">
                About <span className="text-blue-100">NUS-ISS</span>
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-blue-50 mb-8">
                NUS-ISS offers a wide spectrum of programmes in critical
                industry disciplines, such as digital leadership, software
                development, data science, artificial intelligence,
                cybersecurity, product management, smart health and digital
                innovation.
              </p>

              <p className="text-base md:text-lg sm:block hidden leading-relaxed text-blue-50 mb-8">
                NUS-ISS also works with industry partners and associations
                locally and globally to co-create a digital learning ecosystem
                that inspires and shapes solutions for the digital economy.
              </p>

              {/* Stats section */}
              <div
                ref={statsRef}
                className="grid sm:grid-cols-4 grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/20"
              >
                <div className="text-center">
                  <div className="font-bold sm:text-2xl text-xl text-blue-100">
                    {leaders}
                  </div>
                  <div className="text-sm text-blue-50">
                    Digital Leaders & Professionals
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold sm:text-2xl text-xl text-blue-100">
                    {years}
                  </div>
                  <div className="text-sm text-blue-50">
                    Corporate Clients & Organisations
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold sm:text-2xl text-xl text-blue-100">
                    {universities}
                  </div>
                  <div className="text-sm text-blue-50">Programmes Alumni</div>
                </div>
                <div className="text-center">
                  <div className="font-bold sm:text-2xl text-xl text-blue-100">
                    {students}
                  </div>
                  <div className="text-sm text-blue-50">
                    Industry Seminars & Workshops
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image container */}
          <div className="w-full md:w-1/2 animate-fade-in-right">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
              <img
                src={aboutBg}
                alt="Students studying in a modern university campus"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Floating badges */}
              <div className="absolute -left-4 top-10 bg-white p-4 rounded-2xl shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="absolute -right-4 top-1/3 bg-white p-4 rounded-2xl shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="absolute left-1/4 -bottom-4 bg-white p-4 rounded-2xl shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
