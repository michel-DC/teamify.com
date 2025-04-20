"use client";

import { useEffect, useState } from "react";

type Organization = {
  id: number;
  name: string;
  bio?: string;
  profileImage?: string;
  memberCount: number;
  size: "PETITE" | "MOYENNE" | "GRANDE";
  mission: string;
  createdAt: string;
};

export function useOrganization() {
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/user/organization", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Erreur inconnue");
        }

        const data = await res.json();
        setOrganization(data.organization);
      } catch (err: any) {
        console.error("Erreur lors de la récupération de l'organisation:", err);
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchOrganization();
  }, []);

  return {
    organization,
    loading,
    error,
  };
}
