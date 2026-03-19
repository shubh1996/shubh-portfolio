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

      {/* Ambient light orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
        {/* Top-left: violet */}
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[140px]" />
        {/* Top-right: cyan */}
        <div className="absolute top-[-5%] right-[-10%] w-[35%] h-[40%] rounded-full bg-cyan-500/8 blur-[120px]" />
        {/* Bottom: fuchsia */}
        <div className="absolute bottom-[-15%] left-[20%] w-[60%] h-[40%] rounded-full bg-fuchsia-600/8 blur-[150px]" />
        {/* Mid accent */}
        <div className="absolute top-[40%] right-[5%] w-[20%] h-[30%] rounded-full bg-indigo-500/8 blur-[100px]" />
      </div>
    </main>
  );
}
