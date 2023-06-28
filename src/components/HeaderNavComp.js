import React from 'react'

const HeaderNavComp = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div>
        <p className="text-3xl font-bold text-red-700">Flyinn</p>
        <p className="text-xs text-center text-white">Budget</p>
        </div>
      </div>
      <div className="col-span-3 p-5 flex justify-center items-center">
        <a href="index.html">
            <div className="border-b-[2px] hover:border-b-yellow-400 pb-2">
                <p className="text-red-500">Home</p>
            </div>
        </a>
        <a href="index.html" className="ml-5">
            <div className="border-b-[2px] hover:border-b-yellow-400 pb-2">
                <p className="text-red-500">About Us</p>
            </div>
        </a>
        <a href="index.html" className="ml-5">
            <div className="border-b-[2px] hover:border-b-yellow-400 pb-2">
                <p className="text-red-500">Booking Terms</p>
            </div>
        </a>
        <a href="index.html" className="ml-5">
            <div className="border-b-[2px] hover:border-b-yellow-400 pb-2">
                <p className="text-red-500">Flights</p>
            </div>
        </a>
        <a href="index.html" className="ml-5">
            <div className="border-b-[2px] hover:border-b-yellow-400 pb-2">
                <p className="text-red-500">Get in Touch</p>
            </div>
        </a>
        <a href="index.html" className="ml-5">
            <div className="py-2 px-5 border-white border-[2px]">
                <p className="text-red-500">Find Flights</p>
            </div>
        </a>
      </div>
    </div>
  )
}

export default HeaderNavComp
