"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 w-full backdrop-blur-xl bg-black/50">
      <div className="container flex relative justify-between items-center mx-auto">
        <div className="w-auto h-12">
          <Image
            width={500}
            height={100}
            src="/images/logo/noir-rb.png"
            alt="Teamify Logo"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="relative space-x-4">
          <Link
            href="/about"
            className="text-gray-300 cursor-pointer hover:text-white"
          >
            À Propos
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/services"
            className="text-gray-300 cursor-pointer hover:text-white"
          >
            Services
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/blog"
            className="text-gray-300 cursor-pointer hover:text-white"
          >
            Blog
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/faq"
            className="text-gray-300 cursor-pointer hover:text-white"
          >
            FAQ
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/auth/login"
            className="text-gray-300 cursor-pointer hover:text-white"
          >
            Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
};
