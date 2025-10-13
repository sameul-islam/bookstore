import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(scrolled);
    setVisible(scrollTop > 300);
  };

  const scrollToTopProgress = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTopProgress}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full flex justify-center items-center
                     bg-[#4b6584] shadow-2xl hover:scale-110 hover:rotate-y-180 transition-transform duration-300"
          aria-label="Scroll to top"
        >
          {/* Glow Circular Progress */}
          <svg className="absolute -top-1 -left-1 w-12 h-12" viewBox="0 0 64 64">
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="#d1d8e0"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="32"
              cy="32"
              r={radius}
              stroke="#fa8231"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 32 32)"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>

          {/* Arrow Icon */}
          <FaArrowUp className="text-amber-600 w-4 h-8 relative z-10 drop-shadow-lg animate-bounce-slow" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;







// before:absolute before:w-12 before:h-12 before:rounded-full before:animate-ping
// before:bg-gradient-to-r before:from-purple-600 before:via-pink-600 before:to-red-800 before:opacity-40