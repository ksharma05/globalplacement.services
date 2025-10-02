import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-700">{job.description}</p>
      <div className="mt-4">
        <span className="text-sm text-gray-500">Location: {job.location}</span>
        <span className="block text-sm text-gray-500">Salary: {job.salary}</span>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;