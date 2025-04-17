"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("../API/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();
      console.log("Raw response:", text);

      if (res.ok) {
        const data = JSON.parse(text);
        console.log("Login success:", data);
        localStorage.setItem("isLoggedIn", "true");
        toast.success(
          `Vous êtes maintenant connecté en tant que ${data.user.firstname}!`,
          {
            duration: 2500, // real value is 3500, the value here is for the test
            onAutoClose: () => {
              router.push("/dashboard");
            },
          }
        );
      } else {
        try {
          const data = JSON.parse(text);
          setError(data.error || "Erreur lors de la connexion");
          console.error("Login error:", data);
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
          Vous revoilà
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Connectez-vous pour accéder à votre espace et créer votre évènement
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
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
          {error && (
            <p className="mb-4 text-sm text-center text-red-500">{error}</p>
          )}
          <button
            className="block relative mb-4 w-full h-10 font-medium text-white bg-gradient-to-br from-black rounded-md group/btn to-neutral-600 shadow-input dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? "Connexion en cours..." : "Se connecter →"}
            <BottomGradient />
          </button>
          <Link
            href="/auth/forgot"
            className="flex justify-center items-center pt-4 text-sm text-neutral-700 dark:text-neutral-300 hover:underline"
            prefetch={false}
          >
            Mot de passe oublié ?
          </Link>
          <Link
            href="/auth/register"
            className="flex justify-center items-center pt-4 mt-4 text-sm text-neutral-700 dark:text-neutral-300 hover:underline"
            prefetch={false}
          >
            Pas encore de compte ? Créer en un
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
