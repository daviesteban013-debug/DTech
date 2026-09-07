"use client";

import React from "react";
import { processSteps } from "@/content/process";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function ProcessSection() {
  return (
    <SectionContainer id="como-lo-hago" variant="surface" glowPosition="bottom-right">
      <div className="space-y-16">
        {/* Encabezado de Capítulo */}
        <SectionHeader
          chapterNumber="03"
          eyebrow="METODOLOGÍA DE INGENIERÍA"
          title="Cómo lo hago"
          description="Inspirado en la precisión de Smart Money Concepts: análisis riguroso de reglas y estructura de mercado antes de ejecutar cualquier cambio en el sistema."
        />

        {/* Línea de tiempo visual conectada verticalmente */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-[#C81E3A]/40 space-y-12 ml-2 sm:ml-6">
          {processSteps.map((step, idx) => (
            <div key={step.id} className="relative group">
              {/* Nodo luminoso en el riel de la línea de tiempo */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-6 w-5 h-5 rounded-full bg-[var(--bg-surface-card)] border-2 border-[#FF3B47] flex items-center justify-center shadow-[0_0_12px_rgba(255,59,71,0.5)] z-10">
                <div className="w-1.5 h-1.5 bg-[#FF3B47] rounded-full group-hover:scale-125 transition-transform" />
              </div>

              {/* Tarjeta de Fase */}
              <div className="p-7 sm:p-9 lg:p-10 rim-border rounded-sm bg-[var(--bg-surface-card)] flex flex-col justify-between space-y-7 hover:border-[#FF3B47]/40 transition-all duration-300">
                {/* Header de Fase */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#FF3B47] bg-[#C81E3A]/15 px-3 py-1 border border-[#FF3B47]/35 tracking-widest uppercase">
                      FASE 0{idx + 1} //
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      {step.stageName.split("—")[1]?.trim() || step.stageName}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[var(--text-subtle)]">
                    Estación {idx + 1} de 4
                  </span>
                </div>

                {/* Título de la Fase */}
                <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--text-primary)]">
                  {step.headline}
                </h3>

                {/* Cita de mentalidad operativa destacada */}
                <div className="p-4 bg-[var(--bg-surface-card-inner)] border-l-2 border-[#FF3B47] text-sm font-mono text-[var(--text-primary)] italic leading-relaxed">
                  &ldquo;{step.mindsetNote}&rdquo;
                </div>

                {/* Matriz técnica de dos columnas: Enfoque vs Entregables verificables */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                  {/* Columna 1: Enfoque de ejecución */}
                  <div className="lg:col-span-7 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                      Enfoque de ejecución
                    </span>
                    <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Columna 2: Entregables verificables */}
                  <div className="lg:col-span-5 p-5 bg-[var(--bg-surface-card-inner)] border border-[var(--border-subtle)] rounded-sm space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#FF3B47] block font-semibold">
                      Entregables verificables
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-primary)]">
                      {step.outputs.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#00E676] shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
