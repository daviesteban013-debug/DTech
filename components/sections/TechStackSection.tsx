"use client";

import React from "react";
import { techStackData } from "@/content/techStack";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Layers, Terminal, Cpu, Zap, Code2 } from "lucide-react";

export function TechStackSection() {
  const levelBadgeStyles = {
    "Core diario": "border-[#FF3B47]/40 text-[#FF3B47] bg-[#C81E3A]/15",
    Especializado: "border-[#C81E3A]/30 text-[#F2EDE9] bg-[#1A1614]",
    "Herramienta avanzada": "border-[#68615D]/40 text-[#9C9490] bg-[#120E0D]",
  };

  // Glyph map for square icon placeholders
  const getTechGlyph = (name: string): string => {
    const glyphMap: Record<string, string> = {
      "Next.js": "NX",
      TypeScript: "TS",
      React: "RC",
      "Tailwind CSS": "TW",
      "C#": "C#",
      "Pine Script v5": "PS",
      MQL5: "M5",
      TradingView: "TV",
      "Pepperstone MT5": "MT",
      "Unity 6": "U6",
      "C# Scripting": "C#",
      Stripe: "ST",
      Antigravity: "AG",
      "Google Flow": "GF",
      ComfyUI: "CF",
      Vercel: "VC",
      Supabase: "SB",
    };
    return glyphMap[name] || name.slice(0, 2).toUpperCase();
  };

  return (
    <SectionContainer id="stack-herramientas" variant="surface" glowPosition="top-right">
      <div className="space-y-16">
        {/* Encabezado de Capítulo */}
        <SectionHeader
          chapterNumber="05"
          eyebrow="ECOSISTEMA TÉCNICO"
          title="Stack y herramientas"
          description="Lenguajes, entornos y tecnologías organizados por dominio práctico, con placeholders de instrumentación listos para assets vectoriales."
        />

        {/* Grid de 4 Dominios Técnicos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {techStackData.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-8 sm:p-10 rim-border rounded-sm bg-[#120E0D] flex flex-col justify-between space-y-8"
            >
              <div>
                {/* Cabecera del Dominio */}
                <div className="flex items-center justify-between border-b border-[#221817] pb-4 mb-6">
                  <div>
                    <span className="text-xs font-mono text-[#FF3B47] uppercase tracking-wider block">
                      Dominio 0{gIdx + 1}
                    </span>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] mt-1">
                      {group.domain}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#68615D]">
                    {group.items.length} tecnologías
                  </span>
                </div>

                <p className="text-sm text-[#9C9490] leading-relaxed mb-6">
                  {group.focus}
                </p>

                {/* Lista de Tecnologías con Placeholder Cuadrado de Ícono (48x48px) */}
                <div className="space-y-3.5">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-3.5 sm:p-4 bg-[#0A0808] border border-[#1C1615] rounded-none flex items-center justify-between gap-4 hover:border-[#FF3B47]/40 hover:bg-[#0E0A09] transition-all group"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Placeholder cuadrado de ícono reservado (48x48px) */}
                        <div className="w-12 h-12 rounded-sm bg-[#161110] border border-[#C81E3A]/30 flex items-center justify-center shrink-0 group-hover:border-[#FF3B47]/60 group-hover:bg-[#1F1614] transition-all shadow-[0_0_10px_rgba(200,30,58,0.12)] relative">
                          <span className="font-mono text-sm font-bold text-[#FF3B47] tracking-wider">
                            {getTechGlyph(item.name)}
                          </span>
                          {/* Corner accent marker */}
                          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#FF3B47]/40" />
                        </div>

                        {/* Nombre y detalle descriptivo (1-2 líneas máximo) */}
                        <div className="space-y-0.5 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-base font-bold text-[#F2EDE9] truncate">
                              {item.name}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-[#9C9490] line-clamp-1">
                            {item.detail}
                          </p>
                        </div>
                      </div>

                      {/* Nivel de especialización */}
                      <span
                        className={`text-[11px] font-mono px-2.5 py-1 border rounded-none whitespace-nowrap shrink-0 self-center ${
                          levelBadgeStyles[item.level]
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Indicador inferior de dominio */}
              <div className="pt-4 border-t border-[#1C1615] flex items-center justify-between text-xs font-mono text-[#68615D]">
                <span>MODULARIDAD: ALTA</span>
                <span className="text-[#9C9490]">REGLAS ESTRICTAS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
