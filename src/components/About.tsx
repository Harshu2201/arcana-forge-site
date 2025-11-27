import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: BookOpen, label: "Published Books", value: "2+" },
    { icon: Users, label: "Students Taught", value: "10000+" },
    { icon: Award, label: "Years Experience", value: "13+" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gradient">
            About Me
          </h2>

          <div className="glass-panel rounded-3xl p-8 sm:p-12 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a dedicated engineering educator with over 13 years of experience, I am passionate about 
              empowering the next generation of mechanical engineers and robotics enthusiasts. My journey in 
              academia has been driven by a commitment to bridging theoretical knowledge with practical 
              application.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a Master's degree in Heat Power Engineering and specialized expertise in Sensors and Vision 
              Systems in Robots, I bring a unique blend of traditional mechanical engineering principles and 
              cutting-edge technology to the classroom. My teaching philosophy centers on project-based learning, 
              design thinking, and skill development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond the classroom, I am an active contributor to engineering education through my published 
              works and online courses. I believe in making quality education accessible to all, which is why 
              I've created comprehensive courses on platforms like Udemy, reaching students across the globe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center space-y-2 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <stat.icon className="w-8 h-8 mx-auto text-primary animate-pulse-glow" />
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
