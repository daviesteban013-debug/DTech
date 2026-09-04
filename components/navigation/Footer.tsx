import React from "react";
import { navItems } from "@/content/navigation";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#0E0B0A] border-t border-[#C81E3A]/20 pt-16 pb-12 px-4 sm:px-6 md:px-8 text-[#9C9490]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand & positioning */}
        <div className="space-y-4 max-w-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#C81E3A] shadow-[0_0_8px_#C81E3A]" />
            <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] tracking-tight">
              David
            </span>
            <span className="text-xs uppercase tracking-widest text-[#9C9490] ml-1">
              DTech
            </span>
          </div>

          <p className="text-sm leading-relaxed text-[#9C9490]">
            Desarrollo de sistemas web, estrategias de trading algorítmico cuantitativo y experiencias de software en Cucuta, Colombia.
          </p>

          <p className="text-xs text-[#68615D]">
            Operando desde Cucuta, Norte de Santander, Colombia — zona horaria GMT-5
          </p>
        </div>

        {/* Direct navigation */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 text-sm">
          <div>
            <h4 className="font-semibold text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)] mb-3">
              Secciones
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#F2EDE9] transition-colors focus-visible:outline-none focus-visible:text-[#FF3B47]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)] mb-3">
              Disciplinas
            </h4>
            <ul className="space-y-2 text-[#9C9490]">
              <li>Desarrollo web y plataformas</li>
              <li>Pine Script v5 y MQL5</li>
              <li>Arquitectura de cBots en C#</li>
              <li>Videojuegos 2D en Unity 6</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright line */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#1C1715] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68615D]">
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
