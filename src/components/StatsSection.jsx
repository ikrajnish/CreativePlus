import React, { useEffect, useState } from "react";

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(document.getElementById("stats-section"));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; 
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isVisible, end]);

  return <>{count}</>;
};

export function StatsSection() {
  return (
    <section className="py-12 px-6 md:px-20 lg:px-40" id="stats-section" aria-labelledby="stats-section">
      <h2 className="sr-only">Key statistics about our achievements</h2>
      <div className="flex flex-col md:flex-row justify-around items-center text-center space-y-8 md:space-y-0">
        <div className="transform transition-transform duration-300 hover:scale-105" aria-labelledby="clients-served">
          <h3 className="text-4xl md:text-5xl font-bold text-orange-600">
            <CountUp end={300} />+
          </h3>
          <p className="text-gray-700 text-lg mt-2">Clients We Served</p>
        </div>
        <div className="hidden md:block h-16 border-l border-gray-300 mx-6"></div>
        <div className="transform transition-transform duration-300 hover:scale-105" aria-labelledby="projects-completed">
          <h3 className="text-4xl md:text-5xl font-bold text-orange-600">
            <CountUp end={800} />+
          </h3>
          <p className="text-gray-700 text-lg mt-2">Projects Completed</p>
        </div>
        <div className="hidden md:block h-16 border-l border-gray-300 mx-6"></div>
        <div className="transform transition-transform duration-300 hover:scale-105" aria-labelledby="years-of-experience">
          <h3 className="text-4xl md:text-5xl font-bold text-orange-600">
            <CountUp end={5} />+
          </h3>
          <p className="text-gray-700 text-lg mt-2">Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
