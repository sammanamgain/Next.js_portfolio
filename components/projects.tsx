"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./card";

import { useSectionInView } from "@/Hooks/sectionView";
export default function Projects() {
  const { ref } = useSectionInView("Projects",0.55);
  return (
    <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
