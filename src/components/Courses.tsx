import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Users } from "lucide-react";
import udemyLogo from "@/assets/udemy-logo.png";
import smartTechLogo from "@/assets/smart-tech-logo.png";

const courses = [
  {
    title: "Basic Mechanical Engineering",
    platform: "Udemy",
    logo: udemyLogo,
    description: "Comprehensive online course covering fundamental mechanical engineering principles for beginners.",
    features: ["Video Lectures", "Practical Examples", "Quizzes & Assessments", "Certificate of Completion"],
    students: "7000+",
    link: "https://www.udemy.com/course/basic-mechanical-engineering/",
  },
  {
    title: "Smart Tech Learning",
    platform: "Educational Platform",
    logo: smartTechLogo,
    description: "Advanced courses and resources for mechanical engineering and robotics education.",
    features: ["Project-Based Learning", "Interactive Content", "Industry Applications", "Expert Mentorship"],
    students: "300+",
    link: "https://shrikantdhavale.wordpress.com/about/",
  },
];

export const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Online Courses
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Learn anytime, anywhere with comprehensive online engineering courses
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <Card className="glass-panel border-glass-border h-full group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <motion.img
                        src={course.logo}
                        alt={`${course.platform} logo`}
                        className="h-10 object-contain"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">{course.students} students</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {course.platform}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{course.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Course Features:</h4>
                      <ul className="space-y-2">
                        {course.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-muted-foreground">
                            <Play className="w-3 h-3 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="w-full glass-button group/btn"
                      onClick={() => window.open(course.link, "_blank")}
                    >
                      Open Course
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="glass-button"
              onClick={() => window.open("https://www.udemy.com/user/shrikant-dhavale-2/", "_blank")}
            >
              View All Courses on Udemy
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
