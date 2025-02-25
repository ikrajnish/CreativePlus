import React from "react";
import { Button } from "../components/Button"; // Import your Button component
import digitalMarketingVideo from '../assets/digital-marketing.gif';
import seoImage from '../assets/digital-marketing.gif';
import smmImage from '../assets/digital-marketing.gif';
import ppcImage from '../assets/digital-marketing.gif';
import emailMarketingImage from '../assets/digital-marketing.gif';
import contentMarketingImage from '../assets/digital-marketing.gif';
import influencerMarketingImage from '../assets/digital-marketing.gif';

export function DigitalMarketingPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Dominate the Digital Space</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Supercharge your brand with high-impact digital marketing strategies. From SEO to influencer marketing, we make your brand shine!
        </p>
      </section>

      {/* Digital Marketing Overview Section */}
      <section className="py-16 bg-orange-50 transition-all duration-700 ease-in-out transform hover:scale-105 reveal">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">What We Do</h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            At CreativePlusStudio, we craft winning digital marketing strategies that drive traffic, amplify engagement, and boost conversions. Let’s turn your vision into digital dominance.
          </p>
        </div>
      </section>

      {/* Digital Marketing Features Section */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our Power-Packed Digital Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {[{title: "Search Engine Optimization (SEO)", desc: "Rank higher on search engines and attract organic traffic.", img: seoImage},
              {title: "Social Media Marketing (SMM)", desc: "Create viral campaigns and grow a loyal audience.", img: smmImage},
              {title: "Pay-Per-Click Advertising (PPC)", desc: "Run laser-targeted ads for instant conversions.", img: ppcImage},
              {title: "Email Marketing", desc: "Engage and nurture leads with personalized campaigns.", img: emailMarketingImage},
              {title: "Content Marketing", desc: "Tell compelling stories and turn readers into customers.", img: contentMarketingImage},
              {title: "Influencer Marketing", desc: "Leverage influencers to expand brand credibility.", img: influencerMarketingImage}]
              .map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <strong>{service.title}</strong>
                  <p>{service.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-16 transition-all duration-700 ease-in-out transform hover:scale-105 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={digitalMarketingVideo}
              alt="Digital Marketing"
              className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Dominate your industry with high-converting digital strategies that bring measurable results.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">Let's Elevate Your Brand Together</h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our team of digital marketing pros is ready to skyrocket your brand’s online presence. Let’s create a strategy that gets real results!
        </p>
        {/* Button Component */}
        <Button 
          text="Get Started Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>
    </div>
  );
}
