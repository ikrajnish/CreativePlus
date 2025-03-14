import React, { useEffect, useState, useRef } from "react";

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const increment = Math.ceil(end / (duration / stepTime));

    const animate = () => {
      setCount((prev) => {
        const nextValue = prev + increment;
        return nextValue >= end ? end : nextValue;
      });

      if (count < end) {
        setTimeout(animate, stepTime);
      }
    };

    animate();
  }, [isVisible, end]);

  return <span ref={ref} aria-live="polite">{count}</span>;
};

export function StatsSection() {
  return (
    <section
      className="w-full max-w-[85rem] mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24 lg:py-28 overflow-hidden"
      id="stats-section"
      aria-labelledby="stats-section"
    >
      <h2 className="sr-only">Key statistics about our achievements</h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-center text-center space-y-12 md:space-y-0 md:space-x-16">
        
        {[ 
          { end: 300, label: "Clients We Served" },
          { end: 800, label: "Projects Completed" },
          { end: 5, label: "Years of Experience" }
        ].map((stat, index) => (
          <div key={index} className="w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-4xl md:text-5xl font-bold text-orange-600">
              <CountUp end={stat.end} />+
            </h3>
            <p className="text-gray-700 text-lg mt-4">{stat.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
