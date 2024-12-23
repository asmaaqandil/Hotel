import React from 'react'
import logo from '../assets/logo.png'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 , y:100}}
    transition={{duration: 1.5}}
    whileInView={{ opacity: 1 , y:0}}
    viewport={{once: true}}

     className='py-8 px-4 md:px-20 lg:px-32 bg-black w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col  md:flex-row justify-between items-start' >
        <div className='w-full md:w-1/3 mb-8 md:mb-5 '>
            <img src={logo} alt="" className='w-20 rounded-lg ' />
           <p className='text-yellow-600 mt-4 text-xl font-bold'>Royal Hotel </p>
           <div className='text-yellow-500 py-4 '>
         Copyright © 2024 Asmaa<br/> Qandil All Right Reserved
         </div>
        </div>
        <div className=' w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold '>quick links</h3>
          <ul className='flex flex-col gap-2 pt-2'>
            <a href="#Header" className='text-yellow-500 hover:text-yellow-600'>Home</a>
            <a href="#About" className='text-yellow-500 hover:text-yellow-600'>About</a>
            <a href="#Rooms" className='text-yellow-500 hover:text-yellow-600'>Rooms</a>
            <a href="#reviews" className='text-yellow-500 hover:text-yellow-600'>Reviews</a>
            <a href="#Contact" className='text-yellow-500 hover:text-yellow-600'>Contact</a>
          </ul>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Follow Us</h3>
          <p className='text-yellow-500 mb-4 max-w-80'>We Will Happy To<br/>  Your Follow</p>
          <div className='flex gap-2'>
            <input type="email" placeholder='Enter Your Email' className='p-2 rounded bg-white text-black border border-yellow-500 focus:outline-none w-full md:w-auto'/>
            <button className='py-2 px-4 rounded bg-yellow-600 text-black'>Follow us</button>

          </div>
        </div>
       
      </div>

    </motion.div>
  )
}

export default Footer
