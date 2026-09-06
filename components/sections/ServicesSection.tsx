"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { Globe, TrendingUp, Gamepad2, ShieldCheck, Zap, Terminal } from "lucide-react";

export function ServicesSection() {
  const disciplines = [
    {
      id: "web",
      number: "01 // ARQUITECTURA WEB",
      icon: Globe,
      title: "Desarrollo Web & Plataformas",
      tagline: "Sistemas serverless con pagos y validación criptográfica.",
      description:
        "Arquitecturas web modernas donde la interfaz fluida y la lógica transaccional operan con precisión determinista y rendimiento extremo.",
      highlights: [
        {
          title: "Next.js App Router",
          detail: "Renderizado híbrido, SSR optimizado y entrega en Edge.",
        },
        {
          title: "Stripe & Webhooks",
          detail: "Transacciones seguras con verificación HMAC y tokens efímeros.",
        },
        {
          title: "TypeScript Estricto",
          detail: "Modelado de dominio blindado con Zod y cero tipos implícitos.",
        },
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "Supabase"],
      metric: { label: "ESTÁNDAR", value: "< 50ms TTFB EDGE" },
    },
    {
      id: "trading",
      number: "02 // MODELADO CUANTITATIVO",
      icon: TrendingUp,
      title: "Trading Algorítmico",
      tagline: "Estrategias desatendidas basadas en Smart Money Concepts.",
      description:
        "Automatización de liquidez institucional, detección matemática de Order Blocks y ejecución directa sin sesgo emocional.",
      highlights: [
        {
          title: "Pine Script v5",
          detail: "Algoritmos no-repaint con validación estricta de CHoCH y scoring.",
        },
        {
          title: "MQL5 en C++",
          detail: "Expert Advisors con gestión fija de riesgo para Pepperstone.",
        },
        {
          title: "Kill Zones Asiáticas",
          detail: "Filtros de liquidez horaria institucional en índice JPN225.",
        },
      ],
      tags: ["Pine Script v5", "MQL5", "MetaTrader 5", "ICT/SMC", "FIX API"],
      metric: { label: "BROKER", value: "PEPPERSTONE MT5" },
    },
    {
      id: "games",
      number: "03 // SISTEMAS INTERACTIVOS",
      icon: Gamepad2,
      title: "Videojuegos & Simulación 2D",
      tagline: "Motores de simulación con economías dinámicas y pooling.",
      description:
        "Desarrollo en Unity 6 y C# enfocado en combate de alta densidad, cero pausas de memoria y dirección visual asistida por IA.",
      highlights: [
        {
          title: "Zero-GC Object Pooling",
          detail: "Cientos de proyectiles concurrentes sin micro-tirones de frame.",
        },
        {
          title: "FSM & AI Táctica",
          detail: "Máquinas de estado finito con comportamientos adaptativos.",
        },
        {
          title: "Economía Dinámica",
          detail: "Curvas de oferta/demanda que modulan costos en partida.",
        },
      ],
      tags: ["Unity 6", "C#", "FSM AI", "Object Pooling", "Google Flow"],
      metric: { label: "PERFORMANCE", value: "60 FPS ESTABLES" },
    },
  ];

  return (
    <SectionContainer id="que-hago" variant="base" glowPosition="top-left">
      <div className="space-y-20 sm:space-y-24">
        {/* Encabezado de Capítulo con margen amplio */}
        <SectionHeader
          chapterNumber="02"
          eyebrow="DISCIPLINAS Y SERVICIOS"
          title="Qué construyo"
          description="Tres especialidades técnicas unidas por el rigor del código determinista, la velocidad de ejecución y la tolerancia a fallos."
        />

        {/* Grid de Features Estilo Supabase: 3 Columnas Monumentales y Aireadas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {disciplines.map((disc) => {
            const IconComponent = disc.icon;
            return (
              <div
                key={disc.id}
                className="rim-border rounded-sm bg-[#120E0D] hover:bg-[#161110] hover:border-[#FF3B47]/45 transition-all duration-300 p-8 sm:p-10 lg:p-12 flex flex-col justify-between group relative overflow-hidden space-y-8"
              >
                {/* Cabecera y Contenido Principal */}
                <div className="space-y-6">
                  {/* Número y Categoría */}
                  <span className="text-xs font-mono text-[#9C9490] tracking-widest block uppercase">
                    {disc.number}
                  </span>

                  {/* Ícono Geométrico con Glow */}
                  <div className="w-14 h-14 rounded-sm bg-[#1A1413] border border-[#C81E3A]/40 flex items-center justify-center text-[#FF3B47] shadow-[0_0_20px_rgba(200,30,58,0.2)] group-hover:border-[#FF3B47]/70 group-hover:scale-105 transition-all duration-300">
                    <IconComponent size={28} />
                  </div>

                  {/* Título Display */}
                  <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] leading-tight">
                    {disc.title}
                  </h3>

                  {/* Tagline en acento carmesí */}
                  <p className="text-sm font-medium text-[#FF3B47]">
                    {disc.tagline}
                  </p>

                  {/* Descripción breve (1-2 líneas) */}
                  <p className="text-sm text-[#9C9490] leading-relaxed">
                    {disc.description}
                  </p>

                  {/* Pilares / Specs Técnicas con aire */}
                  <div className="space-y-4 pt-6 border-t border-[#221817]">
                    {disc.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#FF3B47] mt-1.5 shrink-0" />
                        <div className="space-y-0.5">
                          <span className="text-xs font-mono font-bold text-[#F2EDE9] block uppercase tracking-wider">
                            {h.title}
                          </span>
                          <p className="text-xs text-[#9C9490] leading-normal">
                            {h.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer de Tarjeta con Tags y Métrica */}
                <div className="pt-6 border-t border-[#221817] space-y-5 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {disc.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="text-xs px-2.5 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono pt-1 text-[#68615D]">
                    <span>{disc.metric.label}</span>
                    <span className="text-[#00E676] font-semibold">{disc.metric.value}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

