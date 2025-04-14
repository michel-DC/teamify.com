import React from "react";

export default function Values() {
  return (
    <div>
      <div className="relative z-10 p-8 mx-auto mt-20 w-full max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-200">
          Nos Valeurs
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold text-gray-200">Innovation</h3>
            <p className="text-gray-400">
              Nous repoussons constamment les limites de la technologie pour
              offrir des solutions innovantes. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Obcaecati vitae vel molestiae
              tempora error ad exercitationem, quaerat eveniet provident sit
              aspernatur. Facere provident fuga quia vitae quasi itaque? Ab,
              vitae?
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold text-gray-200">Collaboration</h3>
            <p className="text-gray-400">
              Nous croyons en la puissance du travail d'équipe, tant en interne
              qu'avec nos clients. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aliquid consequatur a culpa exercitationem
              distinctio ipsam voluptas id temporibus magni labore, ea veritatis
              accusamus et impedit repellendus. Quia rerum eos tempore?
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg">
            <h3 className="text-xl font-bold text-gray-200">Transparence</h3>
            <p className="text-gray-400">
              Nous maintenons une communication ouverte et honnête avec toutes
              les parties prenantes. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Unde ullam reprehenderit deserunt aspernatur
              animi sed necessitatibus ex optio minus deleniti neque provident
              doloremque, veritatis quod possimus, eligendi molestias, cum
              cupiditate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
