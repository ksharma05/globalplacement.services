import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useContent from '../hooks/useContent';

/**
 * Policy Page Component
 * 
 * Displays legal policy pages with clean, readable layout.
 * Handles Privacy Policy, Terms of Service, Cookie Policy, and Accessibility Statement.
 * 
 * Features:
 * - Table of contents with jump links
 * - Smooth scrolling to sections
 * - Back to top button
 * - Responsive design
 * - Clean typography for readability
 */

const PolicyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { policies } = useContent();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Extract policy type from URL path
  const policyType = location.pathname.substring(1); // Remove leading slash
  
  // Get policy data based on URL
  const policy = policies[policyType];

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Redirect to 404 if policy doesn't exist
  useEffect(() => {
    if (!policy) {
      navigate('/404');
    }
  }, [policy, navigate]);

  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate section ID from heading
  const generateSectionId = (heading) => {
    return heading.toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/--+/g, '-'); // Replace multiple hyphens with single
  };

  // Don't render if policy doesn't exist (will redirect)
  if (!policy) {
    return null;
  }

  return (
    <div className="min-h-screen bg-base-100">
      {/* Header Section */}
      <div className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
              {policy.title}
            </h1>
            <p className="text-base-content/70 text-lg">
              Last updated: {policy.lastUpdated}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar on desktop */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-base-200 rounded-lg p-6">
                  <h2 className="font-bold text-lg text-base-content mb-4">
                    Table of Contents
                  </h2>
                  <nav className="space-y-2">
                    {policy.sections.map((section, index) => {
                      const sectionId = generateSectionId(section.heading);
                      return (
                        <button
                          key={index}
                          onClick={() => scrollToSection(sectionId)}
                          className="block w-full text-left text-sm text-base-content/80 hover:text-primary transition-colors duration-200 py-1"
                        >
                          {section.heading}
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </div>

            {/* Policy Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                {policy.sections.map((section, index) => {
                  const sectionId = generateSectionId(section.heading);
                  return (
                    <div key={index} id={sectionId} className="mb-8">
                      <h2 className="text-2xl font-bold text-base-content mb-4">
                        {section.heading}
                      </h2>
                      <div className="text-base-content/90 leading-relaxed space-y-4">
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          paragraph.trim() && (
                            <p key={pIndex} className="mb-4">
                              {paragraph}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 bg-base-200 rounded-lg">
                <h3 className="text-xl font-bold text-base-content mb-4">
                  Questions or Concerns?
                </h3>
                <p className="text-base-content/90 mb-4">
                  If you have any questions about this {policy.title.toLowerCase()}, please don't hesitate to contact us.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-base-content/80">bss@globalplacement.services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-base-content/80">+91-6376920701</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 btn btn-primary btn-circle shadow-lg z-50"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default PolicyPage;
