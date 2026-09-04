"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";

export function AboutSection() {
  return (
    <SectionContainer id="sobre-mi" glowPosition="top-right">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading and core statement */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-medium text-[#FF3B47] uppercase tracking-wider block">
            Trayectoria y filosofía
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] leading-tight">
            De la lectura manual del mercado al diseño de sistemas deterministas
          </h2>

          <div className="p-6 rim-border rounded-sm bg-[#14100F] space-y-3">
            <h3 className="text-sm font-semibold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
              Enfoque operativo
            </h3>
            <p className="text-xs text-[#9C9490] leading-relaxed">
              Resido en Bogotá, Colombia. Opero y construyo con una premisa única: cada regla debe ser explícita, medible y resistente a la volatilidad, tanto en el código de una aplicación como en la ejecución de un trade algorítmico.
            </p>
          </div>
        </div>

        {/* Right Column: Narrative in first person */}
        <div className="lg:col-span-7 space-y-6 text-[#9C9490] text-base sm:text-lg leading-relaxed font-normal">
          <p className="text-[#F2EDE9] font-medium text-lg sm:text-xl leading-relaxed">
            Comencé en los mercados financieros operando de manera manual. Rápidamente entendí que la intuición no escala: la inconsistencia humana y la fatiga emocional destruyen la ventaja estadística.
          </p>

          <p>
            Esa necesidad de objetividad me llevó a programar mis propios indicadores y sistemas en Pine Script v5 para TradingView. Al profundizar en conceptos institucionales de liquidez y Smart Money Concepts (SMC), automaticé la detección de cambios de carácter (CHoCH) y Order Blocks, portando posteriormente las estrategias a Expert Advisors completos en MQL5 y cBots en C# para ejecución directa en Pepperstone.
          </p>

          <p>
            La disciplina requerida para el trading algorítmico —gestión de fallos, tolerancia a latencia, control de riesgos y validación matemática— es la misma que aplico al desarrollo de software full-stack. Cuando desarrollo una aplicación web en Next.js o integro pagos con Stripe, diseño para que el sistema opere de forma predecible ante cualquier anomalía.
          </p>

          <p>
            En videojuegos y simulación 2D con Unity 6 aplico los mismos principios: arquitecturas desacopladas mediante pooling de objetos, máquinas de estado finito para IA y modelos económicos que reaccionan a la oferta y la demanda.
          </p>

          {/* Key pillars without bullet separators */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1F1918]">
            <div className="p-4 bg-[#14100F] border-l-2 border-[#C81E3A]">
              <h4 className="text-sm font-medium text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]">
                Sin sobreingeniería
              </h4>
              <p className="text-xs text-[#9C9490] mt-1">
                La solución más simple y verificable es siempre la más robusta en producción.
              </p>
            </div>

            <div className="p-4 bg-[#14100F] border-l-2 border-[#FF3B47]">
              <h4 className="text-sm font-medium text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]">
                Aceleración con criterio
              </h4>
              <p className="text-xs text-[#9C9490] mt-1">
                Aprovecho herramientas de IA para construir rápido, pero la arquitectura y auditoría son humanas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
