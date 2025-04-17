import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div>
      <div className="relative z-10 p-8 mx-auto mt-32 w-full max-w-7xl">
        <h1 className="text-6xl font-extrabold text-center text-gray-200 bg-clip-text md:text-6xl">
          À propos de <span className="text-purple-500">Teamify</span>
        </h1>

        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-200">Notre Mission</h2>
            <p className="text-lg text-gray-400">
              Chez Teamify, nous croyons que la gestion d'événements devrait
              être simple, intuitive et collaborative. Notre mission est de
              fournir une plateforme tout-en-un qui permet aux équipes de
              planifier, organiser et suivre leurs événements avec une
              efficacité maximale.
            </p>

            <h2 className="text-3xl font-bold text-gray-200">Notre Histoire</h2>
            <p className="text-lg text-gray-400">
              Fondée en 2023 par une équipe de passionnés de technologie et
              d'organisation d'événements, Teamify est née de la frustration
              face aux outils existants. Nous avons combiné notre expertise en
              développement logiciel et en gestion de projet pour créer une
              solution qui répond aux besoins réels des équipes modernes.
            </p>
          </div>

          <div className="overflow-hidden relative h-96 rounded-lg">
            <Image
              src="/images/about/equipe-illustration.png"
              alt="Équipe en collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
