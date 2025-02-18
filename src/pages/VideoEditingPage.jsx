import React from "react";
import { Button } from "../components/Button"; 
import videoEditingVideo from '../assets/video-editing.gif';

export function VideoEditingPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">Video Editing Services</h1>
        <p className="text-lg text-slate-700">
          Transform your raw footage into captivating content with our expert video editing services.
        </p>
      </section>

      {/* Video Editing Overview Section */}
      <section className="py-12 bg-orange-50 transition-all duration-500 ease-in-out hover:bg-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">What We Do</h2>
          <p className="text-lg text-slate-700 mb-6">
            At CreativePlusStudio, we specialize in transforming your footage into engaging, polished, and visually appealing videos. Whether you’re creating content for social media, advertisements, films, or YouTube, we provide top-notch video editing services tailored to your needs.
          </p>
          <p className="text-lg text-slate-700">
            Our skilled editors use advanced tools and techniques to enhance your videos with perfect cuts, transitions, color grading, sound design, and more.
          </p>
        </div>
      </section>

      {/* Video Editing Services Section */}
      <section className="py-12 transition-all duration-500 ease-in-out hover:bg-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Our Video Editing Services Include:</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg text-slate-700">
            <li><strong>Social Media Video Editing:</strong> Editing videos for platforms like Instagram, Facebook, YouTube, and TikTok to engage your audience.</li>
            <li><strong>Commercials and Advertisements:</strong> Creating polished and compelling video ads to boost your business or brand visibility.</li>
            <li><strong>Music Video Editing:</strong> Crafting dynamic and creative music videos that tell a visual story aligned with the music.</li>
            <li><strong>Corporate Videos:</strong> Editing professional videos for businesses, including presentations, promotional videos, and client testimonials.</li>
            <li><strong>Vlogs and Documentaries:</strong> Editing personal stories and documentaries to bring your narrative to life with seamless transitions and impactful visuals.</li>
          </ul>
        </div>
      </section>

      {/* Image Section with Smooth Transition */}
      <section className="py-12 bg-orange-100 transition-all duration-500 ease-in-out hover:bg-orange-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Visual Experience</h2>
          <div className="flex justify-center space-x-8">
            <img
              src={videoEditingVideo}
              alt="Video Editing Sample 1"
              className="w-1/3 h-auto object-cover rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105"
            />
            <img
              src={videoEditingVideo}
              alt="Video Editing Sample 2"
              className="w-1/3 h-auto object-cover rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105"
            />
            <img
              src={videoEditingVideo}
              alt="Video Editing Sample 3"
              className="w-1/3 h-auto object-cover rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center transition-all duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">Let’s Create Stunning Videos Together!</h2>
        <p className="text-lg text-slate-700 mb-8">
          Whether you're looking to create a viral social media video, a cinematic advertisement, or a professional corporate video, our team is here to help. Let us transform your raw footage into content that captivates your audience.
        </p>
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
        /> 
      </section>
    </div>
  );
}
