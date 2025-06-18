import { ArrowRight } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constent/constent';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

const Card = ({ title, image, desc, frameworks, githubLink }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col gap-6 shadow-md justify-between dark:shadow-purple-700 hover:scale-105 ease-in-out duration-300 p-6 rounded-xl"
    >
      <div className="object-cover">
        <img src={image} className="rounded-xl w-full aspect-4/2" alt={title} />
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div>
        <div className="gap-3 flex flex-wrap">
          {frameworks.map((tech, index) => (
            <div
              key={index}
              className="rounded-full font-semibold bg-purple-700/20 ring-purple-700 ring-1 text-purple-700 py-1 text-sm px-2 inline"
            >
              {tech}
            </div>
          ))}
        </div>
        <p className="text-xl my-2 text-justify">{desc}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="text-xl inline-block font-semibold ring-1  cursor-pointer ring-purple-700 hover:bg-purple-700/20 ease-in-out duration-300 hover:scale-105 text-purple-700 px-4 py-2 rounded-full"
        >
          Github <ArrowRight className="inline-block" />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div
      className="my-[10rem]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h1
        className="text-5xl text-center my-[6rem]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid lg:grid-cols-3 gap-6 md:grid-cols-2"
        variants={containerVariants}
      >
        {projects.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            desc={item.desc}
            githubLink={item.githubLink}
            frameworks={item.frameworks}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
