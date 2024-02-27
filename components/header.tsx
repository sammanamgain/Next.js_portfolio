"use client";
import { useContext } from "react";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useConsumeActiveSectionContext } from "@/context/active-section-context-provider";
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useConsumeActiveSectionContext();

  const changeActiveSection = (sectionName: (typeof links)[number]["name"]) => {
    //set the time also
    setTimeOfLastClick(Date.now());
    if (activeSection !== sectionName) {
      setActiveSection(() => sectionName);
    }
  };

  return (
    <header className='z-[999] relative'>
      <motion.div
        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 '
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
      ></motion.div>
      <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className='h-3/4 flex items-center justify-center relative'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950": activeSection === link.name,
                  }
                )}
                onClick={() => changeActiveSection(link.name)}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className='bg-gray-100 rounded-full absolute inset-0 -z-10'
                    layoutId='activeSection'
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
