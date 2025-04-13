"use client";
import React from "react";
import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/Input";
import { cn } from "@/lib/utils";
import {
  IconBrandGoogle,
  IconBrandApple,
  IconBrandFacebook,
} from "@tabler/icons-react";

export const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4 mx-auto w-full max-w-md bg-white border border-solid shadow-input md:rounded-2xl md:p-8 dark:bg-black sm:max-w-sm">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Bienvenue sur Teamify
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Inscrivez vous pour accéder à votre espace et créer votre évènement
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer className="flex-1">
              <Label htmlFor="firstname">Nom</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="flex-1">
              <Label htmlFor="lastname">Prénom</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Adresse mail</Label>
            <Input id="email" placeholder="email@gmail.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword">
              Confirmez votre mot de passe
            </Label>
            <Input
              id="twitterpassword"
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 mb-4 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] cursor-pointer"
            type="submit"
          >
            S'inscrire &rarr;
            <BottomGradient />
          </button>
          <Link
            href="/auth/login"
            className="flex justify-center items-center pt-4 text-sm text-neutral-700 dark:text-neutral-300 hover:underline"
            prefetch={false}
          >
            Déjà un compte ? Connectez-vous
          </Link>

          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

          {/* <div className="flex flex-col space-y-4">
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
              type="button"
            >
              <IconBrandGoogle className="w-4 h-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Google
              </span>
              <BottomGradient />
            </button>
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
              type="button"
            >
              <IconBrandApple className="w-4 h-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Apple
              </span>
              <BottomGradient />
            </button>
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] cursor-pointer"
              type="button"
            >
              <IconBrandFacebook className="w-4 h-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Facebook
              </span>
              <BottomGradient />
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="block absolute inset-x-0 -bottom-px w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="block absolute -bottom-px inset-x-10 mx-auto w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
