import React, { useMemo, useCallback } from "react";
import MediaServiceCard from "../components/MediaServiceCard";
import { useNavigate } from "react-router-dom";

// Import media files
import graphicDesignVideo from "../assets/graphic-design.gif";
import videoEditingVideo from "../assets/video-editing.gif";
import animationVideo from "../assets/animation.gif";
import modelingVideo from "../assets/modeling.mp4";
import webDesignVideo from "../assets/web-design.gif";
import digitalMarketingVideo from "../assets/digital-marketing.gif";

export function Services() {
  const navigate = useNavigate();

  // Memoized services array
  const services = useMemo(
    () => [
      {
        title: "Graphic Designing",
        description: "Eye-catching designs for your brand.",
        media: graphicDesignVideo,
        link: "/graphic-design",
      },
      {
        title: "Video Editing",
        description: "Professional editing to tell your story.",
        media: videoEditingVideo,
        link: "/video-editing",
      },
      {
        title: "2D & 3D Animation",
        description: "Bring your ideas to life with animations.",
        media: animationVideo,
        link: "/animation",
      },
      {
        title: "3D Modeling",
        description: "Detailed models for various industries.",
        media: modelingVideo,
        link: "/3d-modeling",
      },
      {
        title: "Web Designing",
        description: "Responsive and modern websites.",
        media: webDesignVideo,
        link: "/web-development",
      },
      {
        title: "Digital Marketing",
        description: "Grow your business with strategic marketing.",
        media: digitalMarketingVideo,
        link: "/digital-marketing",
      },
    ],
    []
  );

  // Optimized navigation handler
  const handleNavigate = useCallback(
    (link) => {
      navigate(link);
    },
    [navigate]
  );

  return (
    <section className="container mx-auto px-8 py-16">
      {/* Header Section */}
      <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 leading-tight mb-6 drop-shadow-sm">
          SERVICES WE OFFER
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl">
          Transforming <span className="font-semibold text-orange-600">ideas</span> into
          impactful <span className="font-semibold text-orange-600">digital experiences</span>.
          At Creative Plus Studio, we craft solutions that inspire, engage, and
          deliver results.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleNavigate(service.link)}
            className="cursor-pointer"
          >
            <MediaServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
