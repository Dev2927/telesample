import { motion, LayoutGroup } from "framer-motion";
import { RocketIcon, LightningBoltIcon, GlobeIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <RocketIcon className="h-8 w-8" color="white" />,
    title: "Blazing Fast Speeds",
    description: "Experience 5G speeds up to 1Gbps with our advanced network infrastructure",
    color: "from-blue-600 to-purple-600",
  },
  {
    icon: <GlobeIcon className="h-8 w-8" color="white" />,
    title: "Global Coverage",
    description: "Stay connected in over 200 countries with our worldwide partner networks",
    color: "from-green-600 to-cyan-600",
  },
  {
    icon: <LightningBoltIcon className="h-8 w-8" color="white" />,
    title: "Instant Activation",
    description: "Get your SIM activated within minutes with our digital onboarding process",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: <LockClosedIcon className="h-8 w-8" color="white" />,
    title: "Military-grade Security",
    description: "Your data is protected with end-to-end encryption and secure protocols",
    color: "from-red-600 to-pink-600",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute inset-0 opacity-10"
      >
        {[...Array(8)].map((_, i) => (
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
            className="absolute bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "0%" }}
            animate={{ backgroundPosition: "100%" }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xl max-w-3xl mx-auto"
          >
            We're redefining mobile connectivity with cutting-edge technology and
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}customer-centric innovation
            </span>
          </motion.p>
        </motion.div>

        <LayoutGroup>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="group relative h-full"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className={cn(
                    "h-full p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow",
                    "relative overflow-hidden border border-gray-100"
                  )}
                >
                  {/* Icon container - always visible */}
                  <motion.div
                    className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.color} relative`}
                  >
                    <motion.div 
                      className="text-black"
                      whileHover={{ rotate: 360 }}
                      transition={{ type: "spring" }}
                    >
                      {feature.icon}
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-2xl font-bold mb-4 bg-gradient-to-br bg-clip-text text-black"
                    style={{ backgroundImage: `linear-gradient(to right, ${feature.color.replace('from-', '').replace('to-', '').replace(' ', ', ')})` }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-lg leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Hover effect line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
};