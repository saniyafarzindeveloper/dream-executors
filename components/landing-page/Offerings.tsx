import { Clock, BadgeCheck, BrickWall } from "lucide-react";

const offerings = [
  {
    title: "On Time",
    description:
      "We respect your time with planning and predictable project timelines.",
    icon: Clock,
  },
  {
    title: "ISO Certified",
    description:
      "We follow certified standards ensuring quality and reliability.",
    icon: BadgeCheck,
  },
  {
    title: "Quality Materials",
    description:
      "We use trusted brands and durable materials suited for all conditions.",
    icon: BrickWall,
  },
];

export default function Offerings() {
  return (
    <section className="relative z-20 -mt-24 px-6">
      <div className="max-w-[1200px] mx-auto bg-white rounded-[24px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-8 py-10">
        
        <div className="grid md:grid-cols-3 gap-10">
          
          {offerings.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex flex-col items-start gap-4">
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#854836] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}