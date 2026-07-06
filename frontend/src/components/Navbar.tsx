"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/Logo/Food-undo.png";

const Navbar = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <Image
            src={Logo}
            alt="Food Undo"
            width={180}
            height={70}
            className="object-contain p-2 mt-4"
          />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link href="/menu" className="hover:text-orange-500 transition">
            Menu
          </Link>

          <Link href="/shops" className="hover:text-orange-500 transition">
            Restaurants
          </Link>

          <Link href="/offers" className="hover:text-orange-500 transition">
            Offers
          </Link>

          <Link href="/about" className="hover:text-orange-500 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="relative">
            🛒
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <button
            onClick={() =>
              setBtnNameReact(
                btnNameReact === "Login" ? "Logout" : "Login"
              )
            }
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
          >
            {btnNameReact}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;