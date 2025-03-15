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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative inline-block">Voices of Success</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur-2xl opacity-50 -z-10" />
          </h2>
          <p className="text-gray-600 text-xl max-w-xl mx-auto">
            Join thousands of satisfied users who've revolutionized their{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              connectivity experience
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, _) => (
            <div
              key={testimonial.name}
              className="group relative transition-transform duration-300 hover:-translate-y-2"
            >
              <div className={cn(
                "relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl",
                "border border-gray-100/50 overflow-hidden transition-all",
                "bg-gradient-to-b from-white/50 to-white/90"
              )}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Rating stars */}
                <div className="flex gap-2 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFilledIcon 
                      key={i}
                      className="h-6 w-6 text-amber-400 animate-pop-in"
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-600 text-lg mb-8 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author section */}
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 transition-transform duration-300 group-hover:scale-105">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                      {testimonial.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>

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