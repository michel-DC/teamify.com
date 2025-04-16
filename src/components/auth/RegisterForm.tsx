"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/Input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export const RegisterForm = () => {
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("../API/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      const text = await res.text();
      console.log("Raw response:", text);

      if (res.ok) {
        const data = JSON.parse(text);
        toast.success("Compte créé avec succès!", {
          duration: 3500,
          onAutoClose: () => {
            router.push("/auth/login");
          },
        });
      } else {
        try {
          const data = JSON.parse(text);
          setError(data.error || "Une erreur est survenue");
          console.error("Registration error:", data);
        } catch (err) {
          setError("Erreur serveur: réponse non valide");
          console.error("Failed to parse error response:", text);
        }
      }
    } catch (err) {
      setError("Erreur réseau");
      console.error("Network error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Toaster position="top-center" richColors />
      <div className="p-4 mx-auto w-full max-w-md bg-white rounded-none border border-solid shadow-input md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Bienvenue sur Teamify
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Inscrivez-vous pour accéder à votre espace et créer votre évènement
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer className="flex-1">
              <Label htmlFor="firstname">Nom</Label>
              <Input
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Tyler"
                type="text"
                required
              />
            </LabelInputContainer>
            <LabelInputContainer className="flex-1">
              <Label htmlFor="lastname">Prénom</Label>
              <Input
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Durden"
                type="text"
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Adresse mail</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@gmail.com"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="confirmpassword">
              Confirmez votre mot de passe
            </Label>
            <Input
              id="confirmpassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </LabelInputContainer>

          {error && (
            <p className="mb-4 text-sm text-center text-red-500">{error}</p>
          )}

          <button
            className="block relative mb-4 w-full h-10 font-medium text-white bg-gradient-to-br from-black rounded-md group/btn to-neutral-600 shadow-input dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? "Création en cours..." : "S'inscrire →"}
            <BottomGradient />
          </button>

          <Link
            href="/auth/login"
            className="flex justify-center items-center pt-4 text-sm text-neutral-700 dark:text-neutral-300 hover:underline"
            prefetch={false}
          >
            Déjà un compte ? Connectez-vous
          </Link>
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
