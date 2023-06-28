import React from 'react';
import {BiPhoneCall} from 'react-icons/bi';
import {MdEmail} from 'react-icons/md';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';


const ContactUsComp = () => {
  return (
     <div class="grid grid-cols-2 gap-2">
     <div className="flex justify-center h-14 bg-red-400">
     <div className="flex items-center">
         <BiPhoneCall size={26}/>
         <p className="text-sm ml-2">+90 9872012056</p>
         <MdEmail size={26} className="ml-5"/>
         <p className="text-sm ml-2">np1234@gmail.com</p>
     </div>
     </div>
     <div className="flex justify-center h-14 items-center bg-red-400">
     <a href="#" ><BsFacebook size={26}/></a>
     <a href="#"><AiFillTwitterCircle size={26} className="ml-5"/></a>
     <a href="#"><AiFillInstagram size={26} className="ml-5"/></a>
     <a href="#"><AiFillLinkedin size={26} className="ml-5"/></a>
     </div>
   </div>    
  )
}

export default ContactUsComp
