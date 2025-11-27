import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Linkedin, FileText, Mail } from "lucide-react";
import profileImage from "@/assets/shrikant-profile.jpg";
import ecellLogo from "@/assets/ecell-logo.png";

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
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20"
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
            className="hero-image flex flex-col items-center lg:items-end justify-center order-1 lg:order-1 gap-6"
          >
            <div className="relative group">
              {/* Animated glow rings */}
              <motion.div
                className="absolute inset-0 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "radial-gradient(circle, rgba(0,255,255,0.4) 0%, rgba(153,102,255,0.4) 100%)",
                }}
              />
              
              <motion.div
                className="absolute -inset-4 rounded-3xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, rgba(0,255,255,0.3) 50%, transparent 100%)",
                  filter: "blur(20px)",
                }}
              />
              
              <motion.img
                src={profileImage}
                alt="Prof. Shrikant R. Dhavale — portrait"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] object-cover rounded-3xl border-2 border-glass-border shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating particles around image */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            {/* E-Cell MESWCOE Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="glass-panel rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow w-auto"
            >
              <img 
                src={ecellLogo} 
                alt="E-Cell MESWCOE Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="text-left">
                <p className="text-sm font-bold text-foreground">E-Cell MESWCOE</p>
                <p className="text-xs text-muted-foreground">Faculty Incharge</p>
              </div>
            </motion.div>
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="hero-cta bg-primary text-primary-foreground hover:bg-primary/90 group relative overflow-hidden shadow-lg"
                  onClick={() => window.open("https://www.linkedin.com/in/shrikant-dhavale-107a551ba", "_blank")}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-teal/20 to-neon-violet/20"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform relative z-10" />
                  <span className="relative z-10 font-semibold">View CV</span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="hero-cta bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-lg"
                  onClick={scrollToContact}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Contact</span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="hero-cta border-2 border-primary/50 hover:bg-primary/10 hover:border-primary shadow-lg"
                  onClick={() => window.open("https://www.linkedin.com/in/shrikant-dhavale-107a551ba", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  <span className="font-semibold">LinkedIn</span>
                </Button>
              </motion.div>
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
