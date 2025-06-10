import React from "react";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/_layout/Footer";
import { Navbar } from "@/components/_layout/Navbar";
import { Separator } from "@radix-ui/react-separator";
import Testimonial02 from "@/components/testimonial-02/testimonial-02";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import AboutSection from "@/components/about/AboutSection";

export default function About() {
  return (
    <div>
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none z-0",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />
        <div className="z-20 space-y-12">
          <AboutSection />
          <Team />
          <Values />
          <Testimonial02 />
        </div>
      </div>
      <Separator className="z-10 my-1 bg-white" />
      <div className="relative bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}
