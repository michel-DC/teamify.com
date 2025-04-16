import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FaqSection() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-200 bg-clip-text mb-12 mt-24 md:mb-24 md:mt-42">
        Découvrez en plus sur
        <span className="text-purple-500"> Teamify</span>
      </h1>

      <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Container div with increased width */}
        <div className="w-full max-w-4xl px-6 py-8 bg-gray-800/30 rounded-xl shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Est-ce que Teamify est gratuit ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Oui, Teamify est totalement gratuit et accessible pour tous.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Comment puis-je commencer à utiliser Teamify ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Vous pouvez commencer en créant un compte gratuit sur notre site
                web. Une fois inscrit, vous aurez accès à toutes les
                fonctionnalités.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Teamify est-il sécurisé ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Absolument, nous utilisons les dernières technologies de
                cryptage pour assurer la sécurité de vos données.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Puis-je inviter des membres à rejoindre mon équipe ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Oui, vous pouvez facilement inviter des membres à rejoindre
                votre équipe via un lien d'invitation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Teamify prend-il en charge les intégrations tierces ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Oui, Teamify prend en charge plusieurs intégrations tierces pour
                améliorer votre productivité.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Puis-je utiliser Teamify sur mobile ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Oui, Teamify est entièrement responsive et peut être utilisé sur
                n'importe quel appareil mobile.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Comment puis-je contacter le support ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Vous pouvez contacter notre support via le formulaire de contact
                sur notre site web ou par email à support@teamify.com.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Teamify propose-t-il des fonctionnalités de collaboration en
                temps réel ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Oui, Teamify offre des fonctionnalités de collaboration en temps
                réel pour une meilleure coordination entre les membres de
                l'équipe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Y a-t-il une limite au nombre d'équipes que je peux créer ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Non, vous pouvez créer autant d'équipes que vous le souhaitez
                sur Teamify.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Teamify propose-t-il des modèles prédéfinis pour les projets ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Oui, nous proposons plusieurs modèles prédéfinis pour vous aider
                à démarrer rapidement vos projets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Puis-je exporter mes données depuis Teamify ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Oui, vous pouvez exporter vos données à tout moment dans
                différents formats (CSV, JSON, etc.).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="py-2">
              <AccordionTrigger className="text-lg sm:text-xl font-semibold hover:text-purple-300 transition-colors cursor-pointer">
                Teamify propose-t-il des rapports d'activité ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 font-bold transition-all duration-300 ease-in-out text-base px-4 py-4">
                Oui, vous avez accès à des rapports détaillés sur l'activité de
                votre équipe et la progression des projets.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
