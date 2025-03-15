import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const speeds = ["1.2 Gbps", "1.5 Gbps", "2.0 Gbps"];

export const Hero = () => {
  const [speedIndex, setSpeedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeedIndex((prev) => (prev + 1) % speeds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 pb-24 px-4 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-2xl opacity-30 animate-pulse-slow"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              top: `${20 + i * 20}%`,
              left: `${i * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">Connect Beyond</div>
                <br />
                <div className="leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">Boundaries</div>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl opacity-40 -z-10" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">lightning-fast</span>
              {/* <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 -translate-y-1" /> */}
            </span>{" "}
            connectivity with our revolutionary 5G networks
          </p>

          <div className="flex justify-center gap-4">
            <Button
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-8 py-6 rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
              size="lg"
            >
              <span className="relative z-10">Explore Plans</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-15 -z-10" />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-1.5 mx-4 border-8 border-white/20 overflow-hidden animate-float">
            <div className="h-[300px] bg-gradient-to-br from-gray-100 to-gray-50 rounded-[2rem] relative overflow-hidden">
              <div className="absolute inset-0 p-6">
                <div className="flex gap-4 mb-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-bar-loading"
                      style={{
                        width: `${70 + i * 40}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>

                {/* Speed meter */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Connection Speed</span>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {speeds[speedIndex]}
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-full animate-progress" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};