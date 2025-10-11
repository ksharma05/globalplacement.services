import React from 'react'
import useContent from '../hooks/useContent'

const OurVerticals = () => {
  const { verticals, stats } = useContent();

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
            <div className="card-body text-center p-6">
              <div className="text-4xl mb-4">{vertical.icon}</div>
              <h3 className="card-title text-lg font-bold text-primary mb-3 justify-center">
                {vertical.title}
              </h3>
              <p className="text-base-content/70 text-sm mb-4 leading-relaxed">
                {vertical.description}
              </p>
              <div className="badge badge-primary badge-outline">
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
