import React from 'react'
import InputTextComp from './InputTextComp';
import { IoIosAirplane } from 'react-icons/io';
import ButtonYellow from './ButtonYellow';

const FlightBookingFormComp = () => {
  return (
    <div className="bg-white pb-5 w-[25%] rounded-3xl absolute bottom-12 shadow shadow-gray-300">
        <div className="p-5">
      <p className="font-semibold">BOOK CHEAP <span className="text-yellow-500">FLIGHTS</span></p>
      </div>
      <div className=" flex bg-black text-white justify-center py-3">
        <div className="flex">
           <input className="text-white" type="radio" id="age1" name="age" value="30"/>
           <p className="text-sm">One way</p>
           </div>
           <div className="flex ml-3">
           <input className="text-white" type="radio" id="age1" name="age" value="30"/>
           <p className="text-sm ml-3">Round trip</p>
           </div>
      </div>
      <div className="p-5">
            <InputTextComp 
            image={<IoIosAirplane/>}
             placeholder={"Enter City"} 
            label="Departure"
            />
             <InputTextComp 
            image={<IoIosAirplane/>}
             placeholder={"Enter City"} 
            label="Departure"
            extraStyle={"mt-2"}
            />
             <InputTextComp 
            image={<IoIosAirplane/>}
             placeholder={"Enter City"} 
            label="Departure"
            extraStyle={"mt-2"}
            />
             <InputTextComp 
            image={<IoIosAirplane/>}
             placeholder={"Enter City"} 
            label="Departure"
            extraStyle={"mt-2"}
            />
             <InputTextComp 
            image={<IoIosAirplane/>}
             placeholder={"Enter City"} 
            label="Departure"
            extraStyle={"mt-2"}
            />
             <InputTextComp 
            image={<IoIosAirplane/>}
             placeholder={"Enter City"} 
            label="Departure"
            extraStyle={"mt-2"}
            />
      </div>
      <div className="px-5">
      <ButtonYellow label={"FIND FLIGHT"} extrastyle={"mt-5"}/>
      </div>
    </div>
  )
}

export default FlightBookingFormComp
