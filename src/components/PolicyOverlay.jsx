import React, { useState } from 'react';
import { X } from 'lucide-react';

export function PolicyOverlay({ title, content, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-700 hover:text-red-500">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-orange-600 mb-4">{title}</h2>
        <div className="text-slate-600 overflow-y-auto max-h-96">{content}</div>
      </div>
    </div>
  );
}