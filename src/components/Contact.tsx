import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Mail, Linkedin, Send, Calendar, MessageCircle } from "lucide-react";
import contactQR from "@/assets/contact-qr.jpg";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Please accept the privacy policy to continue");
      return;
    }

    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "", consent: false });
  };

  const handleRequestLecture = () => {
    const subject = encodeURIComponent("Request for Lecture/Workshop");
    const body = encodeURIComponent("Hello Prof. Dhavale,\n\nI would like to request a lecture or workshop on...\n\nBest regards");
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Prof. Dhavale, I would like to connect with you regarding...");
    window.open(`https://wa.me/918408956226?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Let's discuss opportunities for collaboration, lectures, or mentorship
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-panel border-glass-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.div 
                        className="space-y-2"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="glass-button transition-all duration-300 focus:ring-2 focus:ring-primary"
                          required
                          maxLength={100}
                        />
                      </motion.div>
                      <motion.div 
                        className="space-y-2"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="glass-button transition-all duration-300 focus:ring-2 focus:ring-primary"
                          required
                          maxLength={255}
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Label htmlFor="subject">Subject</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      >
                        <SelectTrigger id="subject" className="glass-button transition-all duration-300 focus:ring-2 focus:ring-primary">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                          <SelectItem value="lecture">Guest Lecture Request</SelectItem>
                          <SelectItem value="mentorship">Mentorship Inquiry</SelectItem>
                          <SelectItem value="course">Course Information</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="glass-button min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary"
                        required
                        maxLength={1000}
                      />
                    </motion.div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => 
                          setFormData({ ...formData, consent: checked as boolean })
                        }
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I consent to storing my contact information *
                      </label>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group shadow-lg" size="lg">
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-6">
              <Card className="glass-panel border-glass-border">
                <CardHeader>
                  <CardTitle>Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full glass-button justify-start hover:bg-primary/10"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="mr-2 h-4 w-4 text-green-500" />
                      WhatsApp
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full glass-button justify-start hover:bg-primary/10"
                      onClick={() => window.open("https://www.linkedin.com/in/shrikant-dhavale-107a551ba", "_blank")}
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn Profile
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full glass-button justify-start hover:bg-primary/10"
                      onClick={handleRequestLecture}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Request a Lecture
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full glass-button justify-start hover:bg-primary/10"
                      onClick={() => window.open("https://shrikantdhavale.wordpress.com/about/", "_blank")}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      WordPress
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="glass-panel border-glass-border">
                <CardHeader>
                  <CardTitle>Scan to Connect</CardTitle>
                  <CardDescription>Quick contact via QR code</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={contactQR}
                    alt="Contact QR code"
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
