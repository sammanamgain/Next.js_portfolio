import { useConsumeActiveSectionContext } from "@/context/active-section-context-provider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "@/lib/data";

export function useSectionInView(
  activeSectionName: (typeof links)[number]["name"],
  viewport: number
) {
  const { activeSection, setActiveSection, timeOfLastClick } =
    useConsumeActiveSectionContext();

  //ref will be refernce to element which want to check its view
  //inView will give status  if the element is in view or not
  //only set true after 75% is in the view
  const { ref, inView } = useInView({
    threshold: viewport,
  });

  useEffect(() => {
    //after it is being clicked more than one sec, hover effect(dark outline) will reflect on navbar
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSectionName);
    }
  }, [activeSectionName, inView, setActiveSection, timeOfLastClick]);

  return { ref };
}
