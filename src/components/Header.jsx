

import React from 'react';
import Navbar from './Navbar';
import { motion } from "framer-motion"

const Header = () => {

  const texts = {
    explore: 'Explore Our Royal Hotel',
    projects_link: 'Projects',
    contact_us_link: 'Contact Us',
  };

  return (
    <div
      className="min-h-screen bg-center bg-no-repeat bg-cover flex mb-4 items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/home4.jpg')" }}
      id="Header"
    >
      <Navbar />
      <motion.div 
       initial={{ opacity: 0 , x:100}}
       transition={{duration: 1.5}}
       whileInView={{ opacity: 1 , x:0}}
       viewport={{once: true}}

       className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2
          className="text-4xl sm:text-5xl md:text-[72px] inline-block max-w-3xl font-semibold pt-20"
          style={{
            color: '#FFD700', 
            textShadow: `
              1px 1px 0 #000, 
              2px 2px 0 #000, 
              3px 3px 5px rgba(0, 0, 0, 0.5) 
            `,
          }}
        >
          {texts.explore}
        </h2>

        <div className='space-x-6 mt-16 '>
          <a 
            href="#Projects" 
            className="mx-3 px-6 py-3 rounded bg-yellow-500 text-black font-semibold hover:bg-black hover:text-yellow-500 duration-300 
        "  // Smaller button on small screens
          >
            {texts.projects_link}
          </a>
          <a 
            href="#Contact" 
            className="mx-3 border border-black px-4 py-3 rounded bg-black font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black duration-300 
            "  // Smaller button on small screens
          >
            {texts.contact_us_link}
          </a>
        </div>
      </motion.div >
    </div>
  );
};

export default Header;




