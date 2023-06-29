import React from 'react'
import ContactUsComp from '../../components/ContactUsComp'
import HeaderComp from '../../components/HeaderComp';
import ServicesComp from '../../components/ServicesComp';
import LowestFareComp from '../../components/LowestFareComp';

export const LandingPage = () => {
  return (
     <div className="w-screen h-screen">
        <ContactUsComp/>
        <HeaderComp/>
        <ServicesComp/>
        <LowestFareComp/>
     </div>
  );

};