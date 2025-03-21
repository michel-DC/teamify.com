import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/Button";

export const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-auto rounded-md bg-black/[0.96] antialiased">
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
      <div className="relative z-10 p-8 mx-auto w-full max-w-5xl text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 md:text-7xl">
          Bienvenue sur <span className="text-indigo-500">Teamify</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Organisez vos événements de manière efficace et collaborative avec
          notre plateforme intuitive.
        </p>

        <div className="flex flex-col gap-4 justify-center items-center mt-8 sm:flex-row">
          <input
            type="email"
            placeholder="Votre email"
            className="px-5 py-3 w-72 text-white bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500"
          />
          <Button className="px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
            Se connecter
          </Button>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-semibold text-gray-200">
            Nos fonctionnalités
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-gray-400">
            Découvrez nos outils pour simplifier l'organisation de vos
            événements.
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-xl border border-gray-800 shadow-md"
              >
                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Planification",
    description:
      "Organisez vos événements facilement avec notre outil de planification.",
  },
  {
    title: "Collaboration",
    description:
      "Travaillez avec votre équipe en temps réel pour une meilleure coordination.",
  },
  {
    title: "Suivi",
    description:
      "Suivez l'avancement de vos événements et ajustez vos plans en conséquence.",
  },
];
