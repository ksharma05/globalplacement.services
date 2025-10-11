import React from 'react';
import useContent from '../hooks/useContent';

const About = () => {
  const { getCompanyInfo, getStats, values, timeline, team, achievements } = useContent();
  const { name, description } = getCompanyInfo();
  const { experience, clients, placements } = getStats();
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 relative overflow-hidden">
        <div className="hero-content text-center max-w-4xl mx-auto px-4 py-16">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              About Our Agency
            </h1>
            <p className="text-xl md:text-2xl text-base-content/80 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="stat bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <div className="stat-value text-primary text-3xl font-bold">{experience}</div>
                <div className="stat-title text-base-content/70">Years Experience</div>
              </div>
              <div className="stat bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <div className="stat-value text-secondary text-3xl font-bold">{clients}</div>
                <div className="stat-title text-base-content/70">Happy Clients</div>
              </div>
              <div className="stat bg-base-100/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <div className="stat-value text-accent text-3xl font-bold">{placements}</div>
                <div className="stat-title text-base-content/70">Successful Placements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="card-body p-8">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">{values.mission.icon}</div>
                <h2 className="card-title justify-center text-primary text-3xl mb-6 group-hover:text-secondary transition-colors duration-300">{values.mission.title}</h2>
                <p className="text-base-content/80 text-lg leading-relaxed text-center">
                  {values.mission.description}
                </p>
                <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                  <p className="text-sm text-base-content/70 italic text-center">
                    "{values.mission.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="card-body p-8">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300 text-center">{values.vision.icon}</div>
                <h2 className="card-title justify-center text-primary text-3xl mb-6 group-hover:text-secondary transition-colors duration-300">{values.vision.title}</h2>
                <p className="text-base-content/80 text-lg leading-relaxed text-center">
                  {values.vision.description}
                </p>
                <div className="mt-6 p-4 bg-secondary/10 rounded-xl">
                  <p className="text-sm text-base-content/70 italic text-center">
                    "{values.vision.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-base-content">Our Core Values</h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.coreValues.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="card-body text-center p-6">
                  <div className={`text-5xl mb-4 ${index % 2 === 0 ? 'group-hover:animate-bounce' : 'group-hover:animate-pulse'}`}>{value.icon}</div>
                  <h3 className="card-title justify-center text-primary text-xl mb-3 group-hover:text-secondary transition-colors duration-300">{value.title}</h3>
                  <p className="text-base-content/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="w-full bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-base-content">Our Journey</h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted partner in workforce solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className={`timeline-marker bg-${item.color} text-${item.color}-content`}>
                    <span className="text-lg font-bold">{item.year}</span>
                  </div>
                  <div className="timeline-content">
                    <div className="card bg-base-200 shadow-lg">
                      <div className="card-body p-6">
                        <h3 className={`card-title text-${item.color} text-xl mb-3`}>{item.title}</h3>
                        <p className="text-base-content/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-base-content">Meet Our Team</h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Experienced professionals who are passionate about connecting talent with opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="card-body text-center p-6">
                  <div className="avatar mb-4">
                    <div className={`w-24 h-24 rounded-full ${index === 0 ? 'bg-primary text-primary-content' : index === 1 ? 'bg-secondary text-secondary-content' : 'bg-accent text-accent-content'} flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                      {member.initials}
                    </div>
                  </div>
                  <h3 className="card-title justify-center text-primary text-xl mb-2 group-hover:text-secondary transition-colors duration-300">{member.name}</h3>
                  <p className="text-base-content/70 font-medium mb-3">{member.position}</p>
                  <p className="text-base-content/80 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section className="w-full bg-base-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-base-content">Our Achievements</h2>
            <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
              Recognized excellence in staffing and workforce solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                <p className="text-sm text-base-content/70">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-base-content">Ready to Work With Us?</h2>
          <p className="text-xl text-base-content/80 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients and thousands of successful candidates who trust us with their workforce needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="btn btn-primary btn-lg min-h-[48px] touch-manipulation"
              aria-label="Get started with our staffing services"
            >
              <span className="flex items-center">
                Get Started Today
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button 
              className="btn btn-outline btn-lg min-h-[48px] touch-manipulation"
              aria-label="Contact us for more information"
            >
              <span className="flex items-center">
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;