import { motion, LayoutGroup } from "framer-motion";
import { Button } from "./ui/button";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "29",
    features: ["10GB Data", "Unlimited Calls", "100 SMS/day", "5G Access"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Pro",
    price: "49",
    features: ["50GB Data", "Unlimited Calls", "Unlimited SMS", "5G Priority", "Intl. Calls"],
    gradient: "from-purple-600 to-pink-600",
    featured: true,
  },
  {
    name: "Business",
    price: "99",
    features: ["Unlimited Data", "Dedicated Support", "5G Priority", "Global Roaming", "VIP Benefits"],
    gradient: "from-orange-500 to-amber-500",
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="plans">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Simple Pricing
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xl max-w-xl mx-auto"
          >
            Choose the perfect plan for your needs. All plans come with our{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              30-day satisfaction guarantee
            </span>
          </motion.p>
        </motion.div>

        <LayoutGroup>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className={cn(
                    "relative h-full bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all",
                    "border border-gray-100/50 overflow-hidden",
                    plan.featured && "border-0"
                  )}
                >
                  {/* Featured plan glow */}
                  {plan.featured && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl"
                    />
                  )}

                  {/* Ribbon badge */}
                  {plan.featured && (
                    <motion.div
                      initial={{ rotate: 45, x: 50, y: -50 }}
                      animate={{ rotate: 45, x: 35, y: -35 }}
                      className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-1 text-sm font-bold"
                    >
                      POPULAR
                    </motion.div>
                  )}

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                    
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      className="mb-8"
                    >
                      <span className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-black"
                        style={{ backgroundImage: `linear-gradient(to right, ${plan.gradient.replace('from-', '').replace('to-', '').replace(' ', ', ')})` }}
                      >
                        ${plan.price}
                      </span>
                      <span className="text-lg text-gray-500">/month</span>
                    </motion.div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="p-1 bg-green-100 rounded-full"
                          >
                            <CheckIcon className="h-5 w-5 text-green-600" />
                          </motion.div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        className={cn(
                          "w-full text-lg py-7 rounded-xl transition-all",
                          plan.featured 
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-purple-500/30"
                            : "bg-gradient-to-br from-gray-100 to-gray-50 hover:shadow-gray-500/10",
                          "hover:shadow-xl relative overflow-hidden"
                        )}
                      >
                        <span className="relative z-10 text-black">Get Started</span>
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
                  </div>

                  {/* Hover effect line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600"
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