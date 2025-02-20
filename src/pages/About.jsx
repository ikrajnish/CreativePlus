import React, { Suspense } from "react";
import VishalImage from "../assets/a.jpg";
import NitishImage from "../assets/b.jpg";
import AmanImage from "../assets/c.jpg";
import KananImage from "../assets/d.jpg";

const ProfileCard = React.lazy(() => import("../components/ProfileCard"));

export function About() {
  const teamMembers = [
    {
      name: "Vishal Kumar Yadav",
      role: "Founder",
      image: VishalImage,
      bio: "Passionate about creating cutting-edge web solutions and leading the vision of CreativePlusStudio."
    },
    {
      name: "Nitish Kumar",
      role: "Graphic Designer",
      image: NitishImage,
      bio: "Expert in crafting stunning visuals that captivate and communicate effectively."
    },
    {
      name: "Aman Verma",
      role: "Video Editor & Animator",
      image: AmanImage,
      bio: "Bringing stories to life with professional video editing and dynamic animations."
    }
  ];

  return (
    <section className="container mx-auto p-8" aria-labelledby="about-section">
      {/* About Us Section */}
      <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 id="about-section" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight mb-4">
              ABOUT US
            </h2>
          </div>
          <div className="text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="mb-6">
              At <span className="font-semibold text-orange-500">Creative Plus Studio</span>, we specialize in providing top-notch Graphic Designing, Video Editing, Animation, Digital Marketing, and Web Development services. Our dedicated team of professionals is committed to delivering innovative and result-driven solutions that elevate your business to new heights.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
  <h3 className="text-4xl font-extrabold text-orange-500 text-center mb-10">
    Meet Our Team
  </h3>
  <Suspense fallback={<div className="text-center text-orange-500">Loading Team...</div>}>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-auto-fit gap-8 px-6 sm:px-10">
      {teamMembers.map((member, index) => (
        <ProfileCard key={index} member={member} className="transition-transform duration-300 hover:scale-105" />
      ))}
    </div>
  </Suspense>
</div>
    </section>
  );
}
