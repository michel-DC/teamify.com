import React from "react";
import { Navbar } from "@/components/_layout/Navbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full">
        <Navbar />
      </header>
      <div className="flex-1">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
