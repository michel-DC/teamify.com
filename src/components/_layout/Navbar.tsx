import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 p-4 w-full bg-transparent backdrop-blur-xl">
      <div className="container flex justify-between items-center mx-auto">
        <div className="w-auto h-12">
          <img
            src="images/logo/noir-rb.png"
            alt="Teamify Logo"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="space-x-4">
          <Link href="" className="text-gray-300 hover:text-white">
            À Propos
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="" className="text-gray-300 hover:text-white">
            Blog
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="" className="text-gray-300 hover:text-white">
            Connexion
          </Link>
        </div>
      </div>
    </nav>
  );
};
