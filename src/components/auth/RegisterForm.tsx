"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/Input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Sun, Moon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const RegisterForm = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(isDarkMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", isDarkMode);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("../api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      const text = await res.text();
      console.log("Raw response:", text);

      if (res.ok) {
        const data = JSON.parse(text);
        toast.success(`Bienvenue sur teamify ${lastname} !`, {
          duration: 4000,
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
    <div className="flex flex-col justify-center items-center min-h-screen bg-background px-4">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-card hover:bg-accent transition-colors duration-200"
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5 text-foreground" />
        ) : (
          <Sun className="w-5 h-5 text-foreground" />
        )}
      </button>
      <Toaster position="top-center" richColors />
      <div className="p-6 sm:p-8 w-full max-w-md bg-card rounded-lg border border-border shadow-sm">
        <Link
          href="/"
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 mb-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>
        <h2 className="text-lg sm:text-xl font-medium text-foreground">
          Bienvenue sur Teamify
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Inscrivez-vous pour accéder à votre espace et créer votre évènement
        </p>

        <form className="mt-6 sm:mt-8" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Prénom</Label>
              <Input
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="Tyler"
                type="text"
                required
                className="bg-secondary"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Nom</Label>
              <Input
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Durden"
                type="text"
                className="bg-secondary"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email">Adresse mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@gmail.com"
                required
                className="bg-secondary"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-secondary"
              />
            </LabelInputContainer>
            <LabelInputContainer>
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
                className="bg-secondary"
              />
            </LabelInputContainer>
          </div>

          {error && (
            <p className="mt-4 text-sm text-center text-destructive">{error}</p>
          )}

          <button
            className="w-full mt-6 p-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            type="submit"
            disabled={loading}
          >
            {loading ? "Création en cours..." : "S'inscrire →"}
          </button>

          <Link
            href="/auth/login"
            className="flex justify-center items-center pt-4 text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
            prefetch={false}
          >
            Déjà un compte ? Connectez-vous
          </Link>
        </form>
      </div>
    </div>
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
