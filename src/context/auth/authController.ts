import { Toaster } from "@/components/ui/sonner";
import router from "next/router";
import { toast } from "sonner";

export const useAuth = () => {
  const checkAuth = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      console.log("Bahahahaha tu n'as pas de compte");
      return false;
    }

    return true;
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    toast.success("Vous avez été déconnecté avec succès.", { duration: 3000 });
    window.location.href = "/";
  };

  return { checkAuth, logout };
};
