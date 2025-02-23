import React from "react";
import { Button } from "../components/Button";
import graphicDesignVideo from "../assets/graphic-design.gif";

export function GraphicDesignPage() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Graphic Designing Services</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Transforming your ideas into visually captivating designs that tell your brand story.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-orange-50 transition-all duration-700 ease-in-out transform hover:scale-105 reveal">
      <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">What We Do</h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
          At Creative Plus Studio, we specialize in crafting unique and eye-catching graphic designs tailored to your brand’s identity. Our goal is to ensure that your designs resonate with your audience and leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our Graphic Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {[
              { title: "Logo Design", desc: "Crafting memorable logos that represent your brand's identity.", img: graphicDesignVideo },
              { title: "Brand Identity Design", desc: "Creating cohesive visual identities across all channels.", img: graphicDesignVideo  },
              { title: "Print Design", desc: "Designing brochures, business cards, flyers, and more.", img: graphicDesignVideo  },
              { title: "Web & UI Design", desc: "Building modern, user-friendly interfaces for websites and apps.", img: graphicDesignVideo  },
              { title: "Packaging Design", desc: "Designing creative packaging that enhances your product’s appeal.", img: graphicDesignVideo  },
              { title: "Social Media Graphics", desc: "Engaging visuals for your social media campaigns.", img: graphicDesignVideo  }
            ]
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

      {/* Image Section -*/}
      <section className="py-16 transition-all duration-700 ease-in-out transform hover:scale-105 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <img
            src={graphicDesignVideo}
            alt="Graphic Design"
            className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
          />
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Let us help you bring your vision to life with stunning designs that captivate and engage your audience.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">Ready to Transform Your Brand's Visuals?</h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our graphic designers are here to bring your vision to life. Let’s collaborate to create designs that speak to your audience and elevate your brand.
        </p>
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>
    </div>
  );
}
