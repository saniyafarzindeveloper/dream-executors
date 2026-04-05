"use client";

import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#854836] text-white pt-20 pb-10 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* CTA Banner */}
        <div className="bg-[#FFB22C] text-black rounded-[24px] px-8 py-10 flex flex-col lg:flex-row justify-between gap-8 items-start lg:items-center">
          
          {/* Left */}
          <div>
            <p className="text-sm mb-2 font-medium">
              READY TO START YOUR PROJECT?
            </p>
            <h2 className="text-[28px] md:text-[36px] font-semibold leading-tight">
              From Idea to Reality,
              <br />
              Let’s Begin
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-[400px]">
            <p className="text-[14px] mb-4 text-black/80">
              Your home should reflect your lifestyle, your values, and your dreams.
            </p>

            <Button className="bg-[#854836] cursor-pointer text-white hover:bg-black rounded-lg px-6 py-5 flex items-center gap-2">
              Let’s Talk
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Dream Executors</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              We are dedicated to delivering exceptional construction services
              that stand the test of time.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li className="text-[#FFB22C]">Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/80">
              <li>Blog</li>
              <li>Careers</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>

            <div className="flex items-start gap-3 mb-4">
              <Phone className="text-[#FFB22C]" size={18} />
              <div className="text-sm text-white/80">
                <p className="font-medium text-white">Call us</p>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Mail className="text-[#FFB22C]" size={18} />
              <div className="text-sm text-white/80">
                <p className="font-medium text-white">Email</p>
                <p>info@dreamexecutors.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-[#FFB22C]" size={18} />
              <div className="text-sm text-white/80">
                <p className="font-medium text-white">Address</p>
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          
          <p>© 2026 Dream Executors. All rights reserved.</p>

          <div className="flex gap-2">
            Created & Maintained by -<span className="underline"><Link href="https://www.linkedin.com/in/saniya-farzin/">Saniya Farzin</Link></span>
            
          </div>

        </div>

      </div>
    </footer>
  );
}