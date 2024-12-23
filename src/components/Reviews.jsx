
import React from 'react';
import { motion } from "framer-motion"
import review1 from '../assets/reviow1.png';
import review2 from '../assets/reviow2.png';
import review3 from '../assets/reviow3.png';

const reviewsData = [
  {
    name: "Tomas Max",
    title: "Marketing Manager",
    image: review1,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property.",
  },
  {
    name: "Jack Tomas",
    title: "Marketing Manager",
    image: review2,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property.",
  },
  {
    name: "Alpert Jaims",
    title: "Marketing Manager",
    image: review3,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property.",
  },
];

const Reviews = () => {
  return (
    <motion.div

    initial={{ opacity: 0 , x:100}}
       transition={{duration: 1}}
       whileInView={{ opacity: 1 , x:0}}
       viewport={{once: true}}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="reviews"
    >
      <h1
        className="text-2xl sm:text-4xl font-bold md:text-2xl text-yellow-500 text-center"
        style={{
          color: '#FFD700',
          textShadow: `
            1px 1px 0 #000, 
            2px 2px 0 #000, 
            3px 3px 5px rgba(0, 0, 0, 0.5)
          `,
        }}
      >
        Customers{' '}
        <span className="underline underline-offset-4 decoration-1 font-light text-black">
          Review
        </span>
      </h1>
      <p className="text-black max-w-80 text-center mb-8 pt-3 mx-auto">
        you will find a real talk about us here
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
        {reviewsData.map((review, index) => (
          <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
            <img
              src={review.image}
              alt={review.title}
              className="w-20 h-20 rounded-full mx-auto mb-4 border border-amber-500 bg-black"
            />
            <h2 className="font-bold text-xl">{review.name}</h2>
            <h3 className="font-bold text-yellow-500">{review.title}</h3>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviews;


 




