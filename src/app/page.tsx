import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Scene from "@/components/ui/Scene";
import CursorGradient from "@/components/ui/CursorGradient";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="grainy-overlay" />
      <CursorGradient />
      <Scene />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <div id="skills">
          <BentoGrid />
        </div>
        <Projects />
        <div id="experience">
          <Experience />
        </div>
        <Education />
        <Certifications />
        <Footer />
      </div>

      {/* Background ambient light effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>
    </main>
  );
}

