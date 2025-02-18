import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

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
            <a href="https://linkedin.com/company/creativeplusstudio" 
               aria-label="Follow us on LinkedIn" 
               target="_blank" 
               rel="noopener noreferrer nofollow" 
               className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/creativeplusstudio" 
               aria-label="Follow us on Facebook" 
               target="_blank" 
               rel="noopener noreferrer nofollow" 
               className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/creativeplusstudio" 
               aria-label="Follow us on Instagram" 
               target="_blank" 
               rel="noopener noreferrer nofollow" 
               className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
});
