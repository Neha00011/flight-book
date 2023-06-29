import React from 'react';
import CoinImage from "../assets/coin.jpg";

export const ServiceComp = () => {

      const ServiceItems = () => {
            return(
                <div className="mt-5">
                <div className=" flex w-[50px] h-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
                <img src={CoinImage} className="w-[40px] h-[30px]"/>
            </div>
            <p className="text-black text-lg mt-3">price beating guarantee</p>
            <div className="w-[200px] mt-2">
            <p className="text-sm text-gray-500">this is the dummy text we will modify it later
            </p>
            </div>
            </div>
            );
      };

  return (
    <div className="h-[80%] px-20 py-20">
      <div className="grid grid-cols-2 gap-2 h-[90%]">
      <div>
        <p className="text-sm">best choices</p>
        <p className="text-3xl mt-1 ">why should<br></br> you use <span className="text-[#3781c5]"> {" "}our <br></br>services</span></p>
        <ServiceItems/>
      </div>
      <div>
        <div className="flex justify-between">
             <ServiceItems/>
             <ServiceItems/>
        </div>
        <div className="flex justify-between">
             <ServiceItems/>
             <ServiceItems/>
        </div>
      </div> 
      </div>
    </div>
  );
};
 export default ServiceComp
