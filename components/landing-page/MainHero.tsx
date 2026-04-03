"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MainHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      />

      {/* Dark Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Glass Badge */}
        <div
          className="mb-6 px-5 py-2 rounded-full 
                       
                        border border-white/30
                        text-white text-sm flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-white rounded-full" />
          Your Best-Construction Partner
        </div>

        {/* Heading */}
        <h1
          className="text-white font-medium leading-[1.1]
                       text-[42px] sm:text-[56px] md:text-[72px] lg:text-[86px]
                       max-w-[1000px]"
        >
          Building Your Vision from the Ground Up
        </h1>

        {/* Subtext */}
        <p
          className="mt-6 text-white/85 text-[16px] sm:text-[18px]
                      max-w-[720px] leading-relaxed"
        >
          We offer reliable construction services with a focus on unmatched
          quality, ensuring projects are completed on time and within budget.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90
                       px-6 py-6 text-[16px] rounded-md
                       flex items-center gap-2 shadow-md"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
