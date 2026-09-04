"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/content/navigation";
import { Button } from "@/components/common/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0808]/90 backdrop-blur-md border-b border-[#C81E3A]/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] tracking-tight focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3B47]"
        >
          <span className="w-2.5 h-2.5 rounded-none bg-[#C81E3A] group-hover:bg-[#FF3B47] transition-colors shadow-[0_0_10px_#C81E3A]" />
          <span>David</span>
          <span className="text-[#9C9490] font-normal text-xs tracking-wider uppercase ml-1">
            DTech
          </span>
        </a>

        {/* Desktop navigation links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#9C9490] hover:text-[#F2EDE9] transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:text-[#F2EDE9]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Direct CTA button */}
        <div className="hidden md:flex items-center">
          <Button href="#contacto" variant="secondary" size="sm">
            Contactar
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 text-[#F2EDE9] hover:text-[#FF3B47] focus-visible:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14100F] border-b border-[#C81E3A]/30 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#F2EDE9] hover:text-[#FF3B47] py-2 border-b border-[#241D1B]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                href="#contacto"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contactar
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
