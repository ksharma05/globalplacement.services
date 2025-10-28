import React, { useState } from 'react'
import { GOOGLE_SCRIPT_URL } from '../config/googleSheets'

const Newsletter = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('submitting');
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'submit-newsletter',
          email,
          source: 'home'
        })
      });
      
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div className="bg-indigo-700 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:col-span-7">
          Stay Informed with Our Staffing Industry Insights
        </h2>
        
        {status === 'success' && (
          <div className="lg:col-span-5 lg:pt-2">
            <div className="rounded-md bg-green-500 p-4 text-white">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Successfully subscribed!</span>
              </div>
            </div>
          </div>
        )}
        
        {status !== 'success' && (
          <form onSubmit={handleSubmit} className="w-full max-w-md lg:col-span-5 lg:pt-2">
            {error && (
              <div className="mb-4 rounded-md bg-red-500 p-3 text-white text-sm">
                {error}
              </div>
            )}
            
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/75 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-xs hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            <p className="mt-4 text-sm/6 text-gray-300">
              We respect your privacy. Read our{' '}
              <a href="#" className="font-semibold whitespace-nowrap text-white hover:text-indigo-50">
                privacy policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default Newsletter