import { Linkedin, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-glass-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Prof. Shrikant R. Dhavale</h3>
            <p className="text-sm text-muted-foreground">
              Empowering future engineers through innovative education and mentorship in mechanical engineering and robotics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#subjects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Subjects
              </a>
              <a
                href="#books"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Books
              </a>
              <a
                href="#courses"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Courses
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.linkedin.com/in/shrikant-dhavale-107a551ba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://www.udemy.com/user/shrikant-dhavale-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Udemy Courses
              </a>
              <a
                href="https://shrikantdhavale.wordpress.com/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                WordPress
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Prof. Shrikant R. Dhavale — Site Developed By{" "}
            <a
              href="https://www.instagram.com/harshad_pakhale_01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @harshad_pakhale_01
            </a>
          </p>
          <div className="flex gap-4 text-sm">
            <button
              onClick={() => toast.info("Privacy policy coming soon")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </button>
            <button
              onClick={() => toast.info("Accessibility information coming soon")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { toast } from "sonner";
