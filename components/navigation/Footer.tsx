import React from "react";
import Link from "next/link";
import { navItems } from "@/content/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] pt-16 pb-12 px-4 sm:px-6 md:px-8 text-[var(--text-muted)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand & positioning */}
        <div className="space-y-4 max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 bg-[#C81E3A] group-hover:bg-[#FF3B47] transition-colors shadow-[0_0_8px_#C81E3A]" />
            <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--text-primary)] tracking-tight">
              David
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] ml-1">
              DTech
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-[var(--text-muted)]">
            Desarrollo de sistemas web, estrategias de trading algorítmico cuantitativo y experiencias de software en Cúcuta, Colombia.
          </p>

          <p className="text-xs text-[var(--text-subtle)]">
            Operando desde Cúcuta, Norte de Santander, Colombia — zona horaria GMT-5
          </p>
        </div>

        {/* Direct navigation */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 text-sm">
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] font-[family-name:var(--font-space-grotesk)] mb-3 uppercase tracking-wider text-xs">
              Capítulos
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FF3B47] transition-colors focus-visible:outline-none focus-visible:text-[#FF3B47]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[var(--text-primary)] font-[family-name:var(--font-space-grotesk)] mb-3 uppercase tracking-wider text-xs">
              Disciplinas
            </h4>
            <ul className="space-y-2.5 text-[var(--text-muted)]">
              <li>Desarrollo web y plataformas</li>
              <li>Pine Script v5 y MQL5</li>
              <li>Arquitectura de cBots en C#</li>
              <li>Videojuegos 2D en Unity 6</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-subtle)]">
        <p>
          © {currentYear} David. Todos los derechos reservados.
        </p>
        <p>
          Diseño cinematográfico y sistemas construidos para alto rendimiento
        </p>
      </div>
    </footer>
  );
}
