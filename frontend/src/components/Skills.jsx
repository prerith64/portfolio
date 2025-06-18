import React from 'react';
import images from '../assets/assets';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const Skill = () => {
  return (
    <div className="my-[10rem] flex gap-[6rem] flex-col">
      
      {/* Animated Heading on Scroll */}
      <motion.h1
        className="text-center text-5xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Skills
      </motion.h1>

      {/* Skills Grid with Scroll Animation */}
      <motion.div
        className="flex gap-[80px] justify-center flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="skill"
            className="md:w-[200px] w-[100px] rounded-xl p-6 hover:scale-105 ease-in-out duration-300 hover:shadow-lg shadow-purple-700"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
