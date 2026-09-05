"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/navigation";
import { Button } from "@/components/common/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0808]/92 backdrop-blur-md border-b border-[#C81E3A]/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
          : "bg-[#0A0808]/60 backdrop-blur-sm border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Brand identity linking to root "/" */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] tracking-tight focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3B47]"
        >
          <span className="w-2.5 h-2.5 rounded-none bg-[#C81E3A] group-hover:bg-[#FF3B47] transition-colors shadow-[0_0_12px_#C81E3A]" />
          <span>David</span>
          <span className="text-[#9C9490] font-normal text-xs tracking-wider uppercase ml-1">
            DTech
          </span>
        </Link>

        {/* Desktop navigation links with active state detection */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs lg:text-sm font-medium transition-all duration-200 px-3 py-1.5 flex items-center gap-1.5 focus-visible:outline-none focus-visible:text-[#F2EDE9] ${
                  isActive
                    ? "text-[#F2EDE9] bg-[#C81E3A]/15 border-b-2 border-[#FF3B47] shadow-[0_0_12px_rgba(200,30,58,0.25)]"
                    : "text-[#9C9490] hover:text-[#F2EDE9] border-b-2 border-transparent"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#FF3B47] rounded-none animate-pulse shrink-0" />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Direct CTA button */}
        <div className="hidden md:flex items-center">
          <Button href="/contacto" variant="secondary" size="sm">
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
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 flex items-center justify-between border-b border-[#241D1B] ${
                    isActive
                      ? "text-[#FF3B47] bg-[#C81E3A]/15 border-l-2 border-l-[#FF3B47]"
                      : "text-[#F2EDE9] hover:text-[#FF3B47]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-mono text-[#FF3B47]">ACTUAL</span>
                  )}
                </Link>
              );
            })}
            <div className="pt-3">
              <Button
                href="/contacto"
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
