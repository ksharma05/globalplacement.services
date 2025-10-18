import React from 'react';
import Image1 from '../assets/1.jpg';
import Image2 from '../assets/2.jpg';
import Image3 from '../assets/3.jpg';
import Image4 from '../assets/4.jpg';
import Image5 from '../assets/5.jpg';
import Image6 from '../assets/6.jpg';
import Image7 from '../assets/7.jpg';
import Image8 from '../assets/8.jpg';
import Image9 from '../assets/9.jpg';
import Image10 from '../assets/10.jpg';
import useContent from '../hooks/useContent';

const Hero = ()=> {
  const { hero, stats } = useContent();
  return (
    <div className="hero min-h-full w-full bg-gradient-to-br from-base-100 via-base-100 to-base-200 relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-info/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div> */}
      
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto relative z-10">
        {/* Right side - Image Grid */}
        <div className="lg:w-1/2">
          <div className="flex items-center justify-center lg:justify-end">
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {/* First row */}
              <div className="col-span-2">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <img
                    alt="Skilled construction workers"
                    src={Image1}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: '0.1s'}}>
                  <img
                    alt="Manufacturing professionals"
                    src={Image2}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              
              {/* Second row */}
              <div className="col-span-1">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: '0.2s'}}>
                  <img
                    alt="Healthcare workers"
                    src={Image3}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: '0.3s'}}>
                  <img
                    alt="Hospitality staff"
                    src={Image8}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              
              {/* Third row */}
              <div className="col-span-1">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: '0.4s'}}>
                  <img
                    alt="Engineering professionals"
                    src={Image5}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: '0.5s'}}>
                  <img
                    alt="Facility management"
                    src={Image6}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: '0.6s'}}>
                  <img
                    alt="Food service professionals"
                    src={Image7}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              
              {/* Fourth row */}
              <div className="col-span-2">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: '0.7s'}}>
                  <img
                    alt="Aviation professionals"
                    src={Image4}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="h-32 w-full lg:h-40 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: '0.8s'}}>
                  <img
                    alt="IT professionals"
                    src={Image9}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left side - Content */}
        <div className="lg:w-1/2 text-center lg:text-left sm:pr-10">
          <div className="max-w-2xl">
            {/* Trust Badge */}
            <div className="badge badge-primary badge-lg mb-4 animate-bounce">
              {hero.trustBadge}
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-base-content mb-6">
              {hero.headline.part1} <span className="gradient-text">{hero.headline.highlight1}</span> {hero.headline.part2}
              <span className="gradient-text animate-delay-200"> {hero.headline.highlight2}</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg lg:text-xl text-base-content/80 mb-8 leading-relaxed">
              {hero.subheading}
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              {hero.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="badge badge-outline badge-lg hover:badge-primary hover:scale-105 transition-all duration-300 cursor-default" 
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {benefit}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="btn btn-primary btn-md min-h-[48px] touch-manipulation"
                aria-label="Find skilled workers for your business"
              >
                <span className="flex items-center">
                  Find Workers Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button 
                className="btn btn-outline btn-md min-h-[48px] touch-manipulation"
                aria-label="Find job opportunities with our clients"
              >
                <span className="flex items-center">
                  Find Jobs
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-base-300">
              <p className="text-sm text-base-content/60 mb-4">
                {hero.trustIndicators.label}
              </p>
              <div className="flex justify-center lg:justify-start items-center space-x-6 opacity-60">
                {hero.trustIndicators.industries.map((industry, index) => (
                  <div key={index} className="text-xs font-semibold">{industry}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero; 
