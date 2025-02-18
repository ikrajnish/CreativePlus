import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceDropdown } from "./ServiceDropdown";
import Logo from "../assets/Logo.png";
import Name from "../assets/name.png";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const navigate = useNavigate();

  // Detect touch devices
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const handleLinkClick = () => setIsOpen(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="bg-gradient-to-r from-orange-100 to-orange-200 text-slate-900 py-4 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Brand Name */}
        <a
          href="/#home"
          onClick={handleLinkClick}
          className="flex items-center space-x-2"
        >
          <img
            src={Logo}
            alt="CreativePlusStudio Logo"
            className="w-9 h-9 sm:w-12 sm:h-12"
            loading="lazy"
          />
          <img
            src={Name}
            alt="CreativePlusStudio Brand Name"
            className="h-7 sm:h-8"
            loading="lazy"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="hover:scale-105 transition-transform"
          >
            {isOpen ? (
              <X className="w-8 h-8 text-black" />
            ) : (
              <Menu className="w-8 h-8 text-black" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:relative top-16 right-0 md:top-auto md:right-auto bg-slate-100 md:bg-transparent md:shadow-none p-6 md:p-0 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-6 md:border-none  transition-all duration-500 ease-in-out transform ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-20 opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible"
          }`}
        >
          <li>
            <a
              href="/#home"
              onClick={handleLinkClick}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Home
            </a>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative dropdown-container"
            onMouseEnter={() => !isTouchDevice && setIsDropdownOpen(true)}
            onMouseLeave={() => !isTouchDevice && setIsDropdownOpen(false)}
          >
            <button
              type="button"
              aria-label="Services Menu"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={isTouchDevice ? toggleDropdown : undefined}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Services
            </button>
            {isDropdownOpen && <ServiceDropdown className="w-screen h-screen"/>}
          </li>

          <li>
            <a
              href="/about"
              onClick={handleLinkClick}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
          <li className="md:hidden">
            <Button text="Book a Consultant" 
            onClick={() => navigate("/contact")}
              />
          </li>
        </ul>

        {/* Desktop Book a Consultant Button */}
        <div className="hidden md:block">
          <Button
            text="Book a Consultant"
            onClick={() => navigate("/contact")}
          />
        </div>
      </div>
    </nav>
  );
}