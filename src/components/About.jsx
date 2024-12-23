
import React from 'react'
import project13 from '../assets/project13.jpg'
import { motion } from "framer-motion"
const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 , y:200}}
    transition={{duration: 1}}
    whileInView={{ opacity: 1 , y:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center
    container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
    <h1 className='text-2xl sm:text-4xl font-bold md:2 text-yellow-500'
   style={{
    color: '#FFD700', 
    textShadow: `
      1px 1px 0 #000, 
      2px 2px 0 #000, 
      3px 3px 5px rgba(0, 0, 0, 0.5) 
    `,
  }}
  
  >About <span className='underline underline-offset-4 decoration-1 under font-light text-black'>Our Royal Hotel</span></h1>
    <p className='text-black max-w-80 text-center mb-8 pt-3'>Indulge in a royal experience of luxury, tranquility, and timeless elegance.</p>  
     <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
      <img src={project13} alt="about-image" className='w-full sm:w-1/2 max-w-lg rounded-2xl'/>
      <div className='flex flex-col items-center md:items-start mt-10 text-black'>
       <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-20'>
        <div>
         <p className='text-4xl font-medium text-black'>10+</p>
         <p>Years of exceptional service</p>
        </div>
        <div>
         <p className='text-4xl font-medium text-black'>14+</p>
         <p>Years of luxurious hospitality</p>
        </div>
        <div>
         <p className='text-4xl font-medium text-black'>24+</p>
         <p>Years of delivering elegance</p>
        </div>
        <div>
          <p className='text-4xl font-medium text-black'>30+</p>
          <p>Years of royal excellence</p>
        </div>
       </div>
       <p className='my-8 max-w-lg'>Experience unmatched luxury and royal elegance 
         where world-class service, stunning
         architecture, and unforgettable moments await. 
         Indulge in comfort, tranquility, and timeless beauty,
         making every stay a regal escape</p>
         <button className='bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 duration-300 py-2 px-4 '> learn more</button>
      </div>
     </div>
    </motion.div>
  )
}

export default About

