import { Navbar } from "@/components/_layout/Navbar";
import { CompanyDescription } from "@/components/about/CompanyDescription";
import { Organigram } from "@/components/about/Organigram";
import React from "react";
import { cn } from "@/lib/utils";
import { Testimonials } from "@/components/about/Testimonials";
import { Footer } from "@/components/_layout/Footer";

export default function About() {
  return (
    <div>
      <div className="absolute top-0 mb-8 w-full">
        <Navbar />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />
        <div className="relative z-10 p-8 mx-auto mt-20 w-full max-w-5xl text-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 opacity-0 md:text-7xl animate-fadeIn">
            À propos de Teamify
          </h1>
          <div className="mt-16 w-full max-w-5xl">
            <div className="grid grid-cols-1 gap-6 mt-8 mb-12 md:grid-cols-3">
              <CompanyDescription />
              <Organigram />
              <Testimonials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
