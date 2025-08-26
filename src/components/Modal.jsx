import React from "react";
import { Button } from "./Button"; // adjust path if needed

const Modal = ({ isOpen, onClose, title, samples }) => {
  if (!isOpen) return null;

  // Helper: decide if sample is a video
  const isVideo = (src) => {
    const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
    return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-200 to-white z-50 flex flex-col">
      
      {/* Header */}
      <div className="sticky top-0 bg-gradient-to-br from-orange-200 to-orange-100 z-50 flex justify-between items-center p-4 shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700">{title} Showcase</h2>
        <button
          className="text-gray-700 hover:text-red-500 text-4xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      {/* Content */}
      <div className="w-full h-full overflow-y-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samples.map((sample, index) =>
            isVideo(sample) ? (
              <video
                key={index}
                src={sample}
                controls
                className="w-full h-auto rounded-lg shadow-md"
              />
            ) : (
              <img
                key={index}
                src={sample}
                alt={`Sample ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            )
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-10">
          <Button
            text="Close"
            className="px-6 py-3 transition-all duration-300"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
