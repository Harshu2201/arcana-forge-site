import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Linkedin, FileText, Mail } from "lucide-react";
import profileImage from "@/assets/shrikant-profile.jpg";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
        stagger: 0.2,
      });

      gsap.from(".hero-image", {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-teal/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-3xl animate-pulse-glow" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <motion.div
            style={{ y }}
            className="hero-image flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-teal to-neon-violet rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img
                src={profileImage}
                alt="Prof. Shrikant R. Dhavale — portrait"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-2 border-glass-border shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="order-2 lg:order-2 space-y-8">
            <motion.h1
              style={{ opacity }}
              className="hero-title text-4xl sm:text-5xl lg:text-7xl font-bold"
            >
              Prof. Shrikant R.{" "}
              <span className="text-gradient">Dhavale</span>
            </motion.h1>

            <motion.p
              style={{ opacity }}
              className="hero-subtitle text-xl sm:text-2xl text-muted-foreground"
            >
              Engineering Educator • Robotics & Mechanical Systems • Author & Mentor
            </motion.p>

            <motion.div
              style={{ opacity }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="hero-cta glass-button group"
                onClick={() => window.open("https://www.linkedin.com/in/shrikant-dhavale-107a551ba", "_blank")}
              >
                <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View CV
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="hero-cta glass-button"
                onClick={scrollToContact}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="hero-cta glass-button"
                onClick={() => window.open("https://www.linkedin.com/in/shrikant-dhavale-107a551ba", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </motion.div>

            <motion.div
              style={{ opacity }}
              className="hero-subtitle pt-4 border-t border-glass-border"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Education:</span> B.E. Mechanical Engineering • M.E. Heat Power Engineering
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
