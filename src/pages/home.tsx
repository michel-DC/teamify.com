import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

export const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <Spotlight
        className="left-0 -top-40 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 p-8 mx-auto w-full max-w-7xl md:pt-0">
        <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 md:text-7xl">
          Bienvenue sur Teamify
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg font-normal text-center text-neutral-300">
          Découvrez comment Teamify peut vous aider à organiser vos événements
          de manière efficace et collaborative.
        </p>

        <div className="flex flex-col items-center mt-8 space-y-6">
          <p className="text-center text-neutral-300">
            Rejoignez notre communauté et commencez à créer des événements
            inoubliables.
          </p>
          <img
            src="/path/to/your/image.jpg"
            alt="Événements"
            className="w-full max-w-md rounded shadow-md"
          />
          <div className="flex space-x-4">
            <a
              href="/auth/login"
              className="px-6 py-3 text-white bg-indigo-600 rounded transition duration-200 hover:bg-indigo-700"
            >
              Se connecter
            </a>
            <a
              href="/auth/register"
              className="px-6 py-3 text-white bg-teal-600 rounded transition duration-200 hover:bg-teal-700"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
