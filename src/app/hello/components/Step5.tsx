"use client";

import { StepProps } from "../../../../types/steps";

export default function Step5({
  next,
  prev,
  formData,
  setFormData,
}: StepProps) {
  const handleNext = () => {
    if (next) next();
  };

  const handlePrev = () => {
    if (prev) prev();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">
        Quelle est la taille de votre organisation ?
      </h2>
      <select
        className="w-full p-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all duration-200"
        value={formData.size}
        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
      >
        <option value="" className="text-muted-foreground">
          Choisir
        </option>
        <option value="PETITE" className="text-foreground">
          Petite
        </option>
        <option value="MOYENNE" className="text-foreground">
          Moyenne
        </option>
        <option value="GRANDE" className="text-foreground">
          Grande
        </option>
      </select>
      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-sm font-medium text-foreground bg-secondary rounded-md hover:bg-secondary/80 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
        >
          Précedent
        </button>
        <button
          onClick={handleNext}
          disabled={!formData.size}
          className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
