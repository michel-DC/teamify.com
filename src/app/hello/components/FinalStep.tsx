"use client";

import { useRouter } from "next/navigation";
import { StepProps } from "../../../../types/steps";

export default function FinalStep({ formData }: StepProps) {
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/organization/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // important pour envoyer les cookies !
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/dashboard");
      } else {
        const errorData = await res.json();
        alert(`Erreur: ${errorData.error || res.statusText}`);
      }
    } catch (err) {
      console.error("Erreur:", err);
      alert("Erreur lors de la création de l'organisation.");
    }
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">
        Résumé de votre organisation
      </h2>
      <ul className="list-disc pl-5 space-y-1 text-foreground">
        <li>
          <strong className="font-medium">Nom :</strong> {formData.name}
        </li>
        <li>
          <strong className="font-medium">Description :</strong> {formData.bio}
        </li>
        <li>
          <strong className="font-medium">Membres :</strong>{" "}
          {formData.memberCount}
        </li>
        <li>
          <strong className="font-medium">Taille :</strong> {formData.size}
        </li>
        <li>
          <strong className="font-medium">Mission :</strong> {formData.mission}
        </li>
        {formData.profileImage && (
          <img
            src={formData.profileImage}
            className="w-32 h-32 rounded-lg object-cover border border-border"
          />
        )}
      </ul>
      <button
        onClick={handleSubmit}
        className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Créer l'organisation
      </button>
    </div>
  );
}
