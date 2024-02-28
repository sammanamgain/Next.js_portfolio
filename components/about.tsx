"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/Hooks/sectionView";

export default function About() {

  const { ref } = useSectionInView("About", 0.90);
  

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        {" "}
        I am computer Engineer graduated from the thapathali campus,IOE,
        <span>I am proficient in </span>
        <span className='font-medium'>
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Python,Django I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className='font-medium'>Internship</span> as a software developer.
      </p>
      <p>
        Apart from web developement , l love machine learning and deep learning.
      </p>
    </motion.section>
  );
}
