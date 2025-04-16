import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Teamify | Gestion d'événements en équipe",
  description: "Avec teamify ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.className} h-full bg-background text-foreground`}
    >
      <head>
        <link rel="icon" href="/images/logo/favicon.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
