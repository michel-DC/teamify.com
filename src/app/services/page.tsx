import { Navbar } from "@/components/_layout/Navbar";
import ServicesSection from "@/components/services/services";
import { cn } from "@/lib/utils";
import React from "react";

export default function Services() {
  return (
    <div>
      {" "}
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
        <div className="z-20">
          <div className="relative z-10 p-8 mx-auto mt-32 w-full max-w-7xl">
            <h1 className="text-6xl font-extrabold text-center text-gray-200 bg-clip-text md:text-7xl">
              Les services que proposes{" "}
              <span className="text-purple-500">Teamify</span>
            </h1>
            <ServicesSection />
          </div>
        </div>
      </div>
    </div>
  );
}
