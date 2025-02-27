import React, { memo, lazy, Suspense } from "react";
import ProfileCard from "../components/ProfileCard";

// Lazy load images for better performance
import NiteshImage from "../assets/NiteshKumar.png";
import AryanImage from "../assets/Aryan.png";
import VishalImage from "../assets/Vishalg.png";
import AmanImage from "../assets/Amansingh.png";


// Store team members outside to prevent unnecessary re-renders
const teamMembers = [
  {
    name: "Nitesh Kr. Sharma",
    role: "Founder & CEO",
    image: NiteshImage,
    bio: "Experience: 3+ Years in Digital Creativity",
  },
  {
    name: "Aryan Yadav",
    role: "Co-Founder & MD",
    image: AryanImage,
    bio: "Experience: 2+ Years in Digital Marketing",
  },
  {
    name: "Vishal Kr. Yadav",
    role: "Co-Founder & CFO",
    image: VishalImage,
    bio: "Experience: 3+ Years in Business Development",
  },
  {
    name: "Aman Singh",
    role: "COO & Project Manager",
    image: AmanImage,
    bio: "Experience: 2+ Years in Video Production",
  },
];

// Memoize ProfileCard to prevent unnecessary renders
const MemoizedProfileCard = memo(ProfileCard);

export function About() {
  return (
    <section className="container mx-auto px-4 md:px-10 lg:px-20 py-8" aria-labelledby="about-section">
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
              At <span className="font-semibold text-orange-500">Creative Plus Studio</span>, we specialize in providing
              top-notch Graphic Designing, Video Editing, Animation, Digital Marketing, and Web Development services.
              Our dedicated team of professionals is committed to delivering innovative and result-driven solutions that
              elevate your business to new heights.
            </p>
            <p className="mb-6">
              Founded in <span className="font-semibold text-orange-500">2023</span>, Creative Plus Studio has
              revolutionized the world of digital creativity. What started as a passion for design and storytelling has
              now grown into a full-service creative agency.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <h3 className="text-4xl font-extrabold text-orange-500 text-center mb-10">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-10">
          <Suspense fallback={<div>Loading team...</div>}>
            {teamMembers.map((member, index) => (
              <MemoizedProfileCard key={index} member={member} />
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}
