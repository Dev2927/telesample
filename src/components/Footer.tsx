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
    <footer className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-xl animate-pulse-slow"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              top: `${20 + i * 20}%`,
              left: `${i * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {/* Company Info */}
          <div className="mb-6 group">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              TeleConnect
            </h3>
            <p className="text-gray-300/90 leading-relaxed transition-transform duration-300 group-hover:translate-x-1">
              Empowering global connections through innovative telecommunications solutions
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-6 text-white/90">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300/80 hover:text-white group transition-colors"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white/90">Join Our Newsletter</h4>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 backdrop-blur-sm border-none text-white placeholder-gray-400 rounded-xl py-6 px-4 hover:bg-white/10 transition-all focus:ring-2 focus:ring-purple-400"
              />
              <Button
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all py-6 rounded-xl active:scale-95"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-300/80 text-sm hover:text-white transition-colors">
            © 2024 TeleConnect. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className={cn(
                  "p-3 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all duration-300",
                  link.color
                )}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};