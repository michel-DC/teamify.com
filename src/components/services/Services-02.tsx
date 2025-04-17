import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUsers,
  faProjectDiagram,
  faComments,
  faCogs,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

interface Service {
  color: string;
  icon: any;
  title: string;
  description: string;
}

const serviceList: Service[] = [
  {
    color: "purple",
    icon: faCalendarAlt,
    title: "Gestion d'événements",
    description:
      "Organisation complète de vos événements, de la planification à l'exécution, pour une expérience sans tracas.",
  },
  {
    color: "purple",
    icon: faUsers,
    title: "Coordination d'équipe",
    description:
      "Optimisation de la collaboration entre les membres de votre équipe pour une productivité maximale.",
  },
  {
    color: "purple",
    icon: faProjectDiagram,
    title: "Planification de projets",
    description:
      "Création de plans de projet détaillés et suivi des progrès pour garantir le respect des délais.",
  },
  {
    color: "purple",
    icon: faComments,
    title: "Communication d'équipe",
    description:
      "Mise en place de canaux de communication efficaces pour une coordination fluide entre les membres.",
  },
  {
    color: "purple",
    icon: faCogs,
    title: "Gestion des ressources",
    description:
      "Allocation et suivi des ressources pour une utilisation optimale tout au long de votre projet pour vous et votre équipe dans prise de tête.",
  },
  {
    color: "purple",
    icon: faChartLine,
    title: "Analyse de performance",
    description:
      "Suivi et évaluation des performances de l'équipe pour identifier les points forts et les axes d'amélioration.",
  },
];

interface ServiceItemProps {
  service: Service;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => (
  <div className="bg-gray-800 rounded-lg p-4 md:p-12 h-full transition-transform hover:scale-105">
    <div
      className={`flex items-center w-20 h-20 bg-gray-800 shadow-xl rounded-full justify-center p-5 text-3xl text-${service.color}-500`}
    >
      <FontAwesomeIcon icon={service.icon} />
    </div>
    <div className="mt-4">
      <h5 className="text-2xl font-medium mb-3 text-gray-200">
        {service.title}
      </h5>
      <p className="text-lg text-gray-400 mb-0">{service.description}</p>
    </div>
  </div>
);

export const Service23: React.FC = () => {
  return (
    <section className="py-14 md:py-24 text-white">
      <h1 className="text-4xl font-extrabold text-center text-gray-200 bg-clip-text md:text-6xl mb-24">
        Découvrez nos <span className="text-purple-500"> services</span>
      </h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap"></div>
        <div className="w-full flex flex-wrap gap-y-8">
          {serviceList.map((service, i) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 h-full" key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
