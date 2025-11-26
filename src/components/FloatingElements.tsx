import { motion } from "framer-motion";

export const FloatingElements = () => {
  const elements = [
    { size: "w-32 h-32", top: "10%", left: "5%", delay: 0 },
    { size: "w-24 h-24", top: "60%", left: "85%", delay: 1 },
    { size: "w-40 h-40", top: "80%", left: "10%", delay: 2 },
    { size: "w-20 h-20", top: "30%", left: "90%", delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} rounded-full`}
          style={{
            top: element.top,
            left: element.left,
            background: "radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16"
        style={{
          border: "2px solid rgba(0,255,255,0.2)",
          borderRadius: "20%",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-12 h-12"
        style={{
          border: "2px solid rgba(153,102,255,0.2)",
        }}
        animate={{
          rotate: [0, -360],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
