import React from 'react'

const Body = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Welcome to Our Staffing Agency</h2>
      <p className="mt-2">
        We specialize in connecting skilled blue-collar workers with employers across various industries. 
        Our mission is to provide top-notch staffing solutions that meet the needs of both job seekers and employers.
      </p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Our Services</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Temporary Staffing</li>
          <li>Permanent Placement</li>
          <li>On-Site Management</li>
          <li>Payroll Services</li>
        </ul>
      </div>
    </div>
  )
}

export default Body