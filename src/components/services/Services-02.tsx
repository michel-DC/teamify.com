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
  <div className="flex flex-col items-start justify-between p-8 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors h-full min-h-[300px] w-full">
    <div className="flex items-center gap-x-4">
      <div className={`rounded-full p-4 bg-purple-500/10 text-purple-400`}>
        <FontAwesomeIcon icon={service.icon} className="w-8 h-8" />
      </div>
    </div>
    <div className="group relative mt-6">
      <h3 className="text-2xl font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">
        {service.title}
      </h3>
      <p className="mt-4 text-lg text-gray-400">{service.description}</p>
    </div>
  </div>
);

export const Service23: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-200 bg-clip-text mb-12 mt-24 md:mb-24 md:mt-42">
        Découvrez nos
        <span className="text-purple-500"> services</span>
      </h1>

      <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-12">
        <div className="w-full max-w-7xl px-6 py-8 bg-gray-800/30 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviceList.map((service, i) => (
              <ServiceItem key={i} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
