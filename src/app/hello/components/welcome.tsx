import { StepProps } from "../../../../types/steps";
import Image from "next/image";

export default function Welcome({
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
    <div className="space-y-6">
      <div className="flex justify-center">
        <Image
          src="/images/logo/team-welcome-page.png"
          alt="illustration welcome page"
          width={128}
          height={96}
          className="w-24 h-24 mb-4"
        />
      </div>
      <h1 className="text-3xl font-bold text-foreground">
        Bienvenue sur notre plateforme !
      </h1>
      <p className="text-muted-foreground">
        Nous sommes ravis de vous accueillir. Vous êtes sur le point de créer
        votre organisation et de rejoindre notre communauté.
      </p>
      <p className="text-muted-foreground">
        Cliquez sur le bouton ci-dessous pour commencer le processus de
        création.
      </p>
      <button
        onClick={handleNext}
        className="px-6 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Créer mon organisation
      </button>
    </div>
  );
}
