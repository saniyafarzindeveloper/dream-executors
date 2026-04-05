"use client";

import {
  PencilRuler,
  Building2,
  Microscope,
  Sofa,
  Layers,
  Droplets,
  Wrench,
  Hammer,
} from "lucide-react";

const expertise = [
  { name: "Designing", icon: PencilRuler },
  { name: "Construction", icon: Building2 },
  { name: "NDT", icon: Microscope },
  { name: "Interior", icon: Sofa },
  { name: "False Ceiling", icon: Layers },
  { name: "Water Proofing", icon: Droplets },
  { name: "Fabrication", icon: Wrench },
  { name: "Renovation", icon: Hammer },
];

export default function Expertise() {
  return (
    <section className="bg-[#F7F7F7] py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Label */}
        <p className="text-sm tracking-widest text-[#854836] mb-3 font-medium">
          OUR EXPERTISE
        </p>

        {/* Heading */}
        <h2 className="text-[32px] sm:text-[42px] md:text-[52px] font-semibold text-[#1f2937]">
          Areas We Specialize In
        </h2>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[20px] p-6 flex flex-col items-center justify-center gap-4
                           shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                           transition-all duration-300
                           hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
              >
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#854836] flex items-center justify-center">
                  <Icon className="text-white w-5 h-5" />
                </div>

                {/* Title */}
                <p className="text-[15px] font-medium text-[#1f2937]">
                  {item.name}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}