import { useSelector } from 'react-redux';
import {
  selectContent,
  selectCompany,
  selectContact,
  selectStats,
  selectHero,
  selectServices,
  selectVerticals,
  selectWhyChooseUs,
  selectProcess,
  selectTeam,
  selectValues,
  selectTimeline,
  selectAchievements,
  selectSocial,
  selectTrustIndicators,
  selectFaqs,
  selectCtas,
  selectPolicies,
  selectConsultation
} from '../features/content/contentSlice';

/**
 * Custom hook for accessing website content
 * 
 * Provides easy access to centralized content from Redux store.
 * Returns all content sections with convenient selectors.
 * 
 * @returns {Object} Content sections and utility functions
 */
export const useContent = () => {
  // Get all content sections from Redux store
  const content = useSelector(selectContent);
  const company = useSelector(selectCompany);
  const contact = useSelector(selectContact);
  const stats = useSelector(selectStats);
  const hero = useSelector(selectHero);
  const services = useSelector(selectServices);
  const verticals = useSelector(selectVerticals);
  const whyChooseUs = useSelector(selectWhyChooseUs);
  const process = useSelector(selectProcess);
  const team = useSelector(selectTeam);
  const values = useSelector(selectValues);
  const timeline = useSelector(selectTimeline);
  const achievements = useSelector(selectAchievements);
  const social = useSelector(selectSocial);
  const trustIndicators = useSelector(selectTrustIndicators);
  const faqs = useSelector(selectFaqs);
  const ctas = useSelector(selectCtas);
  const policies = useSelector(selectPolicies);
  const consultation = useSelector(selectConsultation);

  // Utility functions for common content access patterns
  const getContactInfo = () => ({
    phone: contact.phone.display,
    phoneHref: contact.phone.href,
    email: contact.email.display,
    emailHref: contact.email.href,
    whatsapp: contact.phone.whatsapp,
    address: contact.address.full
  });

  const getCompanyInfo = () => ({
    name: company.name,
    tagline: company.tagline,
    description: company.description,
    founded: company.founded
  });

  const getStats = () => ({
    experience: stats.experience,
    clients: stats.clients,
    placements: stats.placements,
    satisfaction: stats.satisfaction
  });

  return {
    // All content sections
    content,
    company,
    contact,
    stats,
    hero,
    services,
    verticals,
    whyChooseUs,
    process,
    team,
    values,
    timeline,
    achievements,
    social,
    trustIndicators,
    faqs,
    ctas,
    policies,
    consultation,
    
    // Utility functions
    getContactInfo,
    getCompanyInfo,
    getStats
  };
};

export default useContent;
