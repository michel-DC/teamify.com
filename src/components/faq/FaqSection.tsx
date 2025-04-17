import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Est-ce que Teamify est gratuit ?",
    answer: "Oui, Teamify est totalement gratuit et accessible pour tous.",
  },
  {
    question: "Comment puis-je commencer à utiliser Teamify ?",
    answer:
      "Vous pouvez commencer en créant un compte gratuit sur notre site web. Une fois inscrit, vous aurez accès à toutes les fonctionnalités.",
  },
  {
    question: "Teamify est-il sécurisé ?",
    answer:
      "Absolument, nous utilisons les dernières technologies de cryptage pour assurer la sécurité de vos données.",
  },
  {
    question: "Puis-je inviter des membres à rejoindre mon équipe ?",
    answer:
      "Oui, vous pouvez facilement inviter des membres à rejoindre votre équipe via un lien d'invitation.",
  },
  {
    question: "Teamify prend-il en charge les intégrations tierces ?",
    answer:
      "Oui, Teamify prend en charge plusieurs intégrations tierces pour améliorer votre productivité.",
  },
  {
    question: "Puis-je utiliser Teamify sur mobile ?",
    answer:
      "Oui, Teamify est entièrement responsive et peut être utilisé sur n'importe quel appareil mobile.",
  },
  {
    question: "Comment puis-je contacter le support ?",
    answer:
      "Vous pouvez contacter notre support via le formulaire de contact sur notre site web ou par email à support@teamify.com.",
  },
  {
    question:
      "Teamify propose-t-il des fonctionnalités de collaboration en temps réel ?",
    answer:
      "Oui, Teamify offre des fonctionnalités de collaboration en temps réel pour une meilleure coordination entre les membres de l'équipe.",
  },
  {
    question: "Y a-t-il une limite au nombre d'équipes que je peux créer ?",
    answer:
      "Non, vous pouvez créer autant d'équipes que vous le souhaitez sur Teamify.",
  },
  {
    question: "Teamify propose-t-il des modèles prédéfinis pour les projets ?",
    answer:
      "Oui, nous proposons plusieurs modèles prédéfinis pour vous aider à démarrer rapidement vos projets.",
  },
  {
    question: "Puis-je exporter mes données depuis Teamify ?",
    answer:
      "Oui, vous pouvez exporter vos données à tout moment dans différents formats (CSV, JSON, etc.).",
  },
  {
    question: "Teamify propose-t-il des rapports d'activité ?",
    answer:
      "Oui, vous avez accès à des rapports détaillés sur l'activité de votre équipe et la progression des projets.",
  },
];

export default function FaqSection() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-200 bg-clip-text mb-12 mt-24 md:mb-24 md:mt-42">
        En savoir plus sur
        <span className="text-purple-500"> nous</span>
      </h1>

      <div className="text-white flex flex-col justify-center items-center">
        <div className="w-full max-w-7xl px-6 py-8 bg-gray-800/30 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.slice(0, 6).map((item, i) => (
                <AccordionItem
                  key={`item-${i + 1}`}
                  value={`item-${i + 1}`}
                  className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold text-gray-200 hover:text-purple-300 transition-colors cursor-pointer">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-3 text-sm text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.slice(6).map((item, i) => (
                <AccordionItem
                  key={`item-${i + 7}`}
                  value={`item-${i + 7}`}
                  className="p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-semibold text-gray-200 hover:text-purple-300 transition-colors cursor-pointer">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-3 text-sm text-gray-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
