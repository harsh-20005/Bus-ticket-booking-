import React from 'react';
import Hero from './hero/Hero';
import Search from './serch/Serch';
import Category from './category/Category';
import Offer from './offer/offer';
import GenerateBtn from './generatebtn/GenerateBtn';
import Testimonials from './testimonials/Testimonials';
import Steps from './steps/Steps';


const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
      <Steps />
      <Category />
      <Offer />
      <Testimonials />
      <GenerateBtn />
    </div>
  );
};

export default Home;
