import { motion, LayoutGroup } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    text: "TeleConnect transformed our company communications. The reliability is unmatched and their customer support is exceptional.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    color: "from-blue-600 to-purple-600",
  },
  {
    name: "Michael Chen",
    role: "Digital Nomad",
    text: "Best network coverage I've experienced while traveling. Seamless connectivity across three continents!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    color: "from-green-600 to-cyan-600",
  },
  {
    name: "Emma Williams",
    role: "Content Creator",
    text: "The 5G speeds are incredible for live streaming. Truly a game-changer for my online presence.",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 5,
    color: "from-purple-600 to-pink-600",
  },
];

export const Testimonials = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Voices of Success
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xl max-w-xl mx-auto"
          >
            Join thousands of satisfied users who've revolutionized their{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              connectivity experience
            </span>
          </motion.p>
        </motion.div>

        <LayoutGroup>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
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
                    "border border-gray-100/50 overflow-hidden"
                  )}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-10`}
                  />

                  {/* Rating stars */}
                  <div className="flex gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                      >
                        <StarFilledIcon className="h-6 w-6 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <motion.p
                    className="text-gray-600 text-lg mb-8 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "{testimonial.text}"
                  </motion.p>

                  {/* Author section */}
                  <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Avatar className="h-14 w-14">
                        <AvatarImage 
                          src={testimonial.avatar} 
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                          {testimonial.name[0]}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

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