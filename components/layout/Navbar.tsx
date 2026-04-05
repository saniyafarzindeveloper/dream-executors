"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f1f1f1] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="relative mt-6 max-w-[1200px] mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <h1
          className={`flex items-center font-semibold tracking-[-2px] transition-colors duration-300 ${
            scrolled ? "text-[#FFB22C]" : "text-white"
          } text-[22px] md:text-[26px]`}
        >
          DREAM EXECUTORS
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden min-[1024px]:flex items-center absolute left-1/2 -translate-x-1/2">
          <div
            className={`flex items-center gap-8 px-8 py-[10px] rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-transparent border-none shadow-none"
                : "bg-white/[0.18] backdrop-blur-[14px] border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white/90 hover:text-white"
                } text-[16px] md:text-[17px] font-medium`}
              >
                {item.name}

                {/* Animated underline */}
                <span
                  className={`absolute left-1/2 -bottom-1 h-[2px] w-0 rounded-full
                             transition-all duration-300 ease-out -translate-x-1/2
                             group-hover:w-full ${
                               scrolled ? "bg-black" : "bg-[#FFB22C]"
                             }`}
                />
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden min-[1024px]:flex items-center">
          <Button
            variant="ghost"
            className={`text-[16px] font-medium ${
              scrolled
                ? "text-black hover:text-black"
                : "text-white/90 hover:text-white"
            }`}
          >
            Let’s Talk!
          </Button>
        </div>

        {/* Mobile */}
        <div className="min-[1024px]:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "text-black" : "text-white"}
              >
                <Menu size={22} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="top"
              className="w-full h-auto px-6 pb-6 pt-4
             bg-white shadow-lg border-b"
            >
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
              </VisuallyHidden>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[20px] font-bold text-[#FFB22C]">
                  DREAM EXECUTORS
                </h2>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-5 text-[18px] text-gray-800">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-6 border-t pt-4 flex justify-center">
                <Button variant="ghost" className="text-[16px]">
                  Let’s Talk!
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
