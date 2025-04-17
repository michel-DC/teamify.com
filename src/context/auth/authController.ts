import { Toaster } from "@/components/ui/sonner";
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
    toast.success("Vous avez été déconnecté avec succès.");
    window.location.href = "/";
  };

  return { checkAuth, logout };
};
