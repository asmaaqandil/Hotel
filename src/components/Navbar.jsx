
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa'; 
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const texts = {
    home: 'Home',
    about: 'About',
    projects: 'Rooms',
    reviews: 'Reviews',
    Contact: 'Contact',
    signup: 'Sign Up',
  };

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className={`container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent text-left`} dir="ltr">
        
        <img src={logo} alt="Logo" className="h-12 w-auto rounded-2xl" />

        
        <ul className="hidden md:flex gap-7 text-black">
          <a href="#Header" className="cursor-pointer hover:text-yellow-500 font-semibold">
            {texts.home}
          </a>
          <a href="#About" className="cursor-pointer hover:text-yellow-500 font-semibold">
            {texts.about}
          </a>
          <a href="#Rooms" className="cursor-pointer hover:text-yellow-500 font-semibold">
            {texts.projects}
          </a>
          <a href="#reviews" className="cursor-pointer hover:text-yellow-500 font-semibold">
            {texts.reviews}
          </a>
          
          <a href="#Contact" className="cursor-pointer hover:text-yellow-500 font-semibold">
            {texts.Contact}
          </a>
          
        </ul>

       
        <button
          className="hidden md:block bg-black text-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black duration-300 right-14"
        >
          {texts.signup}
        </button>

      
        <button
          className="absolute top-4 right-4 bg-black p-3 rounded-full text-yellow-500 shadow-lg cursor-pointer font-semibold hover:bg-yellow-500 hover:text-black duration-300 md:hidden"
          onClick={() => setShowMobileMenu(true)}
        >
          <FaBars size={20} className="text-yellow-500 hover:text-black cursor-pointer" /> 
        </button>
      </div>

    
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden`}>
        <ul className='flex flex-col items-center gap-10 px-5 py-20 my-0 text-lg font-medium bg-yellow-600 transition-all'>
          <div onClick={() => setShowMobileMenu(false)} className='flex justify-end cursor-pointer'>
            <AiOutlineClose size={24} color="black" />
          </div>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>{texts.home}</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>{texts.about}</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Rooms" className='px-4 py-2 rounded-full inline-block'>{texts.Rooms}</a>
          <a onClick={() => setShowMobileMenu(false)} href="#reviews" className='px-4 py-2 rounded-full inline-block'>{texts.reviews}</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>{texts.Contact}</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar; 



 

      
       

     







      

    



 










