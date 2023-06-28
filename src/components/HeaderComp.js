import React from 'react';
import FlyInnImage from '../assets/airport-w6v47yjhxcohsjgf.jpg'
import HeaderNavComp from './HeaderNavComp';
import FlightBookingFormComp from './FlightBookingFormComp';
import ButtonYellow from './ButtonYellow';

const HeaderComp = () => {
  return (
    <div className="w-full h-[80%] bg-red-300" style={{
        backgroundImage: `url("${FlyInnImage}")` ,
    }}>
      <HeaderNavComp/>
      <div className="grid grid-cols-2 h-[80%]">
          <div className="flex p-5 items-center">
            <div>
            <p className="text-white text-xl">Flyinn budget</p>
            <p className="text-white text-4xl">We are very reliable</p>
            <p className="text-yellow-400 text-4xl">Professionl experienced</p>
            <p className="text-white text-xs"><span className="text-yellow-400">Flyinn budget</span>is the versatile website expowering you</p>
            <p className="text-white text-xs">full services airline<span className="text-yellow-400"> reducing fairs</span></p>
            <ButtonYellow label={"FIND FLIGHT"} extrastyle={" flex mt-5"}/>
            </div>
          </div>
          <div className="flex">
            <FlightBookingFormComp/>
          </div>
      </div>
    </div>
  )
}

export default HeaderComp
