import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';
import AppStore from '../components/AppStore/AppStore';
import Books from '../components/Books/Books';
import Testimonial from '../components/Testimonial/Testimonial';


const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Hero />
      <Services />
      <Banner />
      {/* <AppStore /> */}
      <Books />
      <Testimonial />
    </div>
  );
};

export default Home;
