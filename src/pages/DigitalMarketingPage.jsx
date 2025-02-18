import React from "react";
import { Button } from "../components/Button"; // Import your Button component
import digitalMarketingVideo from '../assets/digital-marketing.gif';

export function DigitalMarketingPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">Digital Marketing Services</h1>
        <p className="text-lg text-slate-700 mb-6">
          Drive growth, increase brand awareness, and engage your target audience with our comprehensive digital marketing solutions.
        </p>
      </section>

      {/* Digital Marketing Overview Section */}
      <section className="py-12 bg-orange-50 transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">What We Do</h2>
          <p className="text-lg text-slate-700 mb-6">
            At CreativePlusStudio, we provide end-to-end digital marketing services that empower your business to grow online. Our strategies focus on driving traffic, improving conversions, and building lasting relationships with your customers.
          </p>
          <p className="text-lg text-slate-700">
            From social media management to search engine optimization (SEO), we offer a wide range of services designed to maximize your brand’s online presence and drive measurable results.
          </p>
        </div>
      </section>

      {/* Digital Marketing Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Our Digital Marketing Services Include:</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg text-slate-700">
            <li><strong>Search Engine Optimization (SEO):</strong> Improve your website's visibility and rankings on search engines.</li>
            <li><strong>Social Media Marketing (SMM):</strong> Build and engage a loyal community through platforms like Facebook, Instagram, LinkedIn, and Twitter.</li>
            <li><strong>Pay-Per-Click Advertising (PPC):</strong> Generate immediate traffic with targeted ad campaigns on Google, Facebook, and more.</li>
            <li><strong>Email Marketing:</strong> Reach and nurture your audience with personalized and effective email campaigns.</li>
            <li><strong>Content Marketing:</strong> Create and distribute valuable content to attract and retain a clearly defined audience.</li>
            <li><strong>Influencer Marketing:</strong> Partner with influencers to expand your reach and build credibility.</li>
          </ul>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-center mb-6">
            <img
              src={digitalMarketingVideo}
              alt="Digital Marketing"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-lg text-slate-700 text-center mb-6">
            Empower your business with tailored digital marketing strategies designed to enhance your online presence and drive results.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">Ready to Boost Your Online Presence?</h2>
        <p className="text-lg text-slate-700 mb-8">
          Our team of digital marketing experts is ready to take your brand to the next level. Let’s work together to create a customized strategy that delivers results.
        </p>
        {/* Button Component */}
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
        />
      </section>
    </div>
  );
}

