import React, { useEffect, useState } from 'react';
import ProjectData from './ProjectData';
import { motion } from "framer-motion"

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(ProjectData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ProjectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
    initial={{ opacity: 0 , x:-100}}
    transition={{duration: 1}}
    whileInView={{ opacity: 1 , x:0}}
    viewport={{once: true}}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Rooms"
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
        Luxury{' '}
        <span className="underline underline-offset-4 decoration-1 font-light text-black">
          Royal
        </span>{' '}
        Rooms
      </h1>
      <p className="text-black max-w-80 text-center mb-8 pt-3 mx-auto ">
        Experience the finest luxury in our completed royal rooms, unmatched
        elegance
      </p>

      {/* slider buttons */}
      <div className="flex justify-end mb-8">
        <button
          onClick={prevProject}
          className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-400 mr-2"
          aria-label="previous Project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextProject}
          className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-400 mr-2"
          aria-label="Next-Project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* project slider container */}
      <div className="overflow-hidden flex justify-center items-center">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / cardsToShow
            }%)`,
          }}
        >
          {ProjectData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/4 border-2 border-brown-500 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover mb-14 "
              />

              <div className="absolute inset-0 flex justify-between items-end  p-3">
                <h2 className="font-bold text-white  bg-gradient-to-t from-black to-transparent ">{project.title}</h2>
                <p className="text-sm text-yellow-500  bg-gradient-to-t from-black to-transparent ">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;








