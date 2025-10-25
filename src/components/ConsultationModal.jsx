import React from 'react';
import useContent from '../hooks/useContent';

/**
 * Consultation Modal Component
 * 
 * Displays a modal with our 7-step selection process
 * Shows the complete workflow from client requirements to candidate dispatch
 */

const ConsultationModal = ({ isOpen, onClose }) => {
  const { process, getContactInfo } = useContent();
  const { phoneHref } = getContactInfo();

  if (!isOpen) return null;

  const handleStepAction = (actionType) => {
    switch (actionType) {
      case 'call':
        // Trigger phone call
        window.location.href = phoneHref;
        break;
      case 'schedule':
        // Open calendar/scheduling (could be Calendly, Acuity, etc.)
        // For now, we'll open a contact form or redirect to contact page
        window.open('/contact', '_blank');
        break;
      case 'consult':
        // Open consultation booking or contact form
        window.open('/contact', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-base-content">
            Our Selection Process
          </h3>
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="text-base-content/80 text-lg mb-8 text-center">
          Follow our comprehensive 7-step process from initial requirements to candidate dispatch
        </p>

        {/* Steps */}
        <div className="space-y-4">
          {process.map((step, index) => (
            <div key={index} className="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="card-body p-6">
                <div className="flex items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-14 h-14 bg-primary text-primary-content rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    {/* <div className="text-3xl mt-2 opacity-80">
                      {step.step === 1 && "📋"}
                      {step.step === 2 && "🔍"}
                      {step.step === 3 && "👥"}
                      {step.step === 4 && "📅"}
                      {step.step === 5 && "📄"}
                      {step.step === 6 && "🎓"}
                      {step.step === 7 && "✈️"}
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-bold text-base-content mb-3 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-base-content/80 text-base leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.step === 1 && (
                      <button
                        onClick={() => window.location.href = phoneHref}
                        className="btn btn-primary btn-sm"
                      >
                        Get Started
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-8 p-6 bg-base-200 rounded-lg">
          <h4 className="text-lg font-bold text-base-content mb-4 text-center">
            Why Choose Our Process:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-base-content/80">Comprehensive documentation handling</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-base-content/80">Professional skill upgradation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-base-content/80">Complete visa processing support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-base-content/80">End-to-end immigration assistance</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-action">
          <button
            onClick={onClose}
            className="btn btn-ghost"
          >
            Close
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default ConsultationModal;
