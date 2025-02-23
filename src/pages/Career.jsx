import React from "react";

export function Career() {
  return (
    <section className="container mx-auto p-8" aria-labelledby="career-section">
      {/* Career Section */}
      <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h2 id="career-section" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight mb-4">
              Join Our Creative Team!
            </h2>
          </div>
          <div className="text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="mb-6">
              At <span className="font-semibold text-orange-500">Creative Plus Studio</span>, we believe in innovation, creativity, and pushing boundaries. 
              If you're passionate about Graphic Design, Video Editing, Animation, Digital Marketing, or Web Development, we’d love to have you on board!
            </p>
          </div>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="py-16 px-6 sm:px-10">
        <h3 className="text-4xl font-extrabold text-orange-500 text-center mb-10">
          Current Openings
        </h3>
        <div className="max-w-4xl mx-auto grid gap-8">
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold text-orange-500">Graphic Designer</h4>
            <p className="text-gray-700 mt-2">Looking for a creative individual proficient in Adobe Photoshop, Illustrator, and Figma.</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Apply Now</button>
          </div>
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold text-orange-500">Video Editor</h4>
            <p className="text-gray-700 mt-2">Seeking an expert in Adobe Premiere Pro and After Effects for high-quality video production.</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Apply Now</button>
          </div>
          <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="text-2xl font-semibold text-orange-500">Web Developer</h4>
            <p className="text-gray-700 mt-2">Hiring a skilled developer with experience in React, Tailwind CSS, and modern web technologies.</p>
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}