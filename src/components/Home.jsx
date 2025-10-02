import React from 'react';
import { useSelector } from 'react-redux';
import Hero from './Hero';
import ClientList from './ClientList';
import Cta from './Cta';
import Newsletter from './Newsletter';
import Stats from './Stats';
import Testimonial from './Testimonial';
import OurVerticals from './OurVerticals';

const Home = () => {
    const imageUrls = useSelector(state => state.slides.imageUrls);
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <div className="flex flex-col items-center">
      <section className="hero w-full">
        {/* Hero Slideshow */}
        <Hero />
      
      </section>

     {/* <section className="ourvertical my-10">
      <h2 className="text-3xl text-center font-semibold">Our Verticals</h2>
      <OurVerticals />
     </section> */}

      {/* <section className="services my-10">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="service-card p-4 border rounded shadow">
            <h3 className="font-bold">Temporary Staffing</h3>
            <p>Flexible staffing solutions for your short-term needs.</p>
          </div>
          <div className="service-card p-4 border rounded shadow">
            <h3 className="font-bold">Permanent Placement</h3>
            <p>Find the right talent for your long-term positions.</p>
          </div>
          <div className="service-card p-4 border rounded shadow">
            <h3 className="font-bold">Consulting Services</h3>
            <p>Expert advice to optimize your workforce management.</p>
          </div>
        </div>
      </section>

      <section className="benefits my-10 bg-[url(../assets/banner1.jpg)] ">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <ul className="list-disc list-inside">
          <li>Extensive network of qualified candidates</li>
          <li>Personalized service tailored to your needs</li>
          <li>Fast and efficient hiring process</li>
        </ul>
      </section> */}
      <section className='stats my-10'>
        <Stats />
      </section>

      <section className="testimonials my-10">
        {/* <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic">
          "The staffing agency provided us with excellent candidates who fit our needs perfectly!"
        </blockquote> */}
        <Testimonial />
      </section>
     
      <section className="cta my-10 text-center w-full">
        <Cta />
      </section>
       <section className="clients my-10">
        <ClientList />
      </section>
      <section className="newsletter mt-10 text-center w-full"> 
        <Newsletter />
      </section>

    </div>
  );
};

export default Home;



