"use client";

import React from "react";
import { techStackData } from "@/content/techStack";
import { SectionContainer } from "@/components/common/SectionContainer";

export function TechStackSection() {
  const levelBadgeStyles = {
    "Core diario": "border-[#FF3B47]/40 text-[#FF3B47] bg-[#C81E3A]/10",
    Especializado: "border-[#C81E3A]/30 text-[#F2EDE9] bg-[#1A1614]",
    "Herramienta avanzada": "border-[#68615D]/40 text-[#9C9490] bg-[#120E0D]",
  };

  return (
    <SectionContainer id="stack-herramientas" glowPosition="top-right">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-medium text-[#FF3B47] uppercase tracking-wider block">
            Ecosistema técnico
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] mt-2">
            Stack y herramientas
          </h2>
          <p className="mt-4 text-base text-[#9C9490] leading-relaxed">
            Lenguajes, entornos y tecnologías organizados por dominio y nivel de aplicación práctica en proyectos reales.
          </p>
        </div>

        {/* Tech Domains Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techStackData.map((group, gIdx) => (
            <div
              key={gIdx}
              className="p-7 sm:p-8 rim-border rounded-sm bg-[#14100F] flex flex-col justify-between space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                  {group.domain}
                </h3>
                <p className="mt-1 text-xs text-[#9C9490]">
                  {group.focus}
                </p>

                {/* Tech items list with hierarchy */}
                <div className="mt-6 space-y-3">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-3 bg-[#0E0B0A] border border-[#1C1615] rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#C81E3A]/40 transition-colors"
                    >
                      <div className="space-y-0.5">
                        <span className="font-mono text-sm font-semibold text-[#F2EDE9]">
                          {item.name}
                        </span>
                        <p className="text-xs text-[#9C9490]">
                          {item.detail}
                        </p>
                      </div>

                      <span
                        className={`text-[11px] font-mono px-2.5 py-0.5 border rounded-none whitespace-nowrap self-start sm:self-center ${
                          levelBadgeStyles[item.level]
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
