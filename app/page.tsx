import Intro from "@/components/intro";
import SectionDivider from "@/components/sectiondivider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/expeience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro></Intro>
      <SectionDivider />
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
