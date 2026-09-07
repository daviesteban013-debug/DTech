"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/content/navigation";
import { Button } from "@/components/common/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-[var(--border-elevated)] ${
        isScrolled
          ? "bg-[var(--navbar-bg-scrolled)] backdrop-blur-md py-3.5 sm:py-4 shadow-[var(--navbar-shadow)]"
          : "bg-[var(--navbar-bg)] backdrop-blur-md py-6 sm:py-7 lg:py-7.5 shadow-sm"
      }`}
    >
      {/* Borde inferior con Rim Light y Glow Rojo característico de DTech */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF3B47]/70 to-transparent pointer-events-none transition-all duration-300"
        style={{
          boxShadow: isScrolled
            ? "0 1px 12px rgba(255, 59, 71, 0.45), 0 0 4px rgba(200, 30, 58, 0.3)"
            : "0 1px 10px rgba(255, 59, 71, 0.3), 0 0 3px rgba(200, 30, 58, 0.2)",
        }}
      />

      {/* Difusión suave de luz hacia abajo */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-3 bg-gradient-to-b from-[#C81E3A]/10 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Identidad de marca (Logo que mantiene su lenguaje visual intocable) */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-xl sm:text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--text-primary)] tracking-tight focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF3B47]"
        >
          <span className="w-3 h-3 rounded-none bg-[#C81E3A] group-hover:bg-[#FF3B47] transition-all shadow-[0_0_14px_rgba(255,59,71,0.6)] group-hover:scale-110" />
          <span className="tracking-tight transition-colors">David</span>
          <span className="text-[var(--text-muted)] font-normal text-xs sm:text-sm tracking-wider uppercase ml-1">
            DTech
          </span>
        </Link>

        {/* Links de navegación desktop centrados con espaciado vertical óptimo */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-xs lg:text-sm font-medium transition-all duration-200 px-3.5 py-2 rounded-sm flex items-center gap-1.5 focus-visible:outline-none focus-visible:text-[var(--text-primary)] ${
                  isActive
                    ? "text-[var(--text-primary)] bg-[#C81E3A]/15 border border-[#FF3B47]/40 shadow-[0_0_12px_rgba(200,30,58,0.2)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-card-inner)] border border-transparent"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#FF3B47] rounded-none animate-pulse shrink-0 shadow-[0_0_8px_#FF3B47]" />
                )}
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-transparent via-[#FF3B47] to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Controles derechos: ThemeToggle animado + Botón CTA "Contactar" */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          <Link
            href="/contacto"
            className="relative inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold font-[family-name:var(--font-space-grotesk)] tracking-wider uppercase text-[var(--text-primary)] bg-[var(--bg-surface-card-inner)] hover:bg-[var(--bg-surface-elevated)] border border-[#C81E3A]/45 hover:border-[#FF3B47] rounded-sm transition-all duration-200 shadow-[0_0_16px_rgba(200,30,58,0.18)] hover:shadow-[0_0_24px_rgba(255,59,71,0.35)] group overflow-hidden"
          >
            {/* Detalle de esquina característico */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#FF3B47]/40" />
            {/* Sutil barrido de luz al hacer hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF3B47]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              <span>Contactar</span>
              <span className="w-1.5 h-1.5 bg-[#FF3B47] rounded-none group-hover:scale-125 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Gatillo de menú mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[var(--text-primary)] hover:text-[#FF3B47] focus-visible:outline-none rounded-sm bg-[var(--bg-surface-card-inner)] border border-[var(--border-elevated)]"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menú desplegable mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-b border-[#C81E3A]/30 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2.5 px-3 flex items-center justify-between border-b border-[var(--border-subtle)] ${
                    isActive
                      ? "text-[#FF3B47] bg-[#C81E3A]/15 border-l-2 border-l-[#FF3B47]"
                      : "text-[var(--text-primary)] hover:text-[#FF3B47]"
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


