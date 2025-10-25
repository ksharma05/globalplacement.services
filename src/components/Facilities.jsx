import React from 'react';
import useContent from '../hooks/useContent';

/**
 * Facilities Component
 * 
 * Displays information about the Training and Trade Centre facilities
 * including testing facilities, training team, and client amenities
 */

const Facilities = () => {
  const { facilities } = useContent();

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6 text-base-content">{facilities.title}</h2>
        <p className="text-xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
          {facilities.description}
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {facilities.mainFeatures.map((feature, index) => (
          <div 
            key={index} 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="card-body p-8">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">
                {feature.icon}
              </div>
              <h3 className="card-title justify-center text-primary text-2xl mb-4 group-hover:text-secondary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-base-content/80 text-center leading-relaxed mb-4">
                {feature.description}
              </p>
              {feature.trades && (
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {feature.trades.map((trade, tradeIndex) => (
                    <span key={tradeIndex} className="badge badge-primary badge-lg">
                      {trade}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Highlights Section */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-8 border border-primary/20 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8 text-base-content">
          Facility Highlights
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {facilities.highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 bg-base-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <svg className="w-8 h-8 text-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-base-content/80">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
