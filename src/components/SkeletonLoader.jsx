import React from 'react';

const SkeletonLoader = ({ type = 'default', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="card bg-base-100 shadow-xl animate-pulse">
            <div className="card-body text-center p-8">
              <div className="w-16 h-16 bg-base-300 rounded-full mx-auto mb-6"></div>
              <div className="h-6 bg-base-300 rounded mb-4"></div>
              <div className="h-4 bg-base-300 rounded mb-2"></div>
              <div className="h-4 bg-base-300 rounded mb-2"></div>
              <div className="h-4 bg-base-300 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        );
      
      case 'stats':
        return (
          <div className="animate-pulse">
            <div className="h-8 bg-base-300 rounded mb-4"></div>
            <div className="h-12 bg-base-300 rounded mb-2"></div>
            <div className="h-4 bg-base-300 rounded w-2/3"></div>
          </div>
        );
      
      case 'testimonial':
        return (
          <div className="card bg-base-100 shadow-lg animate-pulse">
            <div className="card-body p-6">
              <div className="h-4 bg-base-300 rounded mb-2"></div>
              <div className="h-4 bg-base-300 rounded mb-2"></div>
              <div className="h-4 bg-base-300 rounded mb-4 w-3/4"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-base-300 rounded-full"></div>
                <div>
                  <div className="h-4 bg-base-300 rounded mb-1 w-24"></div>
                  <div className="h-3 bg-base-300 rounded w-16"></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'client':
        return (
          <div className="animate-pulse">
            <div className="h-32 bg-base-300 rounded-lg"></div>
          </div>
        );
      
      default:
        return (
          <div className="animate-pulse">
            <div className="h-4 bg-base-300 rounded mb-2"></div>
            <div className="h-4 bg-base-300 rounded mb-2"></div>
            <div className="h-4 bg-base-300 rounded w-3/4"></div>
          </div>
        );
    }
  };

  if (count > 1) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index}>
            {renderSkeleton()}
          </div>
        ))}
      </div>
    );
  }

  return renderSkeleton();
};

export default SkeletonLoader;
