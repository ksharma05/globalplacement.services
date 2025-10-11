import React, { useState } from 'react';
import useContent from '../hooks/useContent';

const Contact = () => {
  const { contact, faqs } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    preferredContact: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        preferredContact: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 relative overflow-hidden">
        <div className="hero-content text-center max-w-4xl mx-auto px-4 py-16">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-base-content/80 mb-8 leading-relaxed">
              Ready to find the perfect workforce solution? We're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="badge badge-primary badge-lg gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Response within 2 hours
              </div>
              <div className="badge badge-secondary badge-lg gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                99.9% satisfaction rate
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="w-full bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-base-content">Contact Information</h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {/* Phone */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="card-body text-center p-6">
                <div className="text-5xl mb-4 group-hover:animate-bounce">📞</div>
                <h3 className="card-title justify-center text-primary text-xl mb-3 group-hover:text-secondary transition-colors duration-300">Call Us</h3>
                <p className="text-base-content/80 mb-4">Speak directly with our team</p>
                <a 
                  href={contact.phone.href} 
                  className="btn btn-primary btn-sm group-hover:btn-secondary transition-colors duration-300"
                  aria-label={`Call us at ${contact.phone.display}`}
                >
                  {contact.phone.display}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="card-body text-center p-6">
                <div className="text-5xl mb-4 group-hover:animate-pulse">✉️</div>
                <h3 className="card-title justify-center text-primary text-xl mb-3 group-hover:text-secondary transition-colors duration-300">Email Us</h3>
                <p className="text-base-content/80 mb-4">Send us a detailed message</p>
                <a 
                  href={contact.email.href} 
                  className="btn btn-primary btn-sm group-hover:btn-secondary transition-colors duration-300"
                  aria-label={`Send email to ${contact.email.display}`}
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="card-body text-center p-6">
                <div className="text-5xl mb-4 group-hover:animate-bounce">💬</div>
                <h3 className="card-title justify-center text-primary text-xl mb-3 group-hover:text-secondary transition-colors duration-300">WhatsApp</h3>
                <p className="text-base-content/80 mb-4">Quick chat and instant support</p>
                <a 
                  href={contact.phone.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm group-hover:btn-secondary transition-colors duration-300"
                  aria-label="Chat with us on WhatsApp"
                >
                  Start Chat
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="card-body text-center p-6">
                <div className="text-5xl mb-4 group-hover:animate-pulse">📍</div>
                <h3 className="card-title justify-center text-primary text-xl mb-3 group-hover:text-secondary transition-colors duration-300">Visit Us</h3>
                <p className="text-base-content/80 mb-4 text-sm">{contact.address.company}</p>
                <p className="text-base-content/70 text-xs leading-relaxed">
                  {contact.address.line1}<br />
                  {contact.address.line2}<br />
                  {contact.address.line3}
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="card bg-base-200 shadow-xl max-w-2xl mx-auto">
            <div className="card-body text-center p-8">
              <h3 className="card-title justify-center text-primary text-2xl mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-base-content mb-2">{contact.businessHours.weekdays.label}</h4>
                  <p className="text-base-content/80">{contact.businessHours.weekdays.hours}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-base-content mb-2">{contact.businessHours.saturday.label}</h4>
                  <p className="text-base-content/80">{contact.businessHours.saturday.hours}</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded-xl">
                <p className="text-sm text-base-content/70 italic">
                  <strong>Emergency Support:</strong> {contact.businessHours.emergency}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8">
                  <h2 className="card-title text-2xl mb-6 text-primary">Send us a Message</h2>
                  
                  {formStatus === 'success' && (
                    <div className="alert alert-success mb-6">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Thank you! Your message has been sent successfully. We'll get back to you within 2 hours.</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label" htmlFor="name">
                          <span className="label-text font-medium">Full Name *</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="input input-bordered w-full"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label" htmlFor="email">
                          <span className="label-text font-medium">Email Address *</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="input input-bordered w-full"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label" htmlFor="phone">
                          <span className="label-text font-medium">Phone Number</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="input input-bordered w-full"
                          placeholder="+91-XXXXXXXXXX"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label" htmlFor="company">
                          <span className="label-text font-medium">Company Name</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="input input-bordered w-full"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label" htmlFor="inquiryType">
                          <span className="label-text font-medium">Inquiry Type</span>
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="select select-bordered w-full"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="staffing">Staffing Services</option>
                          <option value="job-search">Job Search</option>
                          <option value="partnership">Partnership</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                      <div className="form-control">
                        <label className="label" htmlFor="preferredContact">
                          <span className="label-text font-medium">Preferred Contact Method</span>
                        </label>
                        <select
                          id="preferredContact"
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleInputChange}
                          className="select select-bordered w-full"
                        >
                          <option value="">Select preferred method</option>
                          <option value="phone">Phone Call</option>
                          <option value="email">Email</option>
                          <option value="whatsapp">WhatsApp</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label" htmlFor="message">
                        <span className="label-text font-medium">Message *</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="textarea textarea-bordered h-32 resize-none"
                        placeholder="Tell us about your staffing needs or any questions you have..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className={`btn btn-primary btn-lg w-full ${
                        formStatus === 'submitting' ? 'loading' : ''
                      }`}
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                {/* Why Choose Us */}
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body p-6">
                    <h3 className="card-title text-primary text-xl mb-4">Why Choose Us?</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="badge badge-primary badge-sm mt-1">✓</div>
                        <div>
                          <h4 className="font-semibold text-base-content">24-48 Hour Placement</h4>
                          <p className="text-sm text-base-content/70">Quick turnaround for urgent staffing needs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="badge badge-secondary badge-sm mt-1">✓</div>
                        <div>
                          <h4 className="font-semibold text-base-content">Pre-screened Candidates</h4>
                          <p className="text-sm text-base-content/70">Quality workers ready to start immediately</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="badge badge-accent badge-sm mt-1">✓</div>
                        <div>
                          <h4 className="font-semibold text-base-content">90-day Guarantee</h4>
                          <p className="text-sm text-base-content/70">We stand behind our placements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg">
                  <div className="card-body p-6 text-center">
                    <h3 className="card-title justify-center text-primary text-xl mb-4">Need Immediate Help?</h3>
                    <p className="text-base-content/80 mb-6">For urgent staffing needs, call us directly</p>
                    <div className="flex flex-col gap-3">
                      <a 
                        href={contact.phone.href} 
                        className="btn btn-primary btn-lg"
                        aria-label="Call us immediately"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                      </a>
                      <a 
                        href={contact.phone.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-lg"
                        aria-label="WhatsApp us"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="card bg-base-100 shadow-lg">
                  <div className="card-body p-6">
                    <h3 className="card-title text-primary text-xl mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="collapse collapse-arrow bg-base-200">
                          {/* <input type="radio" name="faq-accordion" /> */}
                          <div className="collapse-title text-sm font-medium">
                            {faq.question}
                          </div>
                          <div className="collapse-content">
                            <p className="text-sm text-base-content/70">{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-base-content">Ready to Get Started?</h2>
          <p className="text-xl text-base-content/80 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust us with their workforce needs. Let's discuss your staffing requirements today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn btn-primary btn-lg min-h-[48px] touch-manipulation"
              aria-label="Get a free consultation"
            >
              <span className="flex items-center">
                Get Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
            <a 
              href={contact.phone.href}
              className="btn btn-outline btn-lg min-h-[48px] touch-manipulation"
              aria-label="Call us now"
            >
              <span className="flex items-center">
                Call Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;