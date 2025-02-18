import React from "react";
import { Link } from "react-router-dom"; 

export function ServiceDropdown({ onMouseEnter, onMouseLeave }) {
  return (
    <div 
      className="absolute left-1/ transform -translate-x-1/2 mt-2 w-screen h-screen md:w-xl h-3xl lg:w-4xl h-xl bg-white shadow-lg border border-gray-200 p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm overflow-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {[
        { title: "Graphic Design", link: "/graphic-design", items: ["Logo Design", "Branding", "Brochure/Flyer", "Catalog", "Packaging", "Business Card", "UI/UX", "Book Cover", "Infographics"] },
        { title: "2D Animation", link: "/animation", items: ["Explainers", "Promos", "Infographics", "2D Logos", "Cartoons","Product Animations", "Characters", "Motion Graphics", "Storytelling"] },
        { title: "Video Editing", link: "/video-editing", items: ["Captions", "Documentary", "Events", "Storytelling", "Motion Graphics", "Wedding Videos"] },
        { title: "3D Modeling", link: "/3d-modeling", items: ["Characters", "Products", "Interiors", "Vehicles", "Sculpting"] },
        { title: "Digital Marketing", link: "/digital-marketing", items: ["Google Ads", "SEO", "Social Media", "Content Creation", "Email Marketing"] },
        { title: "Website Development", link: "/web-development", items: ["Responsive Design", "Frontend Development", "Backend Development", "Full Stack Solutions", "E-commerce", "CMS Integration", "API Development"] },
      ].map((service, idx) => (
        <div key={idx}>
          <h4 className="font-bold text-orange-500 mb-2">
            <Link to={service.link}>{service.title}</Link>
          </h4>
          <ul className="space-y-1 text-gray-700">
            {service.items.map((item, i) => (
              <li key={i}><Link to={service.link}>{item}</Link></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
