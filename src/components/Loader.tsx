import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2, Brain, Cpu, Database } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const duration = 5000;
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100 && !isSkipped) {
        requestAnimationFrame(updateProgress);
      } else if (newProgress >= 100) {
        setTimeout(onComplete, 300);
      }
    };

    updateProgress();
  }, [onComplete, isSkipped]);

  const handleSkip = () => {
    setIsSkipped(true);
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(153, 102, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(153, 102, 255, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        {/* Main content */}
        <div className="text-center space-y-8 pointer-events-auto px-4">
          {/* Logo/Icon area */}
          <motion.div 
            className="relative w-32 h-32 mx-auto"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Orbiting icons */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-neon-teal/20 backdrop-blur-sm border border-neon-teal/50 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-neon-teal" />
                </div>
              </motion.div>
              <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="w-10 h-10 rounded-full bg-neon-violet/20 backdrop-blur-sm border border-neon-violet/50 flex items-center justify-center">
                  <Database className="w-5 h-5 text-neon-violet" />
                </div>
              </motion.div>
              <motion.div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
              </motion.div>
            </motion.div>

            {/* Center icon */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-teal/30 to-neon-violet/30 backdrop-blur-lg border border-glass-border flex items-center justify-center shadow-xl">
                <Loader2 className="w-10 h-10 text-gradient animate-spin" />
              </div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-2"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gradient">
              Prof. Shrikant R. Dhavale
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              Engineering Educator • Robotics & Systems
            </p>
          </motion.div>
          
          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full max-w-md mx-auto space-y-3"
          >
            <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm border border-glass-border">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-teal via-primary to-neon-violet"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Initializing Portfolio System... {Math.round(progress)}%
            </p>
          </motion.div>

          {/* Skip button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              onClick={handleSkip}
              variant="ghost"
              size="sm"
              className="glass-button text-foreground hover:text-primary"
            >
              Skip Intro →
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};