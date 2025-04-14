import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div>
      <div className="relative z-10 p-8 mx-auto mt-20 w-full max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-200">
          Notre Équipe
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 bg-gray-900 rounded-lg">
            <div className="overflow-hidden relative mb-4 w-full h-64 rounded-lg">
              <Image
                src="/images/about/image-homme-equipe.png"
                alt="CEO"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-200">Jean Dupont</h3>
            <p className="text-gray-400">CEO & Fondateur</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <div className="overflow-hidden relative mb-4 w-full h-64 rounded-lg">
              <Image
                src="/images/about/image-homme-equipe.png"
                alt="CTO"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-200">Marie Leroy</h3>
            <p className="text-gray-400">CTO & Co-fondatrice</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <div className="overflow-hidden relative mb-4 w-full h-64 rounded-lg">
              <Image
                src="/images/about/image-homme-equipe.png"
                alt="CMO"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-200">Pierre Martin</h3>
            <p className="text-gray-400">CMO</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <div className="overflow-hidden relative mb-4 w-full h-64 rounded-lg">
              <Image
                src="/images/about/image-homme-equipe.png"
                alt="Lead Developer"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-200">Thomas Moreau</h3>
            <p className="text-gray-400">Lead Developer</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <div className="overflow-hidden relative mb-4 w-full h-64 rounded-lg">
              <Image
                src="/images/about/image-homme-equipe.png"
                alt="UX Designer"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-200">Sophie Lambert</h3>
            <p className="text-gray-400">UX Designer</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <div className="overflow-hidden relative mb-4 w-full h-64 rounded-lg">
              <Image
                src="/images/about/image-homme-equipe.png"
                alt="Product Manager"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-200">
              Alexandre Dubois
            </h3>
            <p className="text-gray-400">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
