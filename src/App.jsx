import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';

// Import the individual service pages
import { GraphicDesignPage } from './pages/GraphicDesignPage';
import { VideoEditingPage } from './pages/VideoEditingPage';
import { AnimationPage } from './pages/AnimationPage';
import { ModelingPage } from './pages/ModelingPage';
import { WebDevPage } from './pages/WebDevPage';
import { DigitalMarketingPage } from './pages/DigitalMarketingPage';
import Description from './pages/Description';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-100 to-white rounded-xl shadow-lg">
        <Navbar />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Add the service-specific routes */}
            <Route path="/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/video-editing" element={<VideoEditingPage />} />
            <Route path="/animation" element={<AnimationPage />} />
            <Route path="/3d-modeling" element={<ModelingPage />} />
            <Route path="/web-development" element={<WebDevPage />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          </Routes>
        </main>
        <Description/>
        <Footer />
      </div>
    </Router>
  );
}
