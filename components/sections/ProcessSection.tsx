"use client";

import React from "react";
import { processSteps } from "@/content/process";
import { SectionContainer } from "@/components/common/SectionContainer";

export function ProcessSection() {
  return (
    <SectionContainer id="como-lo-hago" glowPosition="bottom-right">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-medium text-[#FF3B47] uppercase tracking-wider block">
            Metodología de ingeniería
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] mt-2">
            Cómo lo hago
          </h2>
          <p className="mt-4 text-base text-[#9C9490] leading-relaxed">
            Inspirado en la precisión de Smart Money Concepts: análisis riguroso del contexto y las reglas antes de ejecutar cualquier cambio en el sistema.
          </p>
        </div>

        {/* Sequential Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.id}
              className="p-8 rim-border rounded-sm bg-[#14100F] flex flex-col justify-between space-y-6 relative group hover:border-[#FF3B47]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-medium text-[#FF3B47] bg-[#C81E3A]/15 px-3 py-1 rounded-none border border-[#FF3B47]/30">
                    {step.stageName}
                  </span>
                  <span className="text-xs font-mono text-[#68615D]">
                    Paso {idx + 1} de 4
                  </span>
                </div>

                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                  {step.headline}
                </h3>

                <p className="mt-3 text-sm text-[#9C9490] leading-relaxed">
                  {step.description}
                </p>

                {/* Mindset Quote Block */}
                <div className="mt-5 p-3.5 bg-[#0E0B0A] border-l border-[#C81E3A] text-xs text-[#F2EDE9]/90 italic font-mono">
                  &ldquo;{step.mindsetNote}&rdquo;
                </div>
              </div>

              {/* Outputs block */}
              <div className="pt-4 border-t border-[#1C1615]">
                <h4 className="text-xs font-medium text-[#9C9490] mb-2 font-[family-name:var(--font-space-grotesk)] uppercase tracking-wider">
                  Resultados verificables
                </h4>
                <ul className="space-y-1.5 text-xs text-[#F2EDE9]">
                  {step.outputs.map((out, oIdx) => (
                    <li key={oIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF3B47] rounded-none shrink-0" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
