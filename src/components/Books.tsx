import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";
import bookBasic from "@/assets/book-basic-mech.png";
import bookSystems from "@/assets/book-systems.png";

const books = [
  {
    title: "Basic Mechanical Engineering",
    publisher: "Study Tech Publication",
    year: "2019",
    description: "Comprehensive textbook for first-year engineering students covering fundamental mechanical engineering concepts.",
    image: bookBasic,
    curriculum: "FE SPPU",
    link: "https://www.udemy.com/course/basic-mechanical-engineering/",
  },
  {
    title: "Systems in Mechanical Engineering",
    publisher: "Fortflag Books & Media (Ebook)",
    year: "2020-21",
    description: "Digital publication exploring integrated mechanical systems and their applications in modern engineering.",
    image: bookSystems,
    curriculum: "FE 2020-21",
    link: "https://shrikantdhavale.wordpress.com/about/",
  },
];

export const Books = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="books" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Books & Publications
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Authored textbooks serving thousands of engineering students
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <Card className="glass-panel border-glass-border overflow-hidden group h-full hover:border-primary/50 transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={book.image}
                      alt={`${book.title} — book cover`}
                      className="w-full h-64 object-contain bg-muted/30 p-6"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <BookOpen className="w-8 h-8 text-primary" />
                      <span className="text-sm text-muted-foreground">{book.year}</span>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {book.publisher}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{book.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{book.curriculum}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass-button"
                        onClick={() => window.open(book.link, "_blank")}
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
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
