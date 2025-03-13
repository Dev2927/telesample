import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const socialLinks = [
    { icon: <TwitterLogoIcon className="h-5 w-5" />, color: "hover:text-blue-400" },
    { icon: <InstagramLogoIcon className="h-5 w-5" />, color: "hover:text-pink-500" },
    { icon: <LinkedInLogoIcon className="h-5 w-5" />, color: "hover:text-blue-300" },
    { icon: <GitHubLogoIcon className="h-5 w-5" />, color: "hover:text-gray-300" },
  ];

  const footerLinks = [
    {
      title: "Products",
      items: ["Mobile Plans", "Business Solutions", "5G Network", "International Roaming"],
    },
    {
      title: "Support",
      items: ["Contact Us", "FAQ", "Coverage Map", "Documentation"],
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute inset-0 opacity-10"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              rotate: 360,
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                TeleConnect
              </h3>
              <p className="text-gray-300/90 leading-relaxed">
                Empowering global connections through innovative telecommunications solutions
              </p>
            </motion.div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white/90">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    <a
                      href="#"
                      className="flex items-center text-gray-300/80 hover:text-white group transition-colors"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white/90">Join Our Newsletter</h4>
            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 backdrop-blur-sm border-none text-white placeholder-gray-400 rounded-xl py-6 px-4 hover:bg-white/10 transition-all"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all py-6 rounded-xl"
                >
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-gray-300/80 text-sm"
          >
            © 2024 TeleConnect. All rights reserved.
          </motion.div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className={cn(
                  "p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all",
                  link.color
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};