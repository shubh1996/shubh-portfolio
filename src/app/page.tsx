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
      <div className="grainy-overlay" />
      <CursorGradient />
      <Scene />
      <Navbar />

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

      {/* Soft ambient blobs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] rounded-full bg-orange-200/40 blur-[120px]" />
        <div className="absolute top-[10%] right-[-10%] w-[35%] h-[40%] rounded-full bg-rose-200/30 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[15%] w-[50%] h-[40%] rounded-full bg-peach-100/30 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[25%] h-[30%] rounded-full bg-violet-100/40 blur-[80px]" />
      </div>
    </main>
  );
}
