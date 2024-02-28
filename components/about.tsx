"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/Hooks/sectionView";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

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
        I am Computer Engineer graduated from the Thapathali campus,IOE.
        <span>I am proficient in </span>
        <span className='font-medium'>
          JavaScript,TypeScript,React, Next.js, Node.js,
          MongoDB,Python,Django,RestFul API
        </span>
        . I am also familiar with
        <span className='font-medium'>
          {" "}
          Natural Language Processing,Predictive Analysis
        </span>
        . I am always looking to learn new technologies. I am currently looking
        for a <span className='font-medium'>Internship</span> as a software
        Engineer.
      </p>
      <p>
        Apart from web developement , l love machine learning and deep learning.
        I am currently learning{" "}
        <span className='font-medium italic'> Docker and Kubernetes</span>
      </p>
    </motion.section>
  );
}
