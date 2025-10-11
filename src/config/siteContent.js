/**
 * Site Content Configuration
 * 
 * This file contains all static content for the website.
 * Update this file to change content across the entire site.
 * 
 * @version 1.0.0
 * @author Global Placement Services
 */

export const siteContent = {
  // Company Information
  company: {
    name: "Global Placement Services",
    tagline: "Connecting skilled blue-collar professionals with employers who value expertise, dedication, and quality workmanship",
    description: "Connecting skilled blue-collar professionals with employers who value expertise, dedication, and quality workmanship since 2010.",
    founded: 2010,
    logo: "/src/assets/logo.jpeg"
  },

  // Contact Information
  contact: {
    phone: {
      display: "+91-6376920701",
      href: "tel:+916376920701",
      whatsapp: "https://wa.me/916376920701"
    },
    email: {
      display: "bss@globalplacement.services",
      href: "mailto:bss@globalplacement.services"
    },
    address: {
      company: "Global Placement Services",
      line1: "Bhagwati Market, Kishan Circle",
      line2: "Ramu ka Bas, Jaipur Road",
      line3: "Sikar, Rajasthan 332021",
      full: "Bhagwati Market, Kishan Circle, Ramu ka Bas, Jaipur Road, Sikar, Rajasthan 332021"
    },
    businessHours: {
      weekdays: {
        label: "Monday - Friday",
        hours: "9:00 AM - 6:00 PM"
      },
      saturday: {
        label: "Saturday", 
        hours: "10:00 AM - 4:00 PM"
      },
      emergency: "Available 24/7 for urgent staffing needs"
    }
  },

  // Company Statistics
  stats: {
    experience: "14+",
    clients: "500+",
    placements: "8K+",
    satisfaction: "99.9%",
    responseTime: "Within 2 hours",
    industries: "8+",
    activeWorkers: "4,750+"
  },

  // Hero Section Content
  hero: {
    trustBadge: "⭐ Trusted by 500+ Companies",
    headline: {
      part1: "Find Top",
      highlight1: "Blue-Collar",
      part2: "Talent in",
      highlight2: "24 Hours"
    },
    subheading: "Connect with skilled workers across 8+ industries. From construction and manufacturing to healthcare and hospitality - we deliver qualified candidates fast.",
    benefits: [
      "🚀 24-Hour Placement",
      "✅ 99.9% Success Rate", 
      "🌟 Verified Workers"
    ],
    trustIndicators: {
      label: "Trusted by leading companies across industries",
      industries: ["MANUFACTURING", "HEALTHCARE", "CONSTRUCTION", "HOSPITALITY"]
    }
  },

  // Services
  services: {
    main: [
      {
        icon: "👷‍♂️",
        title: "Temporary Staffing",
        description: "Get skilled workers for your short-term projects, seasonal demands, or urgent requirements. Our extensive network ensures quick deployment.",
        features: [
          "24-48 hour deployment",
          "Pre-screened candidates", 
          "Flexible contracts"
        ]
      },
      {
        icon: "🏢",
        title: "Permanent Placement",
        description: "Find the perfect long-term fit for your team. Our thorough vetting process ensures quality candidates who align with your company culture.",
        features: [
          "Comprehensive background checks",
          "Skills assessment",
          "90-day guarantee"
        ]
      },
      {
        icon: "💼",
        title: "Workforce Consulting",
        description: "Optimize your workforce strategy with expert guidance on recruitment, retention, and operational efficiency.",
        features: [
          "Strategic planning",
          "Process optimization",
          "Training programs"
        ]
      }
    ],
    additional: [
      {
        icon: "🔍",
        title: "Background Verification"
      },
      {
        icon: "📋", 
        title: "Skills Testing"
      },
      {
        icon: "🎓",
        title: "Training & Development"
      },
      {
        icon: "📊",
        title: "Performance Analytics"
      }
    ]
  },

  // Industry Verticals
  verticals: [
    {
      icon: "⚙️",
      title: "Engineering / Oil & Gas",
      description: "Skilled engineers, technicians, and field workers for energy projects",
      workers: "500+"
    },
    {
      icon: "🏨",
      title: "Hospitality",
      description: "Front desk, housekeeping, food service, and guest relations staff",
      workers: "800+"
    },
    {
      icon: "💻",
      title: "Information Technology",
      description: "Technical support, data entry, and IT infrastructure specialists",
      workers: "300+"
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      description: "Production workers, machine operators, and quality control specialists",
      workers: "1200+"
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description: "Nursing assistants, medical technicians, and healthcare support staff",
      workers: "600+"
    },
    {
      icon: "🏢",
      title: "Facility Management",
      description: "Maintenance technicians, janitorial staff, and security personnel",
      workers: "400+"
    },
    {
      icon: "🍽️",
      title: "Food & Beverage Catering",
      description: "Chefs, servers, kitchen staff, and catering professionals",
      workers: "700+"
    },
    {
      icon: "✈️",
      title: "Aviation, MRO, Aerospace & Defence",
      description: "Aircraft technicians, maintenance crews, and specialized engineers",
      workers: "250+"
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      icon: "⚡",
      title: "Lightning Fast Placement",
      description: "Our streamlined process and extensive candidate database ensure we can fill positions in 24-48 hours, keeping your operations running smoothly."
    },
    {
      icon: "🎯",
      title: "Quality Guaranteed",
      description: "Every candidate undergoes rigorous screening, skills testing, and background verification. We stand behind our placements with a 90-day guarantee."
    },
    {
      icon: "🏭",
      title: "Industry Specialists",
      description: "With deep expertise across 8+ industries, we understand your specific requirements and deliver candidates who truly fit your needs."
    },
    {
      icon: "💰",
      title: "Cost-Effective Solutions",
      description: "Reduce hiring costs by up to 40% with our efficient processes. No hidden fees, transparent pricing, and flexible payment options."
    },
    {
      icon: "🛠️",
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to address your workforce needs and ensure seamless operations."
    },
    {
      icon: "📈",
      title: "Proven Results",
      description: "99.9% client satisfaction rate with over 8,000 successful placements. Join hundreds of satisfied clients who trust us with their workforce needs."
    }
  ],

  // Process Steps
  process: [
    {
      step: 1,
      title: "Tell Us Your Needs",
      description: "Share your requirements, timeline, and specific skills needed."
    },
    {
      step: 2,
      title: "We Find Perfect Matches",
      description: "Our team screens and matches qualified candidates to your criteria."
    },
    {
      step: 3,
      title: "Start Working Together",
      description: "Onboard your new team members and begin productive collaboration."
    }
  ],

  // Team Members
  team: [
    {
      initials: "JS",
      name: "John Smith",
      position: "Founder & CEO",
      description: "15+ years in staffing industry. Passionate about creating opportunities for skilled workers and helping businesses grow."
    },
    {
      initials: "MJ",
      name: "Maria Johnson",
      position: "Head of Operations",
      description: "Expert in workforce management with 12+ years experience. Ensures every placement meets our high standards."
    },
    {
      initials: "DW",
      name: "David Wilson",
      position: "Client Relations Manager",
      description: "Builds strong relationships with our clients, understanding their unique needs and delivering tailored solutions."
    }
  ],

  // Company Values
  values: {
    mission: {
      icon: "🎯",
      title: "Our Mission",
      description: "To connect skilled blue-collar workers with employers who value their expertise and dedication, creating meaningful partnerships that drive success for both parties.",
      quote: "Every placement is more than a job match – it's a career opportunity and a business solution."
    },
    vision: {
      icon: "🚀",
      title: "Our Vision",
      description: "To be the leading staffing agency for blue-collar workers globally, recognized for our commitment to quality, innovation, and exceptional service across all industries.",
      quote: "Building bridges between talent and opportunity, one placement at a time."
    },
    coreValues: [
      {
        icon: "🤝",
        title: "Integrity",
        description: "We operate with complete transparency and honesty in all our business relationships and communications."
      },
      {
        icon: "🙏",
        title: "Respect",
        description: "We treat every individual with dignity, valuing their skills, experience, and professional aspirations."
      },
      {
        icon: "⭐",
        title: "Excellence",
        description: "We strive for the highest standards in every placement, ensuring quality matches that exceed expectations."
      },
      {
        icon: "🤝",
        title: "Collaboration",
        description: "We work closely with both clients and candidates to create successful, long-term professional partnerships."
      }
    ]
  },

  // Company Timeline
  timeline: [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started with a vision to revolutionize blue-collar staffing, focusing on quality over quantity and building lasting relationships.",
      color: "primary"
    },
    {
      year: "2015",
      title: "Expansion Phase",
      description: "Expanded operations to cover 5 major cities, establishing partnerships with leading construction and manufacturing companies.",
      color: "secondary"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched our digital platform, streamlining the recruitment process and improving candidate experience significantly.",
      color: "accent"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as the top-rated staffing agency in our region, with over 8,000 successful placements and 99.9% client satisfaction.",
      color: "success"
    }
  ],

  // Achievements & Certifications
  achievements: [
    {
      icon: "🏆",
      title: "Industry Award",
      description: "Best Staffing Agency 2024"
    },
    {
      icon: "✅",
      title: "ISO Certified",
      description: "Quality Management System"
    },
    {
      icon: "🔒",
      title: "Data Security",
      description: "GDPR Compliant"
    },
    {
      icon: "⭐",
      title: "5-Star Rating",
      description: "Client Satisfaction"
    }
  ],

  // Social Media Links
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    whatsapp: "https://wa.me/919829055830"
  },

  // Trust Indicators
  trustIndicators: [
    {
      icon: "✓",
      label: "ISO Certified",
      color: "primary"
    },
    {
      icon: "✓",
      label: "GDPR Compliant", 
      color: "secondary"
    },
    {
      icon: "✓",
      label: "24/7 Support",
      color: "accent"
    }
  ],

  // FAQ Content
  faqs: [
    {
      question: "How quickly can you provide staff?",
      answer: "We can typically provide qualified candidates within 24-48 hours for most positions."
    },
    {
      question: "Do you provide temporary or permanent staffing?",
      answer: "We offer both temporary and permanent staffing solutions based on your specific needs."
    },
    {
      question: "What industries do you serve?",
      answer: "We specialize in construction, manufacturing, logistics, hospitality, and other blue-collar industries."
    }
  ],

  // Call-to-Action Messages
  ctas: {
    consultation: {
      title: "Get Free Consultation",
      description: "Let's discuss your staffing needs and find the perfect solution for your business."
    },
    project: {
      title: "Start Your Project",
      description: "Join hundreds of satisfied clients who trust us with their workforce needs."
    },
    contact: {
      title: "Contact Us Now",
      description: "See why industry leaders choose our staffing solutions. Let's discuss your specific needs today."
    },
    ready: {
      title: "Ready to Get Started?",
      description: "Join hundreds of satisfied clients and thousands of successful candidates who trust us with their workforce needs."
    }
  },

  // Legal Policies
  policies: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "December 2024",
      sections: [
        {
          heading: "Information We Collect",
          content: "We collect information you provide directly to us, such as when you create an account, submit a job application, or contact us. This may include your name, email address, phone number, work experience, skills, and other relevant information for job placement services."
        },
        {
          heading: "How We Use Your Information",
          content: "We use the information we collect to provide, maintain, and improve our services, including matching candidates with employers, processing applications, communicating with you about opportunities, and providing customer support."
        },
        {
          heading: "Information Sharing",
          content: "We may share your information with potential employers when you apply for positions through our platform. We do not sell your personal information to third parties. We may share information with service providers who assist us in operating our platform."
        },
        {
          heading: "Data Security",
          content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
        },
        {
          heading: "Your Rights",
          content: "You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below."
        },
        {
          heading: "Cookies and Tracking",
          content: "We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and personalize content. You can control cookie settings through your browser preferences."
        },
        {
          heading: "Changes to This Policy",
          content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the 'last updated' date."
        },
        {
          heading: "Contact Us",
          content: "If you have any questions about this Privacy Policy, please contact us at bss@globalplacement.services or call us at +91-6376920701."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "December 2024",
      sections: [
        {
          heading: "Acceptance of Terms",
          content: "By accessing or using Global Placement Services' website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
        },
        {
          heading: "Service Description",
          content: "Global Placement Services provides staffing and recruitment services, connecting skilled blue-collar professionals with employers. Our services include temporary staffing, permanent placement, workforce consulting, and related services."
        },
        {
          heading: "User Responsibilities",
          content: "Users are responsible for providing accurate and complete information, maintaining the confidentiality of their account credentials, and using our services in compliance with applicable laws and regulations."
        },
        {
          heading: "Prohibited Uses",
          content: "You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. You may not transmit any viruses, malware, or other harmful code. You may not attempt to gain unauthorized access to our systems."
        },
        {
          heading: "Intellectual Property",
          content: "All content on our website, including text, graphics, logos, images, and software, is the property of Global Placement Services or its licensors and is protected by copyright and other intellectual property laws."
        },
        {
          heading: "Limitation of Liability",
          content: "Global Placement Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or other intangible losses resulting from your use of our services."
        },
        {
          heading: "Indemnification",
          content: "You agree to defend, indemnify, and hold harmless Global Placement Services and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms."
        },
        {
          heading: "Termination",
          content: "We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms of Service."
        },
        {
          heading: "Governing Law",
          content: "These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles."
        },
        {
          heading: "Contact Information",
          content: "For questions about these Terms of Service, please contact us at bss@globalplacement.services or call +91-6376920701."
        }
      ]
    },
    cookies: {
      title: "Cookie Policy",
      lastUpdated: "December 2024",
      sections: [
        {
          heading: "What Are Cookies",
          content: "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners."
        },
        {
          heading: "How We Use Cookies",
          content: "We use cookies to enhance your browsing experience, analyze website traffic, remember your preferences, and provide personalized content. Cookies help us understand how visitors interact with our website and improve our services."
        },
        {
          heading: "Types of Cookies We Use",
          content: "Essential Cookies: Required for basic website functionality. Analytics Cookies: Help us understand website usage and performance. Preference Cookies: Remember your settings and preferences. Marketing Cookies: Used to deliver relevant advertisements and track campaign effectiveness."
        },
        {
          heading: "Third-Party Cookies",
          content: "We may use third-party services that set cookies on our website, such as Google Analytics for website analytics, social media platforms for sharing features, and advertising networks for targeted advertisements."
        },
        {
          heading: "Managing Cookies",
          content: "You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified before new cookies are set. However, disabling cookies may affect website functionality."
        },
        {
          heading: "Cookie Retention",
          content: "Cookies have different lifespans. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a specified period or until you delete them."
        },
        {
          heading: "Updates to This Policy",
          content: "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes."
        },
        {
          heading: "Contact Us",
          content: "If you have questions about our use of cookies, please contact us at bss@globalplacement.services or call +91-6376920701."
        }
      ]
    },
    accessibility: {
      title: "Accessibility Statement",
      lastUpdated: "December 2024",
      sections: [
        {
          heading: "Our Commitment",
          content: "Global Placement Services is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards."
        },
        {
          heading: "Accessibility Standards",
          content: "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines help make web content more accessible to people with disabilities and user-friendly for everyone."
        },
        {
          heading: "Accessibility Features",
          content: "Our website includes features such as keyboard navigation support, alt text for images, proper heading structure, color contrast compliance, and screen reader compatibility to enhance accessibility."
        },
        {
          heading: "Assistive Technologies",
          content: "We test our website with various assistive technologies including screen readers, voice recognition software, and keyboard-only navigation to ensure compatibility and usability."
        },
        {
          heading: "Ongoing Efforts",
          content: "We regularly audit our website for accessibility issues and work to address any barriers. We also provide training to our team on accessibility best practices and inclusive design principles."
        },
        {
          heading: "Feedback and Support",
          content: "We welcome feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us. We will respond within 2 business days."
        },
        {
          heading: "Alternative Formats",
          content: "If you need information from our website in an alternative format, such as large print, audio, or Braille, please contact us and we will work to provide the information in your preferred format."
        },
        {
          heading: "Third-Party Content",
          content: "Some content on our website may be provided by third parties. While we strive to ensure accessibility, we cannot guarantee the accessibility of all third-party content."
        },
        {
          heading: "Contact Information",
          content: "For accessibility-related questions or to report accessibility issues, please contact us at bss@globalplacement.services or call +91-6376920701. We are committed to responding to accessibility feedback promptly."
        }
      ]
    }
  }
};

export default siteContent;
