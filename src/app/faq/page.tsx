import React from "react";
import { Footer } from "@/components/_layout/Footer";
import { Navbar } from "@/components/_layout/Navbar";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import FaqSection from "@/components/faq/FaqSection";

export default function Faq() {
  return (
    <div>
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      <div className="relative flex flex-col items-center justify-start min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none z-0",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />
        <div className="z-20 w-full">
          <div className="relative z-10 p-8 mx-auto w-full max-w-7xl mb-12">
            <FaqSection />
          </div>
        </div>
        <Separator className="z-10 my-3 bg-white h-[4px] w-full" />
        <div className="relative bottom-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
