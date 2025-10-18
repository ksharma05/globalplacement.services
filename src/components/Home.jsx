import React, { Suspense, lazy, useState } from 'react';
import { useSelector } from 'react-redux';
import Hero from './Hero';
import Stats from './Stats';
import OurVerticals from './OurVerticals';
import SkeletonLoader from './SkeletonLoader';
import ErrorBoundary from './ErrorBoundary';
import FloatingActionButton from './FloatingActionButton';
import ConsultationModal from './ConsultationModal';
import useContent from '../hooks/useContent';

// Lazy load below-the-fold components
const ClientList = lazy(() => import('./ClientList'));
const Cta = lazy(() => import('./Cta'));
const Newsletter = lazy(() => import('./Newsletter'));
const Testimonial = lazy(() => import('./Testimonial'));

const Home = () => {
  const imageUrls = useSelector(state => state.slides.imageUrls);
  const { services, whyChooseUs, process, ctas, getContactInfo } = useContent();
  const [showConsultationModal, setShowConsultationModal] = useState(false);
  const { phoneHref } = getContactInfo();

  const handleConsultationClick = () => {
    // First trigger the call
    window.location.href = phoneHref;
    // Then show the modal
    setShowConsultationModal(true);
  };

  const handleProcessClick = () => {
    setShowConsultationModal(true);
  };
    
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="hero w-full">
        <Hero />
      </section>

      {/* Services Section */}
      <section className="w-full bg-base-200">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-base-content">Our Comprehensive Services</h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              From temporary staffing to permanent placement, we provide end-to-end workforce solutions tailored to your business needs across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.main.map((service, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="card-body text-center p-8">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="card-title justify-center text-primary text-2xl mb-4 group-hover:text-secondary transition-colors duration-300">{service.title}</h3>
                  <p className="text-base-content/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 text-sm text-base-content/60">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2">
                        <span className="badge badge-primary badge-sm">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-8 text-base-content">Additional Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {services.additional.map((service, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <p className="text-sm font-medium text-base-content">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progressive CTA 1 - After Services */}
      <section className="w-full bg-primary/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-base-content">{ctas.consultation.title}</h3>
          <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
            {ctas.consultation.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleConsultationClick}
              className="btn btn-primary btn-lg min-h-[48px] touch-manipulation"
              aria-label="Get a free consultation for your staffing needs"
            >
              <span className="flex items-center">
                Get Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
            <button 
              onClick={handleProcessClick}
              className="btn btn-outline btn-lg min-h-[48px] touch-manipulation"
              aria-label="Learn about our staffing process"
            >
              <span className="flex items-center">
                View Our Process
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section - Early Social Proof */}
      <section className="w-full bg-base-100">
        <Stats />
      </section>

      {/* Our Verticals Section */}
      <section className="w-full bg-base-200">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-base-content">Our Industry Verticals</h2>
          <OurVerticals />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-base-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-base-content">Why Choose Our Staffing Agency?</h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              We're not just another staffing agency. We're your strategic workforce partner, delivering results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="card-body text-center p-6">
                  <div className={`text-5xl mb-4 ${index < 2 ? (index === 0 ? 'group-hover:animate-bounce' : 'group-hover:animate-pulse') : ''}`}>{item.icon}</div>
                  <h3 className="card-title justify-center text-primary text-xl mb-3 group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                  <p className="text-base-content/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">Our Simple 3-Step Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 ${index === 0 ? 'bg-primary text-primary-content' : index === 1 ? 'bg-secondary text-secondary-content' : 'bg-accent text-accent-content'} rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 hover-lift ${index > 0 ? `animate-delay-${index * 100}` : ''}`}>{step.step}</div>
                  <h4 className={`font-semibold text-lg mb-2 text-base-content group-hover:${index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-accent'} transition-colors duration-300`}>{step.title}</h4>
                  <p className="text-base-content/70 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Progressive CTA 2 - After Why Choose Us */}
      <section className="w-full bg-secondary/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-base-content">{ctas.project.title}</h3>
          <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
            {ctas.project.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button 
              className="btn btn-secondary btn-lg min-h-[48px] touch-manipulation"
              aria-label="Start your staffing project with us"
            >
              <span className="flex items-center">
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button> */}
            <button 
              className="btn btn-outline btn-lg min-h-[48px] touch-manipulation"
              aria-label="Download our company brochure"
            >
              <span className="flex items-center">
                Download Brochure
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-base-200">
        <ErrorBoundary>
          <Suspense fallback={<div className="container mx-auto px-4 py-16"><SkeletonLoader type="testimonial" count={3} /></div>}>
            <Testimonial />
          </Suspense>
        </ErrorBoundary>
      </section>
     
      {/* Clients Section */}
      <section className="w-full bg-base-100">
        <div className="container mx-auto px-4 py-16">
          <ErrorBoundary>
            <Suspense fallback={<SkeletonLoader type="client" count={6} />}>
              <ClientList />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      {/* Progressive CTA 3 - After Clients */}
      <section className="w-full bg-accent/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-base-content">{ctas.contact.title}</h3>
          <p className="text-lg text-base-content/80 mb-8 max-w-2xl mx-auto">
            {ctas.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn btn-accent btn-lg min-h-[48px] touch-manipulation"
              aria-label="Contact us immediately for staffing solutions"
            >
              <span className="flex items-center">
                Contact Us Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </button>
            <button 
              className="btn btn-outline btn-lg min-h-[48px] touch-manipulation"
              aria-label="Schedule a call to discuss your needs"
            >
              <span className="flex items-center">
                Schedule Call
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="w-full bg-base-200">
        <div className="container mx-auto px-4 py-16">
          <ErrorBoundary>
            <Suspense fallback={<SkeletonLoader type="default" />}>
              <Cta />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-base-100">
        <div className="container mx-auto px-4 py-16">
          <ErrorBoundary>
            <Suspense fallback={<SkeletonLoader type="default" />}>
              <Newsletter />
            </Suspense>
          </ErrorBoundary>
        </div>
      </section>

      {/* Floating Action Button */}
      <FloatingActionButton />

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={showConsultationModal} 
        onClose={() => setShowConsultationModal(false)} 
      />
    </div>
  );
};

export default Home;



