import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";

const poppins = Poppins({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "teamify.com",
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
        <link rel="icon" type="image/png" href="/images/logo/noir-rb.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
