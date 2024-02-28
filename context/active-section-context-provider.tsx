"use client";
import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type sectionName = (typeof links)[number]["name"];

type ActivesectionContexttype = {
  activeSection: sectionName;
  setActiveSection: React.Dispatch<
    React.SetStateAction<
      "Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact"
    >
  >;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActivesectionContext =
  createContext<ActivesectionContexttype | null>(null);
export default function ActivesectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<sectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  return (
    <ActivesectionContext.Provider
      value={{ activeSection, setActiveSection, timeOfLastClick ,setTimeOfLastClick}}
    >
      {children}
    </ActivesectionContext.Provider>
  );
}

//this will check if context is null or not
export function useConsumeActiveSectionContext() {
  const context = useContext(ActivesectionContext);
  if (context === null) {
    throw new Error(
      "useActivesectioncontext must be within a activesectioncontextprovider"
    );
  }
  return context;
}
