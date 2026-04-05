"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "10+",
    label: "Years of Experience",
  },
  {
    value: "1500+",
    label: "Projects Completed",
  },
  {
    value: "4.8/5",
    label: "Customer Satisfaction Score",
  },
  {
    value: "98%",
    label: "Project Success Rate",
  },
];

export default function About() {
  return (
    <section className="bg-[#F7F7F7] py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          
          {/* Left Content */}
          <div className="max-w-[750px]">
            
            {/* Badge */}
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[#FFB22C]/20 text-[#854836] text-sm font-medium">
              About Us
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[42px] md:text-[56px] leading-[1.2] text-[#1f2937] font-medium">
              With decades of experience, we specialize in turning ideas into{" "}
              <span className="text-[#FFB22C]">
                well-designed structures
              </span>{" "}
              that stand the test of time.
            </h2>
          </div>

          {/* Right CTA */}
          <div className="flex lg:justify-end">
            <Button
              variant="outline"
              className="border-[#000000]/30 text-[#F7F7F7] px-6 py-6 text-[16px] rounded-md flex items-center gap-2 bg-[#854836]"
            >
              Get to Know Us
              <ArrowRight size={18} />
            </Button>
          </div>

        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              
              {/* Divider */}
              <div className="h-[1px] w-full bg-black/10 mb-4" />

              {/* Value */}
              <h3 className="text-[36px] md:text-[44px] font-semibold text-[#1f2937]">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-gray-600 text-[15px]">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}