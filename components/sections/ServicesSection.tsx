"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { Globe, TrendingUp, Gamepad2, CheckCircle, ShieldCheck, Zap } from "lucide-react";

export function ServicesSection() {
  return (
    <SectionContainer id="que-hago" variant="base" glowPosition="top-left">
      <div className="space-y-16">
        {/* Encabezado de Capítulo */}
        <SectionHeader
          chapterNumber="02"
          eyebrow="DISCIPLINAS Y SERVICIOS"
          title="Qué construyo"
          description="Tres especialidades técnicas complementarias unidas por el rigor del código determinista, la velocidad de ejecución y la tolerancia a fallos."
        />

        {/* Layout Asimétrico: Servicio 1 Ancho Completo + Servicios 2 y 3 en 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Servicio 1: Desarrollo Web y Plataformas a Medida (Wide 12 Cols) */}
          <div className="lg:col-span-12 p-8 sm:p-10 lg:p-12 rim-border rounded-sm bg-gradient-to-br from-[#1C1715] via-[#14100F] to-[#0A0808] flex flex-col justify-between space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Columna Izquierda: Identidad y Concepto */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-sm bg-[#221817] border border-[#C81E3A]/40 flex items-center justify-center text-[#FF3B47] shadow-[0_0_20px_rgba(200,30,58,0.25)]">
                    <Globe size={28} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#9C9490] uppercase tracking-wider block">
                      Disciplina 01
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                      Desarrollo Web &amp; Plataformas
                    </h3>
                  </div>
                </div>

                <p className="text-base font-medium text-[#FF3B47]">
                  Arquitecturas digitales de alto rendimiento con integración de pagos y flujo seguro.
                </p>

                <p className="text-sm text-[#9C9490] leading-relaxed">
                  Diseño sistemas web donde la experiencia de usuario y la lógica de negocio operan con total sincronía: tiendas digitales, webhooks asíncronos y backends protegidos.
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#00E676]">
                  <ShieldCheck size={16} />
                  <span>ESTÁNDAR: RESILIENCIA SERVERLESS</span>
                </div>
              </div>

              {/* Columna Derecha: Matriz de 4 Capacidades en Micro-bloques */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0E0B0A] border border-[#221817] rounded-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF3B47] font-semibold">
                    <CheckCircle size={14} />
                    <span>Next.js App Router</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F2EDE9]">Arquitectura Serverless</h4>
                  <p className="text-xs text-[#9C9490]">
                    Páginas híbridas estáticas y dinámicas optimizadas para Core Web Vitals.
                  </p>
                </div>

                <div className="p-4 bg-[#0E0B0A] border border-[#221817] rounded-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF3B47] font-semibold">
                    <CheckCircle size={14} />
                    <span>Pasarelas &amp; Webhooks</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F2EDE9]">Stripe Integrado</h4>
                  <p className="text-xs text-[#9C9490]">
                    Checkouts seguros con tokens efímeros para descargas protegidas post-pago.
                  </p>
                </div>

                <div className="p-4 bg-[#0E0B0A] border border-[#221817] rounded-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF3B47] font-semibold">
                    <CheckCircle size={14} />
                    <span>TypeScript Estricto</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F2EDE9]">Integridad de Dominio</h4>
                  <p className="text-xs text-[#9C9490]">
                    Cero variables implícitas; esquemas de validación unificados con Zod.
                  </p>
                </div>

                <div className="p-4 bg-[#0E0B0A] border border-[#221817] rounded-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF3B47] font-semibold">
                    <CheckCircle size={14} />
                    <span>Scaffolding Acelerado</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F2EDE9]">Agentes de Código IA</h4>
                  <p className="text-xs text-[#9C9490]">
                    Aceleración de desarrollo con Antigravity sin comprometer patrones limpios.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer de la tarjeta con tecnologías */}
            <div className="pt-6 border-t border-[#221817] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe API", "Supabase"].map((tech) => (
                  <Badge key={tech} variant="default" className="text-xs px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
              <span className="text-xs font-mono text-[#68615D]">
                Disponibilidad: Proyectos y plataformas a medida
              </span>
            </div>
          </div>

          {/* Servicio 2: Trading Algorítmico Cuantitativo (6 Cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rim-border rounded-sm bg-[#120E0D] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-sm bg-[#221817] border border-[#C81E3A]/40 flex items-center justify-center text-[#FF3B47] shadow-[0_0_20px_rgba(200,30,58,0.25)]">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9C9490] uppercase tracking-wider block">
                    Disciplina 02
                  </span>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                    Trading Algorítmico
                  </h3>
                </div>
              </div>

              <p className="text-base font-medium text-[#FF3B47]">
                Modelos cuantitativos basados en Smart Money Concepts para ejecución desatendida.
              </p>

              {/* Matriz de 3 puntos en micro-bloques */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-[#0E0B0A] border border-[#1F1716] rounded-sm space-y-1">
                  <span className="text-xs font-mono text-[#FF3B47] font-semibold block">
                    01. PINE SCRIPT v5 (TRADINGVIEW)
                  </span>
                  <p className="text-xs text-[#9C9490]">
                    Detección no-repaint de cambios de carácter (CHoCH) y scoring ponderado de Order Blocks.
                  </p>
                </div>

                <div className="p-3.5 bg-[#0E0B0A] border border-[#1F1716] rounded-sm space-y-1">
                  <span className="text-xs font-mono text-[#FF3B47] font-semibold block">
                    02. MQL5 EXPERT ADVISORS (MT5)
                  </span>
                  <p className="text-xs text-[#9C9490]">
                    Port de algoritmos a clases C++ en MQL5 con gestión fija de riesgo por trade para Pepperstone.
                  </p>
                </div>

                <div className="p-3.5 bg-[#0E0B0A] border border-[#1F1716] rounded-sm space-y-1">
                  <span className="text-xs font-mono text-[#FF3B47] font-semibold block">
                    03. FILTROS DE KILL ZONES
                  </span>
                  <p className="text-xs text-[#9C9490]">
                    Alineación horaria de liquidez institucional en índices asiáticos (JPN225 / Nikkei).
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1C1615] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["Pine Script v5", "MQL5", "MetaTrader 5", "Smart Money Concepts"].map((tag) => (
                  <Badge key={tag} variant="default" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="text-xs font-mono text-[#00E676] flex items-center gap-1">
                <Zap size={13} />
                <span>EJECUCIÓN FIX API</span>
              </span>
            </div>
          </div>

          {/* Servicio 3: Videojuegos & Simulación 2D (6 Cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rim-border rounded-sm bg-[#120E0D] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-sm bg-[#221817] border border-[#C81E3A]/40 flex items-center justify-center text-[#FF3B47] shadow-[0_0_20px_rgba(200,30,58,0.25)]">
                  <Gamepad2 size={28} />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#9C9490] uppercase tracking-wider block">
                    Disciplina 03
                  </span>
                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                    Videojuegos &amp; Simulación 2D
                  </h3>
                </div>
              </div>

              <p className="text-base font-medium text-[#FF3B47]">
                Desarrollo en Unity 6 y C# con pooling de alto rendimiento y modelos económicos dinámicos.
              </p>

              {/* Matriz de 3 puntos en micro-bloques */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-[#0E0B0A] border border-[#1F1716] rounded-sm space-y-1">
                  <span className="text-xs font-mono text-[#FF3B47] font-semibold block">
                    01. OBJECT POOLING ARCHITECTURE
                  </span>
                  <p className="text-xs text-[#9C9490]">
                    Gestión de cientos de proyectiles y partículas simultáneas con cero pausas de Garbage Collection.
                  </p>
                </div>

                <div className="p-3.5 bg-[#0E0B0A] border border-[#1F1716] rounded-sm space-y-1">
                  <span className="text-xs font-mono text-[#FF3B47] font-semibold block">
                    02. MÁQUINAS DE ESTADO FINITO (FSM)
                  </span>
                  <p className="text-xs text-[#9C9490]">
                    IA de unidades enemigas con sub-estados de flanqueo, toma de decisiones y respuesta adaptativa.
                  </p>
                </div>

                <div className="p-3.5 bg-[#0E0B0A] border border-[#1F1716] rounded-sm space-y-1">
                  <span className="text-xs font-mono text-[#FF3B47] font-semibold block">
                    03. SIMULACIÓN ECONÓMICA &amp; GLITCH ART
                  </span>
                  <p className="text-xs text-[#9C9490]">
                    Curvas de oferta/demanda que ajustan costos en partida, acompañadas de dirección visual asistida por IA.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#1C1615] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["Unity 6", "C#", "FSM AI", "Object Pooling", "Google Flow"].map((tag) => (
                  <Badge key={tag} variant="default" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <span className="text-xs font-mono text-[#00E676] flex items-center gap-1">
                <Zap size={13} />
                <span>60 FPS ESTABLES</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
