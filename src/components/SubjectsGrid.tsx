import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Wrench, Zap, Lightbulb, Cog, Droplet } from "lucide-react";

const subjects = [
  {
    title: "Engineering Graphics",
    category: "Foundation",
    icon: Wrench,
    description: "Fundamental technical drawing and CAD principles for mechanical engineering.",
    topics: ["Orthographic Projections", "Isometric Views", "CAD Software", "Dimensioning Standards"],
  },
  {
    title: "Systems In Mechanical Engineering",
    category: "Core",
    icon: Cog,
    description: "Comprehensive study of mechanical systems and their integration.",
    topics: ["System Design", "Integration", "Optimization", "Performance Analysis"],
  },
  {
    title: "Sensors and Vision Systems in Robots",
    category: "Robotics",
    icon: Cpu,
    description: "Advanced robotics covering sensor technologies and computer vision.",
    topics: ["Sensor Technology", "Computer Vision", "Robot Perception", "AI Integration"],
  },
  {
    title: "Fluid Mechanics",
    category: "Core",
    icon: Droplet,
    description: "Study of fluid behavior and applications in mechanical systems.",
    topics: ["Fluid Dynamics", "Flow Analysis", "Pressure Systems", "Hydraulics"],
  },
  {
    title: "Energy Engineering",
    category: "Core",
    icon: Zap,
    description: "Energy systems, sustainability, and power generation principles.",
    topics: ["Renewable Energy", "Thermodynamics", "Power Systems", "Sustainability"],
  },
  {
    title: "Design Of Machine Elements",
    category: "Design",
    icon: Cog,
    description: "Mechanical design principles and machine component analysis.",
    topics: ["Component Design", "Stress Analysis", "Material Selection", "Failure Prevention"],
  },
  {
    title: "Basic Mechanical Engineering",
    category: "Foundation",
    icon: Wrench,
    description: "Fundamental concepts and principles of mechanical engineering.",
    topics: ["Mechanics", "Materials", "Manufacturing", "Thermodynamics Basics"],
  },
  {
    title: "Manufacturing Processes",
    category: "Applied",
    icon: Cog,
    description: "Modern manufacturing techniques and process optimization.",
    topics: ["Machining", "Casting", "Welding", "CNC Operations"],
  },
  {
    title: "Design Thinking and Idea Lab",
    category: "Innovation",
    icon: Lightbulb,
    description: "Creative problem-solving and innovation methodologies.",
    topics: ["Ideation", "Prototyping", "User-Centered Design", "Innovation Process"],
  },
  {
    title: "Skill Development",
    category: "Professional",
    icon: Lightbulb,
    description: "Professional skills and career development for engineers.",
    topics: ["Communication", "Leadership", "Technical Writing", "Presentation Skills"],
  },
  {
    title: "Project Based Learning",
    category: "Applied",
    icon: Lightbulb,
    description: "Hands-on learning through real-world engineering projects.",
    topics: ["Project Management", "Team Collaboration", "Problem Solving", "Implementation"],
  },
];

const categories = ["All", "Foundation", "Core", "Robotics", "Design", "Innovation", "Professional", "Applied"];

export const SubjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredSubjects = selectedCategory === "All"
    ? subjects
    : subjects.filter(subject => subject.category === selectedCategory);

  return (
    <section id="subjects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Subjects Taught
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Comprehensive courses across mechanical engineering and robotics
          </p>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="glass-panel flex-wrap h-auto gap-2 p-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:glass-button data-[state=active]:text-primary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject, index) => (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-panel border-glass-border h-full hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <subject.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                      <Badge variant="secondary" className="glass-button">
                        {subject.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {subject.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {subject.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {subject.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
