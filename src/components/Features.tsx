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
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-xl animate-pulse-slow"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              top: `${20 + i * 20}%`,
              left: `${i * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">Why Choose Us?</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl opacity-50 -z-10" />
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            We're redefining mobile connectivity with cutting-edge technology and{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              customer-centric innovation
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={cn(
                "h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl",
                "relative overflow-hidden border border-gray-100/50 transition-all",
                "bg-gradient-to-b from-white/50 to-white/90",
                "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 before:transition-opacity before:duration-300",
                `before:${feature.color} group-hover:before:opacity-10`
              )}>
                {/* Icon container */}
                <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.color} relative`}>
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br bg-clip-text text-black" 
                    style={{ backgroundImage: `linear-gradient(to right, ${feature.color.replace('from-', '').replace('to-', '').replace(' ', ', ')})` }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed animate-fade-in-up">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};