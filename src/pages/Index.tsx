import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SubjectsGrid } from "@/components/SubjectsGrid";
import { Books } from "@/components/Books";
import { Courses } from "@/components/Courses";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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
      
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <SubjectsGrid />
        <Books />
        <Courses />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
