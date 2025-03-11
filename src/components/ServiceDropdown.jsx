import React from "react";
import { Link } from "react-router-dom";

export function ServiceDropdown({ onMouseEnter, onMouseLeave, onItemClick }) {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white shadow-lg border border-gray-200 p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm overflow-y-auto max-h-[80vh]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {[
        {
          title: "Graphic Design",
          link: "/graphic-design",
          items: [
            "Logo Design",
            "Brand Identity Design",
            "Print Design",
            "Web UI Design",
            "Packaging Design",
            "Social Media Graphics",
            "Merchandise Design",
            "E-book & Presentation Design",
            "Digital Marketing Graphic",
            "Typography & Custom arts",
          ],
        },
        {
          title: "2D Animation",
          link: "/animation",
          items: [
            "Explainers",
            "Promos",
            "Infographics",
            "2D Logos",
            "Cartoons",
            "Product Animations",
            "Characters",
            "Motion Graphics",
            "Storytelling",
          ],
        },
        {
          title: "Video Editing",
          link: "/video-editing",
          items: [
            "Captions & Subtitles",
            "Documentary & Storytelling",
            "Events & Wedding Videos",
            "Motion Graphics & 3D Elements",
            "Color Correction & Grading",
            "Visual Effects (VFX) & Motion Tracking",
            "Sound Design, Editing & SFX",
            "Background Music & Noise Reduction",
            "Green Screen (Chroma Keying)",
            "Ads & Promotional Videos"
        ]
        
        },
        {
          title: "3D Modeling",
          link: "/3d-modeling",
          "items": [
            "Characters",
            "Architectural Visualization",
            "Texturing & Lighting",
            "Rigging & Animation",
            "Simulation & VFX",
            "Environment Modeling"
        ],
        },
        {
          title: "Digital Marketing",
          link: "/digital-marketing",
          "items": [
              "Google Ads",
              "Email Marketing",
              "Affiliate & Influencer Marketing",
              "Conversion Rate Optimization (CRO)",
              "Blogging & SEO Content",
              "Video Marketing",
              "Infographics & Ebooks"
          ]

        },
        {
          title: "Website Development",
          link: "/web-development",
          items: [
            "Responsive Design",
            "Frontend Development",
            "Backend Development",
            "Full Stack Solutions",
            "E-commerce",
            "CMS Integration",
            "API Development",
          ],
        },
      ].map((service, idx) => (
        <div key={idx}>
          <h4 className="font-bold text-orange-500 mb-2">
            <Link to={service.link} onClick={onItemClick}>
              {service.title}
            </Link>
          </h4>
          <ul className="space-y-1 text-gray-700" onClick={onItemClick}>
            {service.items.map((item, i) => (
              <li key={i}>
                <Link to={service.link}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}