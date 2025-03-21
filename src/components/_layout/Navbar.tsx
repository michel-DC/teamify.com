import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="p-4 w-full bg-gray-800">
      <div className="container flex justify-between items-center mx-auto">
        <div className="text-lg font-bold text-white">
          <Link href="/">Teamify</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">
            Pricing
          </Link>
          <Link href="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link href="/register" className="text-gray-300 hover:text-white">
            Register
          </Link>
          <Link
            href="/forgot-password"
            className="text-gray-300 hover:text-white"
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </nav>
  );
};
