import React from 'react';
import logo from '../assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className='h-20'/>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mb-0 md:mr-6">
              <h5 className="font-bold">Quick Links</h5>
              <ul>
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <li><a href="/jobs" className="hover:underline">Jobs</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0 md:mr-6">
              <h5 className="font-bold">Services Offered</h5>
              <ul>
                <li><a href="#" className="hover:underline">Staffing Solutions</a></li>
                <li><a href="#" className="hover:underline">Consulting</a></li>
                <li><a href="#" className="hover:underline">Training</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold">Subscribe to our Newsletter</h5>
              <form className="flex flex-col">
                <input type="email" placeholder="Your email" className="p-2 mb-2 rounded" />
                <button type="submit" className="bg-blue-500 text-white py-2 rounded">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Staffing Agency. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;