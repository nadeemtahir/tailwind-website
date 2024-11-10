"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header>
      <nav className="navbar bg-gray-800 dark:bg-gray-900 text-white shadow-xl">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="navbar-brand text-2xl font-bold text-teal-400">
            Tech Insights
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="nav-link text-white hover:text-teal-300 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-link text-white hover:text-teal-300 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="nav-link text-white hover:text-teal-300 transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white px-6 py-4">
            <Link
              href="/"
              className="block py-2 text-lg font-medium hover:text-teal-300 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-lg font-medium hover:text-teal-300 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-lg font-medium hover:text-teal-300 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
