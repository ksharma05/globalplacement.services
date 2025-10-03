import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">If you have any questions or inquiries, please feel free to reach out to us using the form below.</p>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>Email: bss@globalplacement.services</p>
        <p>Phone: +91-9829055830</p>
        <p>Address: Global Placement Services, Bhagwati Market, <br />Kishan Circle, Ramu ka Bas, <br/>Jaipur Road, Sikar Rajasthan 332021 </p>
      </div>

      <form className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input className="border border-gray-300 p-2 w-full rounded" type="text" id="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input className="border border-gray-300 p-2 w-full rounded" type="email" id="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea className="border border-gray-300 p-2 w-full rounded" id="message" rows="4" required></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;