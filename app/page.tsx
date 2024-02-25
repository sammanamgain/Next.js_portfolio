import Intro from "@/components/intro";
import SectionDivider from "@/components/sectiondivider";
import About from "@/components/about";
import Projects from "@/components/projects"
export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro></Intro>
      <SectionDivider />
      <About></About>
      <Projects></Projects>
    </main>
  );
}
