import React, { useState } from 'react'
import useContent from '../hooks/useContent'

const OurVerticals = () => {
  const { verticals, stats } = useContent();
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          We specialize in blue-collar staffing across diverse industries, connecting skilled workers with opportunities that match their expertise.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {verticals.map((vertical, index) => (
          <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="card-body text-center p-6 flex flex-col">
              <div className="text-4xl mb-4">{vertical.icon}</div>
              <h3 className="card-title text-lg font-bold text-primary mb-3 justify-center">
                {vertical.title}
              </h3>
              <p className="text-base-content/70 text-sm mb-4 leading-relaxed">
                {vertical.description}
              </p>
              
              {/* Expandable Trades Section */}
              {vertical.trades && (
                <div className="mb-4">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="btn btn-sm btn-outline btn-primary w-full"
                  >
                    {expandedCards[index] ? (
                      <>
                        Hide Roles
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        View Roles
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                  
                  {/* Collapsible Trades List */}
                  <div className={`overflow-hidden transition-all duration-300 ${expandedCards[index] ? 'max-h-96 mt-3' : 'max-h-0'}`}>
                    <div className="divider divider-primary text-xs my-2">Available Roles</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {vertical.trades.map((trade, tradeIndex) => (
                        <span key={tradeIndex} className="badge badge-sm badge-outline badge-primary">
                          {trade}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="badge badge-primary badge-outline mt-auto">
                {vertical.workers} Available
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industry Stats */}
      <div className="mt-16 bg-primary/10 rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{stats.industries}</div>
            <p className="text-base-content/80 font-medium">Industry Sectors</p>
            <p className="text-sm text-base-content/60">Comprehensive coverage</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{stats.activeWorkers}</div>
            <p className="text-base-content/80 font-medium">Active Workers</p>
            <p className="text-sm text-base-content/60">Ready to deploy</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">{stats.experience}</div>
            <p className="text-base-content/80 font-medium">Years Experience</p>
            <p className="text-sm text-base-content/60">Industry expertise</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurVerticals
