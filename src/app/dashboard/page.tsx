"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth/authController";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/Button";
import { useOrganization } from "@/hooks/useOrganization";

const Dashboard = () => {
  const router = useRouter();
  const { checkAuth, logout } = useAuth();
  const { organization, loading } = useOrganization();

  useEffect(() => {
    if (!checkAuth()) {
      toast.error(
        `Pour accéder à cette page, vous devez absolument vous connecter !`,
        {
          duration: 4000,
          onAutoClose: () => {
            router.push("/auth/login");
          },
        }
      );
    }
  }, [checkAuth, router]);

  useEffect(() => {
    if (!loading && !organization) {
      toast.error(
        `Vous devez créer une organisation pour accéder au tableau de bord.`,
        {
          duration: 2500,
          onAutoClose: () => {
            router.push("/hello");
          },
        }
      );
    }
  }, [organization, loading, router]);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <div className="flex flex-column gap-4 py-4 items-center justify-center min-h-screen">
      <Toaster position="top-center" richColors />
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <Button onClick={handleLogout}>Deconnexion</Button>
    </div>
  );
};

export default Dashboard;
