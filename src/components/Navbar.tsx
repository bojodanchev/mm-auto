"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Начало" },
  { href: "/inventory", label: "Автомобили" },
  { href: "/about", label: "За нас" },
  { href: "/services", label: "Услуги" },
  { href: "/contact", label: "Контакти" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="text-2xl font-bold tracking-tight font-[family-name:var(--font-urbanist)]">
              <span className="text-white">MM</span>
              <span className="gradient-text"> Auto</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00a8ff] to-[#0066ff] group-hover:w-full transition-all duration-300" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00a8ff] to-[#0066ff] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+35928686072"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+359 2 868 60 72</span>
          </a>
          <Link
            href="/contact"
            className="btn-primary text-sm"
          >
            Свържете се
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-white/10" />
          <a
            href="tel:+35928686072"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2"
          >
            <Phone className="w-4 h-4" />
            <span>+359 2 868 60 72</span>
          </a>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary text-center text-sm mt-2"
          >
            Свържете се
          </Link>
        </nav>
      </div>
    </header>
  );
}
