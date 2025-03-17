import React, { useMemo, useCallback } from "react";
import MediaServiceCard from "../components/MediaServiceCard";
import { useNavigate } from "react-router-dom";

// Import media files
import graphicDesignVideo from '../assets/graphic-design.gif';
import videoEditingVideo from '../assets/video-editing.gif';
import animationVideo from '../assets/animation.gif';
import modeling from "../assets/Modeling.gif";
import webDesignVideo from '../assets/web-design.gif';
import digitalMarketingVideo from '../assets/digital-marketing.gif';

export function Services() {
  const navigate = useNavigate();

  // Memoized services array to prevent unnecessary re-creations
  const services = useMemo(() => [
    { title: 'Graphic Designing', description: 'Eye-catching designs for your brand.', media: graphicDesignVideo, link: "/graphic-design" },
    { title: 'Video Editing', description: 'Professional editing to tell your story.', media: videoEditingVideo, link: "/video-editing" },
    { title: '2D & 3D Animation', description: 'Bring your ideas to life with animations.', media: animationVideo, link: "/animation" },
    { title: '3D Modeling', description: 'Detailed models for various industries.', media: modeling, link: "/3d-modeling" },
    { title: 'Web Designing', description: 'Responsive and modern websites.', media: webDesignVideo, link: "/web-development" },
    { title: 'Digital Marketing', description: 'Grow your business with strategic marketing.', media: digitalMarketingVideo, link: "/digital-marketing" }
  ], []);

  // Optimized navigation handler
  const handleNavigate = useCallback((link) => {
    navigate(link);
  }, [navigate]);

  return (
    <section className="container mx-auto px-8 py-16">
      <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 leading-tight mb-6">
              SERVICES WE OFFER
            </h1>
          </div>
          <div className="text-gray-600 text-base sm:text-lg leading-relaxed">
            <p className="mb-6">
              At Creative Plus Studio, we bring your ideas to life with cutting-edge design and digital solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} onClick={() => handleNavigate(service.link)} className="cursor-pointer">
            <MediaServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
