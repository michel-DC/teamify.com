"use client";
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic here
    console.log(formData);
    // ici c'est pour les backend donc pas mon problème
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <div className="absolute pointer-events-none z-1">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
          alt=""
        />
      </div>
      <div className="bg-[var(--card)] p-8 rounded-lg shadow-lg max-w-md w-full border border-[var(--foreground)]">
        <h2 className="text-3xl text-[var(--foreground)] font-bold text-center mb-8">
          S'inscrire
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-[var(--foreground)] font-medium mb-2"
            >
              Nom d'utilisateur
            </label>
            <div className="relative">
              <FaUserPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 text-[var(--foreground)] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[var(--foreground)] font-medium mb-2"
            >
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 text-[var(--foreground)] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-[var(--foreground)] font-medium mb-2"
            >
              Mot de passe
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 text-[var(--foreground)] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-[var(--foreground)] font-medium mb-2"
            >
              Confirmer le mot de passe
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-2 text-[var(--foreground)] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]"
                required
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-[var(--foreground)] focus:ring-[var(--foreground)] border-[var(--border)] rounded"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-[var(--foreground)]"
            >
              Se souvenir de moi
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--foreground)] text-[var(--background)] py-2 px-4 rounded-lg hover:bg-[var(--input-hover)] transition-colors duration-200 flex items-center justify-center cursor-pointer"
          >
            <FaUserPlus className="mr-2" />
            S'inscrire
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => console.log("Switch to login")}
            className="text-[var(--muted-foreground)] cursor-pointer hover:text-[var(--foreground)]"
          >
            Déjà un compte ? Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};
