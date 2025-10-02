import React from 'react'
import JobsList from '../features/jobs/JobsList'

const JobsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      <JobsList />
    </div>
  )
}

export default JobsPage