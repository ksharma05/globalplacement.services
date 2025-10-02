import React from 'react'
import { useSelector } from 'react-redux'
import JobCard from '../../components/JobCard'

const JobsList = () => {
  const jobs = useSelector((state) => state.jobs.jobs)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <div className="col-span-1 text-center">No jobs available</div>
      )}
    </div>
  )
}

export default JobsList