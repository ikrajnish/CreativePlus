import React, { useState, useEffect, useRef } from "react";
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
  const dropdownRef = useRef(null);
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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        setIsDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on clicking any <ul> inside ServiceDropdown
  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-100 to-orange-200 text-slate-900 py-4 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and Brand Name */}
        <a
          href="/#home"
          onClick={() => setIsOpen(false)}
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
            className="menu-toggle hover:scale-105 transition-transform"
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
          className={`fixed md:relative top-16 inset-x-0 md:top-auto md:inset-x-auto bg-gradient-to-r from-orange-100 to-orange-200 md:bg-transparent md:shadow-none p-6 md:p-0 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-6 transition-all duration-500 ease-in-out transform ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible md:translate-y-0 md:opacity-100 md:visible"
          } ml-auto`} // Added ml-auto here
        >
          <li>
            <a
              href="/#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Home
            </a>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative dropdown-container"
            ref={dropdownRef}
            onMouseEnter={() => !isTouchDevice && setIsDropdownOpen(true)}
            onMouseLeave={() => !isTouchDevice && setIsDropdownOpen(false)}
          >
            <button
              type="button"
              aria-label="Services Menu"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="hover:text-orange-500 transition-colors duration-300"
            >
            <a href="/#services">
              Services
            </a>
            </button>
            {isDropdownOpen && (
              <ServiceDropdown onItemClick={handleDropdownItemClick} />
            )}
          </li>

          <li>
            <a
              href="/#about"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Contact Us
            </a>
          </li>
          <li className="md:hidden">
            <Button text="Book a Consultant" onClick={() => navigate("/contact")} />
          </li>
        </ul>

        {/* Desktop Book a Consultant Button */}
        <div className="hidden md:block">
          <Button text="Book a Consultant" onClick={() => navigate("/contact")} />
        </div>
      </div>
    </nav>
  );
}