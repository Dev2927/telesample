import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
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
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3 }
  },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="h-9 w-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
          >
            <span className="text-white font-bold text-sm">TC</span>
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            TeleConnect
          </motion.span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <LayoutGroup>
            {links.map((link) => (
              <motion.div 
                key={link.name}
                className="relative"
                onHoverStart={() => setActiveLink(link.name)}
                onHoverEnd={() => setActiveLink("")}
              >
                <motion.a
                  href={link.href}
                  className={cn(
                    "text-gray-600 hover:text-blue-600 font-medium relative px-3 py-1.5",
                    activeLink === link.name && "text-blue-600"
                  )}
                >
                  {link.name}
                  {activeLink === link.name && (
                    <motion.div 
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.a>
              </motion.div>
            ))}
          </LayoutGroup>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Cross1Icon className="h-6 w-6 text-white" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6 text-white" />
          )}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-full right-0 w-64 bg-white shadow-xl rounded-lg p-4 md:hidden border border-gray-100"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block py-3 px-4 text-gray-600 hover:bg-gray-50 rounded-md font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
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
    </motion.nav>
  );
}