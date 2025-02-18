import React from "react";
import ProfileCard from "../components/ProfileCard"; 
import A from "../assets/a.jpg"
import B from "../assets/b.jpg"
import C from "../assets/c.jpg"
import D from "../assets/d.jpg"


export function About() {
  const teamMembers = [
    {
      name: "Vishal Kumar Yadav",
      role: "Founder",
      image: A,
      bio: "Passionate about creating cutting-edge web solutions and leading the vision of CreativePlusStudio."
    },
    {
      name: "Nitish Kumar",
      role: "Graphic Designer",
      image: B,
      bio: "Expert in crafting stunning visuals that captivate and communicate effectively."
    },
    {
      name: "Aman Verma",
      role: "Video Editor & Animator",
      image: C,
      bio: "Bringing stories to life with professional video editing and dynamic animations."
    },
    {
      name: "Kanan Verma",
      role: "Digital Marketing Specialist",
      image: D,
      bio: "Strategizing effective marketing campaigns to grow our clients' online presence."
    }
  ];

  return (
    <section className="container mx-auto p-8" aria-labelledby="about-section">
      {/* About Us Section */}
      <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h3
              id="about-section"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight mb-4"
            >
              ABOUT US
            </h3>
          </div>

          {/* Right Column */}
          <div className="text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="mb-6">
              At <span className="font-semibold text-orange-500">Creative Plus Studio</span>, we specialize in providing top-notch Graphic Designing, Video Editing, Animation, Digital Marketing, and Web Development services. Our dedicated team of professionals is committed to delivering innovative and result-driven solutions that elevate your business to new heights.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h3 className="text-3xl font-bold text-slate-700 text-center mb-8">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ProfileCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
