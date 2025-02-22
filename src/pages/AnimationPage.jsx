import React from "react";
import { Button } from "../components/Button";
import animation1 from "../assets/animation.gif";
import animation2 from "../assets/animation.gif";
import animation3 from "../assets/animation.gif";
import animation4 from "../assets/animation.gif";

export function AnimationPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12">
        <h1 className="text-6xl font-extrabold text-orange-500 mb-4">Animation Services</h1>
        <p className="text-2xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Bring your ideas to life with our expert animation services. From 2D and 3D animations to engaging motion graphics, we craft stunning visuals that captivate audiences.
        </p>
      </section>

      {/* Animation Showcase Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-5xl font-bold text-slate-700 mb-10 text-center">Our Featured Animations</h2>
          
          <div className="space-y-12">
            {/* Animation 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src={animation1} alt="Animation Work 1" className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg" />
              <p className="text-2xl text-slate-700 md:w-1/2">Dynamic Explainer Animation - Captivating motion graphics to simplify complex ideas.</p>
            </div>
            
            {/* Animation 2 (Reverse Layout) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <img src={animation2} alt="Animation Work 2" className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg" />
              <p className="text-2xl text-slate-700 md:w-1/2">3D Character Animation - Lifelike character movements that tell powerful stories.</p>
            </div>
            
            {/* Animation 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img src={animation3} alt="Animation Work 3" className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg" />
              <p className="text-2xl text-slate-700 md:w-1/2">Product Animation - Showcasing products with stunning 3D visual effects.</p>
            </div>
            
            {/* Animation 4 (Reverse Layout) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <img src={animation4} alt="Animation Work 4" className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow-lg" />
              <p className="text-2xl text-slate-700 md:w-1/2">2D Promotional Animation - Engaging visuals to elevate brand storytelling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center">
        <h2 className="text-5xl font-bold text-slate-700 mb-6">Let’s Create Something Amazing Together!</h2>
        <p className="text-2xl text-slate-700 mb-10 max-w-2xl mx-auto">
          Ready to elevate your brand with stunning animations? Contact us today and let’s bring your vision to life!
        </p>
        {/* Button Component */}
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} 
        />
      </section>
    </div>
  );
}
