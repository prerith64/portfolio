import React from 'react';
import { photo } from '../assets/assets';
import { motion } from 'framer-motion';
import { profile } from '../constent/constent';

const textVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 0.3 }
  }
};

const Profile = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row  gap-6 my-[10rem] text-center">
      
      {/* Text Section */}
      <motion.div
        className="flex-1 "
        variants={textVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-l from-pink-600 to-purple-800 bg-clip-text text-transparent">
          {profile.title}
        </h1>
        <p className="text-2xl lg:text-3xl mt-6   text-justify px-4 lg:px-0">
          {profile.desc}
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1 flex justify-center items-center"
        variants={imageVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.img
          src={photo}
          alt="profile"
          className="w-72 h-72 lg:w-[40rem] lg:h-[40rem] object-contain  translate-y-[-40px]"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 120 }}
        />
      </motion.div>
    </div>
  );
};

export default Profile;
