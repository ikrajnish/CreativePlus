import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import BackgroundVideo from '../assets/background2.mp4';
import { Services } from "./Services";
import { About } from "./About";
import { Contact } from "./Contact";
import { Button } from "../components/Button";
import { RepresentationSection } from "../components/RepresentationSection";
import { StatsSection } from "../components/StatsSection";

export function Home() {
  const services = [
    { name: "Creative Digital Services", description: "Innovative and result-driven solutions to take your business to the next level." },
    { name: "Graphic Designing", description: "Stunning visuals and creative graphics that captivate your audience." },
    { name: "Video Editing", description: "Professional video editing to bring your ideas to life with precision." },
    { name: "2D & 3D Animation", description: "Dynamic animations that engage and entertain your viewers." },
    { name: "3D Modeling", description: "High-quality 3D models to visualize and enhance your projects." },
    { name: "Web Designing", description: "Responsive and modern web designs that make an impact online." },
    { name: "Digital Marketing", description: "Effective marketing strategies to grow your online presence." }
  ];

  const [currentService, setCurrentService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-700" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <section className="relative h-screen overflow-hidden" id="home">
        <video 
          src={BackgroundVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900 bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Welcome to Creative Plus Studio.
          </h1>
          <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-center">
            Where Innovation Meets Excellence!
          </h3>

          <AnimatePresence mode="wait">
            <motion.h2
              key={services[currentService].name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-orange-400"
            >
              {services[currentService].name}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={services[currentService].description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300"
            >
              {services[currentService].description}
            </motion.p>
          </AnimatePresence>

          <Button 
            text="Get in Touch" 
            onClick={() => navigate('/contact')}  
          />
        </div>
      </section>

      <motion.section id="services" className="py-16 px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Services />
      </motion.section>

      <motion.section id="representation" className="py-16 px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <RepresentationSection/>
      </motion.section>

      <motion.section id="stats" className="py-16 px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <StatsSection/>
      </motion.section>

      {/* <motion.section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Portfolio />
      </motion.section> */}

      <motion.section id="about" className="py-16 px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <About />
      </motion.section>

      <motion.section id="contact" className="py-16 px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <Contact />
      </motion.section>

    </div>
  );
}

export default Home;
