import React from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boostez votre taux de conversion",
    href: "#",
    description:
      "Découvrez des stratégies efficaces pour augmenter votre taux de conversion et maximiser vos ventes. Apprenez à optimiser votre site web et vos campagnes marketing.",
    date: "16 mars 2023",
    datetime: "2023-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Jean Dupont",
      role: "Expert en Marketing Digital",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Améliorez la fidélisation de vos clients",
    href: "#",
    description:
      "Apprenez des stratégies pour fidéliser vos clients et renforcer leur engagement. Découvrez les dernières tendances en gestion de la relation client.",
    date: "5 avril 2023",
    datetime: "2023-04-05",
    category: { title: "Business", href: "#" },
    author: {
      name: "Marie Martin",
      role: "Responsable Relation Client",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "L'avenir du travail à distance",
    href: "#",
    description:
      "Explorez comment le travail à distance transforme les entreprises et découvrez les outils essentiels pour rester productif dans un environnement distribué.",
    date: "12 mai 2023",
    datetime: "2023-05-12",
    category: { title: "Technologie", href: "#" },
    author: {
      name: "Pierre Leroy",
      role: "Chef de Produit",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Maîtrisez la gestion du temps",
    href: "#",
    description:
      "Découvrez des techniques efficaces de gestion du temps pour booster votre productivité et atteindre vos objectifs plus rapidement.",
    date: "20 juin 2023",
    datetime: "2023-06-20",
    category: { title: "Productivité", href: "#" },
    author: {
      name: "Sophie Lambert",
      role: "Coach en Productivité",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    title: "Construire une culture d'entreprise forte",
    href: "#",
    description:
      "Découvrez les éléments clés pour créer une culture d'entreprise positive et productive qui attire et retient les meilleurs talents.",
    date: "8 juillet 2023",
    datetime: "2023-07-08",
    category: { title: "Leadership", href: "#" },
    author: {
      name: "Thomas Moreau",
      role: "Directeur RH",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    title: "Stratégies de communication d'équipe efficaces",
    href: "#",
    description:
      "Apprenez à améliorer la communication au sein de votre équipe pour renforcer la collaboration et la productivité.",
    date: "15 août 2023",
    datetime: "2023-08-15",
    category: { title: "Travail d'équipe", href: "#" },
    author: {
      name: "Camille Dubois",
      role: "Spécialiste en Communication",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 7,
    title: "L'innovation à l'ère numérique",
    href: "#",
    description:
      "Explorez comment la transformation numérique stimule l'innovation dans tous les secteurs et ce que cela signifie pour l'avenir des entreprises.",
    date: "22 septembre 2023",
    datetime: "2023-09-22",
    category: { title: "Innovation", href: "#" },
    author: {
      name: "Alexandre Roux",
      role: "Consultant en Innovation",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 8,
    title: "L'innovation à l'ère numérique",
    href: "#",
    description:
      "Explorez comment la transformation numérique stimule l'innovation dans tous les secteurs et ce que cela signifie pour l'avenir des entreprises.",
    date: "22 septembre 2023",
    datetime: "2023-09-22",
    category: { title: "Innovation", href: "#" },
    author: {
      name: "Alexandre Roux",
      role: "Consultant en Innovation",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 9,
    title: "L'innovation à l'ère numérique",
    href: "#",
    description:
      "Explorez comment la transformation numérique stimule l'innovation dans tous les secteurs et ce que cela signifie pour l'avenir des entreprises.",
    date: "22 septembre 2023",
    datetime: "2023-09-22",
    category: { title: "Innovation", href: "#" },
    author: {
      name: "Alexandre Roux",
      role: "Consultant en Innovation",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function BlogSection() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-200 bg-clip-text mb-12 mt-24 md:mb-24 md:mt-42">
        Découvrez notre
        <span className="text-purple-500"> Blog</span>
      </h1>

      <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-12">
        <div className="w-full max-w-7xl px-6 py-8 bg-gray-800/30 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
              >
                <div className="flex items-center gap-x-4 text-sm">
                  <time dateTime={post.datetime} className="text-gray-400">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-purple-500/10 px-3 py-1.5 font-medium text-purple-400 hover:bg-purple-500/20"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative mt-4">
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm text-gray-400">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-6 flex items-center gap-x-4">
                  <Image
                    alt="profile-picture-user"
                    src={post.author.imageUrl}
                    width="40"
                    height="40"
                    className="size-10 rounded-full bg-gray-800"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-200">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-400">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors cursor-pointer">
              Voir plus d'articles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
