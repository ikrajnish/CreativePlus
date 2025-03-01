import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-white bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{content}</p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full hover:bg-orange-700" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export const Footer = React.memo(() => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const showModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  return (
    <footer className="bg-gradient-to-r from-orange-100 to-orange-200 text-slate-700 py-8 shadow-inner border-t border-orange-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Footer Links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center md:justify-start space-x-4 text-orange-700 text-sm">
          <span className="hover:underline hover:text-orange-900 cursor-pointer" onClick={() => showModal("Privacy Policy", "We value your privacy and ensure data protection.")}>Privacy Policy</span>
          <span className="text-slate-500">|</span>
          <span className="hover:underline hover:text-orange-900 cursor-pointer" onClick={() => showModal("Terms of Use", "These are our terms of service and usage.")}>Terms of Use</span>
          <span className="text-slate-500">|</span>
          <span className="hover:underline hover:text-orange-900 cursor-pointer" onClick={() => showModal("Sitemap", "Navigate our website through the sitemap.")}>Sitemap</span>
        </nav>
        
        {/* Copyright */}
        <p className="text-slate-800 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} CreativePlusStudio. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-slate-800 font-semibold mb-3">CONNECT WITH US</p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/creative-plus-studio-23958934b" target="_blank" rel="noopener noreferrer" className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1E1KJ9b2Hk/" target="_blank" rel="noopener noreferrer" className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/creativeplusstudio23" target="_blank" rel="noopener noreferrer" className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@creativeplusstudio" target="_blank" rel="noopener noreferrer" className="text-orange-700 text-xl hover:text-orange-900 transition-transform transform hover:scale-110">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} content={modalContent.content} />
    </footer>
  );
});
