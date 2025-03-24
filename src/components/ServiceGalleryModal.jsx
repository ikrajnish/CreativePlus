import React, { useEffect } from "react";
import { Button } from "../components/Button";

export function ServiceGalleryModal({
  isOpen,
  onClose,
  service,
  fullscreenIndex,
  fullscreenItems,
  openFullscreen,
  closeFullscreen,
  showNext,
  showPrev,
  handleTouchStart,
  handleTouchEnd,
}) {
  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen || !service) return null;

  // Function to determine if a file is a video
  const isVideo = (file) => {
    return file.match(/\.(mp4|webm|ogg)$/i);
  };

  return (
    <>
      {/* Modal Gallery */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-200 to-white z-50 flex flex-col items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-orange-200 to-orange-100 shadow-lg relative overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-6 right-8 text-gray-700 hover:text-red-500 text-3xl font-bold z-50"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="text-4xl font-bold mb-4 text-center pt-8">{service.title} Showcase</h2>
          <p className="text-center text-lg mb-6 text-slate-700">{service.desc}</p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {service.samples.map((sample, index) => (
              <div
                key={index}
                className="w-full h-32 rounded-md cursor-pointer transform hover:scale-105 transition duration-300 shadow-md overflow-hidden"
                onClick={() => openFullscreen(index, service.samples)}
              >
                {isVideo(sample) ? (
                  <video
                    src={sample}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  <img
                    src={sample}
                    alt={`Sample ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 pb-6">
            <Button
              text="Close"
              className="px-6 py-3 transition-all duration-300"
              onClick={onClose}
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Viewer */}
      {fullscreenIndex !== null && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-orange-200 to-white bg-opacity-90 z-50 flex items-center justify-center p-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-6 right-8 text-slate-700 hover:text-red-500 text-4xl font-bold z-50"
            onClick={closeFullscreen}
          >
            &times;
          </button>

          <button
            className="absolute left-4 md:left-12 text-slate-700 text-3xl font-bold z-50"
            onClick={showPrev}
          >
            &#8249;
          </button>

          {isVideo(fullscreenItems[fullscreenIndex]) ? (
            <video
              src={fullscreenItems[fullscreenIndex]}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg transition-transform duration-300"
              controls
              autoPlay
              muted
              loop
            />
          ) : (
            <img
              src={fullscreenItems[fullscreenIndex]}
              alt={`Fullscreen ${fullscreenIndex + 1}`}
              className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-lg transition-transform duration-300"
            />
          )}

          <button
            className="absolute right-4 md:right-12 text-slate-700 text-3xl font-bold z-50"
            onClick={showNext}
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}