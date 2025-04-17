"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth/authController";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/Button";

const Dashboard = () => {
  const router = useRouter();
  const { checkAuth } = useAuth();

  useEffect(() => {
    if (!checkAuth()) {
      toast.error(
        `Vous ne possedez pas encore de compte, pour acceder à cette page vous devez en créer un.`,
        {
          duration: 2500, //
          onAutoClose: () => {
            router.push("/auth/login");
          },
        }
      );
    }
  }, [checkAuth, router]);

  return (
    <div>
      <Toaster position="top-center" richColors />
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <Button>Deconnexion</Button>
    </div>
  );
};

export default Dashboard;
