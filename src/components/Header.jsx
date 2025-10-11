import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import useContent from '../hooks/useContent';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { getCompanyInfo, getContactInfo } = useContent();
  const { name } = getCompanyInfo();
  const { phone } = getContactInfo();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`navbar bg-base-100 shadow-lg transition-all duration-300 ${
      isScrolled ? 'shadow-xl' : 'shadow-lg'
    } sticky top-0 z-50`}>
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </div>
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  to="/"
                  className={`${isActive('/') ? 'active' : ''} transition-colors duration-200`}
                  aria-label="Navigate to Home page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${isActive('/about') ? 'active' : ''} transition-colors duration-200`}
                  aria-label="Navigate to About page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${isActive('/contact') ? 'active' : ''} transition-colors duration-200`}
                  aria-label="Navigate to Contact page"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className={`${isActive('/jobs') ? 'active' : ''} transition-colors duration-200`}
                  aria-label="Navigate to Jobs page"
                >
                  Jobs
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Logo and Company Name */}
        <Link to="/" className="btn btn-ghost text-xl" aria-label="Go to Home page">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Global Placement Services Logo" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-base-content">{name.split(' ')[0]} {name.split(' ')[1]}</div>
              <div className="text-xs text-base-content/70">{name.split(' ')[2]}</div>
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/"
              className={`btn btn-ghost ${
                isActive('/') 
                  ? 'btn-active text-primary' 
                  : 'text-base-content hover:text-primary'
              } transition-all duration-200 font-medium`}
              aria-label="Navigate to Home page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`btn btn-ghost ${
                isActive('/about') 
                  ? 'btn-active text-primary' 
                  : 'text-base-content hover:text-primary'
              } transition-all duration-200 font-medium`}
              aria-label="Navigate to About page"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`btn btn-ghost ${
                isActive('/contact') 
                  ? 'btn-active text-primary' 
                  : 'text-base-content hover:text-primary'
              } transition-all duration-200 font-medium`}
              aria-label="Navigate to Contact page"
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <Link
              to="/jobs"
              className={`btn btn-ghost ${
                isActive('/jobs') 
                  ? 'btn-active text-primary' 
                  : 'text-base-content hover:text-primary'
              } transition-all duration-200 font-medium`}
              aria-label="Navigate to Jobs page"
            >
              Jobs
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Right side actions */}
      <div className="navbar-end">
        {/* Contact Info - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 mr-4">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-base-content/80 font-medium">{phone}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="btn btn-outline btn-sm hidden sm:inline-flex"
            aria-label="Contact us for staffing needs"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact
          </Link>
          
          <Link
            to="/contact"
            className="btn btn-primary btn-sm"
            aria-label="Request staff services"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="hidden sm:inline">Request Staff</span>
            <span className="sm:hidden">Request</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;