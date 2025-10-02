import React from 'react';

const About = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2">
          To connect skilled blue-collar workers with employers who value their expertise and dedication.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="mt-2">
          To be the leading staffing agency for blue-collar workers globally, recognized for our commitment to quality and service.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Integrity</li>
          <li>Respect</li>
          <li>Excellence</li>
          <li>Collaboration</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our History</h2>
        <p className="mt-2">
          Founded in [Year], we have been dedicated to providing top-notch staffing solutions for blue-collar industries, helping both workers and employers achieve their goals.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Meet the Team</h2>
        <p className="mt-2">
          Our team is composed of experienced professionals who are passionate about connecting talent with opportunity.
        </p>
      </section>
    </div>
  );
};

export default About;