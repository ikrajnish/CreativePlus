import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = React.memo(() => {
  return (
    <footer className="bg-gradient-to-r from-orange-100 to-orange-200 text-slate-700 py-8 shadow-inner border-t border-orange-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">

        {/* Footer Links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center md:justify-start space-x-4 text-orange-700 text-sm">
          <a href="/privacy-policy" className="hover:underline hover:text-orange-900 transition-colors duration-300">Privacy Policy</a>
          <span className="text-slate-500" aria-hidden="true">|</span>
          <a href="/terms-of-use" className="hover:underline hover:text-orange-900 transition-colors duration-300">Terms of Use</a>
          <span className="text-slate-500" aria-hidden="true">|</span>
          <a href="/sitemap" className="hover:underline hover:text-orange-900 transition-colors duration-300">Sitemap</a>
        </nav>

        {/* Copyright */}
        <p className="text-slate-800 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} CreativePlusStudio. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-slate-800 font-semibold mb-3">CONNECT WITH US</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/creative-plus-studio-23958934b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
               aria-label="Follow us on LinkedIn" 
               target="_blank" 
               rel="noopener noreferrer nofollow" 
               className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1E1KJ9b2Hk/" 
               aria-label="Follow us on Facebook" 
               target="_blank" 
               rel="noopener noreferrer nofollow" 
               className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/creativeplusstudio23?igsh=MW1od21wZjV6NDhqNg==" 
               aria-label="Follow us on Instagram" 
               target="_blank" 
               rel="noopener noreferrer nofollow" 
               className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@creativeplusstudio?si=-DGqcJLPf3Ria22X" 
               aria-label="Subscribe to our YouTube channel" 
               target="_blank" 
               rel="noopener noreferrer nofollow" 
               className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
});
