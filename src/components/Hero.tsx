import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{
              type: "spring",
              delay: i * 0.2,
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-2xl opacity-30"
            style={{
              width: `${Math.random() * 100 + 100}px`,
              height: `${Math.random() * 100 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="block"
              >
                Connect Beyond
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="block mt-2"
              >
                Boundaries
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl opacity-50 -z-10" />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Experience{" "}
            <motion.span
              className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '200%'] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              style={{ 
                backgroundSize: '200% auto',
                backgroundImage: 'linear-gradient(90deg, #2563eb, #9333ea, #2563eb)'
              }}
            >
              lightning-fast
            </motion.span> connectivity with our revolutionary 5G networks
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-8 py-6 rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
              size="lg"
            >
              <span className="relative z-10">Explore Plans</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-15 -z-10" />
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="relative bg-white rounded-[2.5rem] shadow-2xl p-1.5 mx-4 border-8 border-white overflow-hidden"
          >
            <div className="h-[300px] bg-gradient-to-br from-gray-100 to-gray-50 rounded-[2rem] relative overflow-hidden">
              {/* Screen content mockup */}
              <div className="absolute inset-0 p-6">
                <div className="flex gap-4 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      className="h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      style={{ width: `${Math.random() * 100 + 50}px` }}
                    />
                  ))}
                </div>
                
                {/* Animated speed meter */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Connection Speed</span>
                    <motion.div
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      animate={{ text: ["1.2 Gbps", "1.5 Gbps", "2.0 Gbps"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </div>
                  <motion.div
                    className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};