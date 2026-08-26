import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'; 
import { Hero } from './components/Hero';
import Brands from './components/Brands';
import Process from './components/Process';
import CarList from './components/CarList';
import { Toaster } from 'react-hot-toast';
import AboutUs from './components/AboutUs';
import Review from './components/Review';
import Footer from './components/Footer';
import ContactUs from './components/ContactUS';
const App = () => {

  useEffect(() => {
    AOS.init({
      duration:1000,
      once: true
    });
  },[]);

  return (
    <>
    <Toaster position='top-right'/>
    <Navbar/>
    <Hero/>
    <Brands/>
    <Process/>
    <CarList/>
    <AboutUs/>
    <Review/>
    <ContactUs/>
    <Footer/>
    </>
  );
};

export default App