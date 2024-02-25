import Intro from "@/components/intro";
import SectionDivider from "@/components/sectiondivider";
import About from "@/components/about";
export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro></Intro>
      <SectionDivider />
      <About></About>
    </main>
  );
}
