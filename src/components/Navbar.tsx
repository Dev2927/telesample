import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#" },
  { name: "Plans", href: "#plans" },
  { name: "Coverage", href: "#coverage" },
  { name: "Support", href: "#support" },
];

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "20%" },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo - Simplified animation */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="h-9 w-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-white font-bold text-sm">TC</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TeleConnect
          </span>
        </div>

        {/* Desktop Navigation - Reduced motion */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setActiveLink(link.name)}
              onMouseLeave={() => setActiveLink("")}
              className={cn(
                "text-gray-600 hover:text-blue-600 font-medium relative px-3 py-2",
                "transition-colors duration-300",
                activeLink === link.name && "text-blue-600"
              )}
            >
              {link.name}
              {activeLink === link.name && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-underline" />
              )}
            </a>
          ))}
          
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 border border-blue-500/30"
            size="lg"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button - Simplified interaction */}
        <button
          className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Cross1Icon className="h-6 w-6 text-white" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Mobile Menu - Simplified animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 w-64 bg-white shadow-xl rounded-lg p-4 md:hidden border border-gray-100"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 px-4 text-gray-600 hover:bg-gray-50 rounded-md font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}