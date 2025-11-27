import { motion } from "framer-motion";

interface HeaderNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const HeaderNavLink = ({ href, children, onClick }: HeaderNavLinkProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="relative text-foreground hover:text-primary transition-colors py-2 px-4 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-teal to-neon-violet origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};