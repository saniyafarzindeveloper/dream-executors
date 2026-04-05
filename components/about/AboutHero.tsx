"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden" 
    style={{
  clipPath:
    "polygon(0 0, 100% 0, 100% 85%, 60% 100%, 0 90%)",
}}
    >
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png" // replace with your image
          alt="About us background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto h-full flex items-center px-6">
        
        <div className="max-w-[650px]">
          
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full 
                          border border-white/30 text-white text-sm tracking-wide">
            ABOUT
          </div>

          {/* Heading */}
          <h1 className="text-white text-[40px] sm:text-[52px] md:text-[64px] leading-[1.1] font-medium">
            Building Trust Through
            <br />
            <span className="text-[#FFB22C]">
              Quality & Craftsmanship
            </span>
          </h1>

        </div>
      </div>

      
    </section>
  );
}