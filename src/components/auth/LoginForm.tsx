"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import {
  IconBrandGoogle,
  IconBrandApple,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const LoginForm = () => {
  const router = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    setLoading(true);

    try {
      const res = await fetch("../api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Login success:", data);

        localStorage.setItem("isLoggedIn", "true");

        toast.success(
          `Vous êtes maintenant connecté en tant que ${data.user.firstname}!`,
          {
            duration: 2500,
            onAutoClose: async () => {
              const userResponse = await fetch("/api/user/has-organization", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: data.user.email }),
              });

              if (userResponse.ok) {
                const userData = await userResponse.json();

                document.cookie = "isLoggedIn=true; path=/";
                document.cookie = `hasOrganization=${userData.hasOrganization}; path=/`;

                if (userData.hasOrganization) {
                  router.push("/dashboard");
                } else {
                  router.push("/hello");
                }
              } else {
                router.push("/home");
              }
            },
          }
        );

        console.log("Redirection en cours...");
      } else {
        const errorData = await res.json();
        setError(errorData.error || "Erreur lors de la connexion");
        console.error("Login error:", errorData);
      }
    } catch (err) {
      setError("Erreur réseau");
      console.error("Network error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background px-4 sm:px-6">
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
          Vous revoilà
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground">
          Connectez-vous pour accéder à votre espace et créer votre évènement
        </p>

        <form className="mt-6 sm:mt-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
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
          <LabelInputContainer className="mb-4">
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
          {error && (
            <p className="mb-4 text-sm text-center text-destructive">{error}</p>
          )}
          <button
            className="w-full p-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? "Connexion en cours..." : "Se connecter →"}
          </button>
          <Link
            href="/auth/forgot"
            className="flex justify-center items-center pt-4 text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
            prefetch={false}
          >
            Mot de passe oublié ?
          </Link>
          <Link
            href="/auth/register"
            className="flex justify-center items-center pt-4 mt-4 mb-4 text-sm text-muted-foreground hover:text-foreground transition-all duration-200"
            prefetch={false}
          >
            Pas encore de compte ? Créer en un
          </Link>

          <div className="flex flex-col space-y-4">
            <button
              className="w-full p-2.5 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-accent transition-all duration-200 flex items-center justify-center gap-2"
              type="button"
            >
              <IconBrandGoogle className="w-4 h-4" />
              <span>Google</span>
            </button>
            <button
              className="w-full p-2.5 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-accent transition-all duration-200 flex items-center justify-center gap-2"
              type="button"
            >
              <IconBrandApple className="w-4 h-4" />
              <span>Apple</span>
            </button>
            <button
              className="w-full p-2.5 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-accent transition-all duration-200 flex items-center justify-center gap-2"
              type="button"
            >
              <IconBrandFacebook className="w-4 h-4" />
              <span>Facebook</span>
            </button>
          </div>
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
