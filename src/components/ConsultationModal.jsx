import React from 'react';
import useContent from '../hooks/useContent';

/**
 * Consultation Modal Component
 * 
 * Displays a modal with 3-step consultation process
 * - Step 1: Call Now (triggers phone call)
 * - Step 2: Schedule Meeting (opens calendar/scheduling)
 * - Step 3: Start Consultation (contact form or booking)
 */

const ConsultationModal = ({ isOpen, onClose }) => {
  const { consultation, getContactInfo } = useContent();
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
            {consultation.title}
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
          {consultation.description}
        </p>

        {/* Steps */}
        <div className="space-y-6">
          {consultation.steps.map((step, index) => (
            <div key={index} className="card bg-base-100 border border-base-300">
              <div className="card-body">
                <div className="flex items-start gap-4">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary text-primary-content rounded-full flex items-center justify-center text-xl font-bold mb-2">
                      {step.step}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-base-content mb-2">
                      {step.title}
                    </h4>
                    <p className="text-base-content/80 mb-4">
                      {step.description}
                    </p>
                    <button
                      onClick={() => handleStepAction(step.actionType)}
                      className={`btn ${
                        step.actionType === 'call' 
                          ? 'btn-primary' 
                          : step.actionType === 'schedule'
                          ? 'btn-secondary'
                          : 'btn-accent'
                      }`}
                    >
                      {step.action}
                      {step.actionType === 'call' && (
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {step.actionType === 'schedule' && (
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                      {step.actionType === 'consult' && (
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-8 p-6 bg-base-200 rounded-lg">
          <h4 className="text-lg font-bold text-base-content mb-4 text-center">
            What You Get:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {consultation.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-base-content/80">{benefit}</span>
              </div>
            ))}
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
