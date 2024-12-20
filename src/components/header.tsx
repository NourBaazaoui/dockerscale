"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-black-600">
          DockerScale
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Group: Navigation Links */}
          <div className="flex space-x-6">
            {["Features", "Pricing", "Testimonials"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 font-medium group relative"
              >
                {item}
                {/* Animation de soulignement */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-300"></div>

          {/* Group: Action Buttons */}
          <div className="flex space-x-4">
            <Link href="/ClientSide/login">
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
              >
                Log In
              </Button>
            </Link>
            <Link href="/ClientSide/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          {/* Grouped Navigation */}
          <nav className="flex flex-col items-center py-4 space-y-4">
            {/* Group: Navigation Links */}
            <div className="w-full text-center">
              {["Features", "Pricing", "Testimonials"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 font-medium hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
            {/* Separator */}
            <div className="h-px w-3/4 bg-gray-200"></div>

            {/* Group: Action Buttons */}
            <div className="flex flex-col items-center space-y-2">
              <Link href="/ClientSide/login" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  className="border-gray-300 w-32 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/ClientSide/register" onClick={() => setIsOpen(false)}>
                <Button className="w-32 bg-blue-600 hover:bg-blue-700 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
