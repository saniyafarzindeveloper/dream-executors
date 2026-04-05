"use client";

import { Target, Flag, HeartHandshake } from "lucide-react";

const items = [
  {
    title: "Our Vision",
    description:
      "We aim to create lasting spaces that strengthen communities and inspire confidence — built with care and purpose.",
    icon: Target,
  },
  {
    title: "Our Mission",
    description:
      "We make construction simple and dependable through clear communication, skilled craftsmanship, and client-first service.",
    icon: Flag,
  },
  {
    title: "Our Values",
    description:
      "We build with integrity, treat every project like our own, and prioritize quality over shortcuts. We’re committed to doing it right.",
    icon: HeartHandshake,
  },
];

export default function VisionMission() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Top Label */}
        <p className="text-sm tracking-widest text-[#854836] mb-3 font-medium">
          IMPACTFUL
        </p>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-semibold text-[#1f2937]">
          Vision, Mission & Values
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[24px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                           flex flex-col items-center text-center
                           transition-transform duration-300 hover:-translate-y-2"
              >
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#854836] flex items-center justify-center mb-6">
                  <Icon className="text-white w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#1f2937] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-relaxed">
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