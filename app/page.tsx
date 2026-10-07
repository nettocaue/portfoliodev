import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import SkillsBand from '@/components/SkillsBand';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SkillsBand />
        <Stats />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
