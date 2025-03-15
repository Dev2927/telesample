import { motion } from "framer-motion";
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
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-xl animate-pulse-slow"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              top: `${20 + i * 20}%`,
              left: `${i * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Simple Pricing
          </h2>
          <p className="text-gray-600 text-xl max-w-xl mx-auto">
            Choose the perfect plan for your needs. All plans come with our{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              30-day satisfaction guarantee
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "group relative transition-transform duration-300 hover:-translate-y-2",
                plan.featured && "featured-plan"
              )}
            >
              <div className={cn(
                "relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl",
                "border border-gray-100/50 overflow-hidden transition-all",
                "bg-gradient-to-b from-white/50 to-white/90",
                plan.featured && "border-2 border-purple-500/30"
              )}>
                {/* Featured plan elements */}
                {plan.featured && (
                  <>
                    <div className="absolute top-4 -right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-1 text-sm font-bold rotate-45 shadow-lg">
                      POPULAR
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10" />
                  </>
                )}

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                  
                  <div className="mb-8">
                    <span 
                      className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-black"
                      style={{ backgroundImage: `linear-gradient(to right, ${plan.gradient.replace('from-', '').replace('to-', '').replace(' ', ', ')})` }}
                    >
                      ${plan.price}
                    </span>
                    <span className="text-lg text-gray-500">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li 
                        key={i}
                        className="flex items-center gap-3 text-gray-600 animate-fade-in-up"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <div className="p-1 bg-green-100 rounded-full transition-transform duration-200 hover:scale-110">
                          <CheckIcon className="h-5 w-5 text-green-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={cn(
                      "w-full text-lg py-7 rounded-xl relative overflow-hidden",
                      plan.featured 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-purple-500/30"
                        : "bg-gradient-to-br from-gray-100 to-gray-50 hover:shadow-gray-500/10",
                      "hover:shadow-lg transition-all"
                    )}
                  >
                    <span className="relative z-10 text-black">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-30 transition-opacity" />
                  </Button>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};