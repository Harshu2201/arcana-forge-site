import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SubjectsGrid } from "@/components/SubjectsGrid";
import { Books } from "@/components/Books";
import { Courses } from "@/components/Courses";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { FloatingElements } from "@/components/FloatingElements";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setShowLoader(false);
    }
  }, []);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <Loader onComplete={handleLoaderComplete} />}
      
      <main className="min-h-screen bg-background relative">
        <ParticleBackground />
        <FloatingElements />
        <Header />
        <div className="relative z-10">
          <Hero />
          <About />
          <SubjectsGrid />
          <Books />
          <Courses />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
