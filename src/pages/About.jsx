import React, { memo } from "react";
import ProfileCard from "../components/ProfileCard";

// Founder Image
import NiteshImage from "../assets/NiteshKumar.png";

export function About() {
  return (
    <section
      className="container mx-auto px-4 md:px-10 lg:px-20 py-8"
      aria-labelledby="about-section"
    >
      {/* About Us Section */}
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2
              id="about-section"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight mb-4"
            >
              ABOUT US
            </h2>
          </div>
          <div className="text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="mb-6">
              At{" "}
              <span className="font-semibold text-orange-500">
                Creative Plus Studio
              </span>
              , we specialize in providing top-notch Graphic Designing, Video
              Editing, Animation, Digital Marketing, and Web Development
              services. Our dedicated team of professionals is committed to
              delivering innovative and result-driven solutions that elevate
              your business to new heights.
            </p>
            <p className="mb-6">
              Founded in{" "}
              <span className="font-semibold text-orange-500">2023</span>,
              Creative Plus Studio has revolutionized the world of digital
              creativity. What started as a passion for design and storytelling
              has now grown into a full-service creative agency.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="py-16">
        <h3 className="text-4xl font-extrabold text-orange-500 text-center mb-10">
          Meet Our Founder
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image on Left */}
          <div className="flex justify-center">
            <img
              src={NiteshImage}
              alt="Founder - Nitesh Kr. Sharma"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Description on Right */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold text-slate-800 mb-2">
              Nitesh Kr. Sharma
            </h4>
            <p className="text-orange-500 font-semibold text-lg mb-4">
              Founder & CEO
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
              With over 3 years of experience in digital creativity, Nitesh has
              been at the forefront of driving innovation in design,
              storytelling, and business growth.
            </p>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              He believes in blending creativity with strategy to craft impactful
              solutions that empower businesses in today’s fast-paced digital
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
