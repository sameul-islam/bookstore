import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Home from './Pages/Home';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AllProducts from './Pages/AllProducts';
import BestSellerPage from './Pages/BestSellerPage';
import AboutPage from './Pages/AboutPage';
import SignIn from './Pages/SignIn';


const App = () => {
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
    <Router>
      <div className='bg-white font-Roboto dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/bestseller' element={<BestSellerPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/signin' element={<SignIn/>} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
