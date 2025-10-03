import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <header className='bg-blue-600 w-full h-20 flex flex-row justify-between items-center px-4'>
      <div className='text-white text-2xl font-bold'><img src={logo} alt="Logo" className='h-20'/></div>
      
      <nav className='flex space-x-4'>
        <Link to="/" className='text-white hover:text-blue-300'>Home</Link>
        <Link to="/about" className='text-white hover:text-blue-300'>About</Link>
        <Link to="/contact" className='text-white hover:text-blue-300'>Contact</Link>
        {/* <Link to="/jobs" className='text-white hover:text-blue-300'>Jobs</Link> */}
      </nav>

      <div>
        <button className='bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-400'>
          Request Staff
        </button>
      </div>
    </header>
  );
}

export default Header;