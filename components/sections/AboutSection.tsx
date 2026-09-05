"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrendingUp, Terminal, Gamepad2, User, Camera } from "lucide-react";

export function AboutSection() {
  const evolutionSteps = [
    {
      step: "01",
      domain: "TRADING CUANTITATIVO",
      icon: TrendingUp,
      title: "Eliminación del sesgo emocional",
      summary: "De la lectura manual en gráficos a sistemas deterministas en Pine Script v5 y MQL5.",
      highlights: [
        "Smart Money Concepts (SMC) formalizados en código matemático",
        "Scoring dinámico de Order Blocks y detección de CHoCH sin repintado",
        "Ejecución automatizada desatendida en MetaTrader 5 (Pepperstone)",
      ],
      metric: "Reglas 100% objetivas",
    },
    {
      step: "02",
      domain: "INGENIERÍA FULL-STACK",
      icon: Terminal,
      title: "Arquitecturas resilientes",
      summary: "Aplicación de la disciplina de tolerancia a fallos al desarrollo web moderno.",
      highlights: [
        "Desarrollo serverless modular en Next.js App Router con TypeScript",
        "Integración de pagos con Stripe y tokens efímeros post-webhook",
        "Scaffolding acelerado con agentes IA manteniendo capas desacopladas",
      ],
      metric: "Cero tolerancia a datos corruptos",
    },
    {
      step: "03",
      domain: "SIMULACIÓN Y VIDEOJUEGOS",
      icon: Gamepad2,
      title: "Sistemas en tiempo real",
      summary: "Entornos 2D interactivos en Unity 6 con economía dinámica y pooling de memoria.",
      highlights: [
        "Máquinas de estado finito (FSM) para comportamiento de IA",
        "Object Pooling de alto rendimiento sin pausas de Garbage Collector",
        "Sistemas dinámicos de oferta y demanda en loops de juego",
      ],
      metric: "60 FPS estables en combate",
    },
  ];

  return (
    <SectionContainer id="sobre-mi" variant="surface" glowPosition="top-right">
      <div className="space-y-20">
        {/* Momento 1: Encabezado, Statement Monumental y Placeholder de Retrato 4:5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-stretch">
          {/* Izquierda: Encabezado y Statement */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <SectionHeader
              chapterNumber="01"
              eyebrow="TRAYECTORIA Y FILOSOFÍA"
              title="De la lectura manual del mercado al diseño de sistemas deterministas"
            />

            {/* Statement corto y grande */}
            <div className="p-7 sm:p-8 bg-[#120E0D] border-l-4 border-[#FF3B47] rounded-sm rim-border space-y-4">
              <p className="text-xl sm:text-2xl lg:text-3xl text-[#F2EDE9] font-medium leading-[1.28] font-[family-name:var(--font-space-grotesk)]">
                &ldquo;La intuición no escala en los mercados ni en el software: construyo sistemas donde cada regla es explícita, medible y resistente ante cualquier anomalía.&rdquo;
              </p>
              <span className="block text-xs font-mono text-[#FF3B47] uppercase tracking-wider">
                — Premisa de trabajo de David
              </span>
            </div>

            {/* Ficha técnica operativa */}
            <div className="p-6 bg-[#0E0B0A] border border-[#241B1A] rounded-sm grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
              <div>
                <span className="text-xs font-mono text-[#68615D] uppercase tracking-wider block mb-1">
                  Ubicación &amp; Zona
                </span>
                <span className="text-[#F2EDE9] font-medium">
                  Cúcuta, Norte de Santander, Colombia (GMT-5)
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-[#68615D] uppercase tracking-wider block mb-1">
                  Metodología Núcleo
                </span>
                <span className="text-[#FF3B47] font-medium font-mono">
                  ICT / SMC + Código Tipado Estricto
                </span>
              </div>
            </div>
          </div>

          {/* Derecha: Placeholder de Retrato Personal 4:5 con estética de estudio */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-full min-h-[440px] aspect-[4/5] rounded-sm overflow-hidden bg-[#14100F] rim-border p-6 sm:p-8 flex flex-col justify-between group/portrait">
              {/* Corner focus brackets (guías de encuadre de estudio) */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#FF3B47]/60" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#FF3B47]/60" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#FF3B47]/60" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#FF3B47]/60" />

              {/* Header inside portrait card */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] font-mono text-[#9C9490] tracking-widest uppercase">
                  ENCUADRE DE ESTUDIO // 4:5
                </span>
                <div className="w-2 h-2 rounded-full bg-[#FF3B47] animate-ping" />
              </div>

              {/* Center graphic schematic representation */}
              <div className="my-auto flex flex-col items-center justify-center text-center space-y-4 py-8 z-10">
                <div className="w-24 h-24 rounded-full bg-[#1F1716] border border-[#C81E3A]/40 flex items-center justify-center text-[#FF3B47] shadow-[0_0_30px_rgba(200,30,58,0.25)]">
                  <Camera size={36} />
                </div>
                <div className="space-y-1.5 max-w-xs">
                  <h4 className="text-base font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                    Retrato Profesional David
                  </h4>
                  <p className="text-xs text-[#9C9490] leading-relaxed">
                    Espacio reservado para fotografía de retrato con iluminación direccional roja en estudio oscuro.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#68615D] border border-[#241D1C] px-2.5 py-1 bg-[#0A0808]">
                  Asset: /images/david-portrait.jpg (Ratio 4:5)
                </span>
              </div>

              {/* Footer inside portrait card */}
              <div className="pt-4 border-t border-[#221817] flex items-center justify-between text-xs font-mono text-[#9C9490] z-10">
                <span>LUZ DIRECCIONAL: ROJO #C81E3A</span>
                <span className="text-[#FF3B47]">ACTIVO</span>
              </div>

              {/* Background ambient corner flare */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C81E3A]/15 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Momento 2: Progresión Técnica (3 Bloques de Evolución en Grid) */}
        <div className="space-y-8 pt-6">
          <div className="border-b border-[#241B1A] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono text-[#FF3B47] uppercase tracking-wider block">
                Trayectoria de Convergencia
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                De la intuición a la ingeniería determinista
              </h3>
            </div>
            <span className="text-xs font-mono text-[#9C9490]">
              3 fases de madurez técnica
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evolutionSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="p-7 sm:p-8 rim-border rounded-sm bg-[#120E0D] flex flex-col justify-between space-y-6 hover:border-[#FF3B47]/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#FF3B47] px-2.5 py-1 bg-[#C81E3A]/15 border border-[#FF3B47]/30">
                        FASE {item.step}
                      </span>
                      <Icon size={20} className="text-[#FF3B47]" />
                    </div>

                    <div>
                      <span className="text-xs font-mono text-[#9C9490] uppercase tracking-wider block">
                        {item.domain}
                      </span>
                      <h4 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] mt-1">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-sm text-[#9C9490] leading-relaxed">
                      {item.summary}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-[#1F1716] text-xs text-[#F2EDE9]">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FF3B47] rounded-none mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#1C1615] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#68615D]">Parámetro clave:</span>
                    <span className="text-[#FF3B47] font-semibold">{item.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Momento 3: Principios Rectores de Ingeniería */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-7 sm:p-8 bg-[#120E0D] border-l-4 border-[#C81E3A] rim-border rounded-sm space-y-2">
            <h4 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
              Sin sobreingeniería
            </h4>
            <p className="text-sm text-[#9C9490] leading-relaxed">
              La arquitectura más limpia, medible y verificable es siempre la más robusta en producción. Si una regla no puede expresarse con precisión matemática o lógica, no pertenece al código.
            </p>
          </div>

          <div className="p-7 sm:p-8 bg-[#120E0D] border-l-4 border-[#FF3B47] rim-border rounded-sm space-y-2">
            <h4 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
              Aceleración con criterio humano
            </h4>
            <p className="text-sm text-[#9C9490] leading-relaxed">
              Integro agentes y modelos de IA para acelerar el scaffolding y la exploración de patrones, pero el diseño de arquitectura, el control de riesgos y la auditoría final son 100% humanos.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
