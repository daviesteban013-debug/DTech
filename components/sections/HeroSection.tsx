"use client";

import React from "react";
import { DirectionalLight } from "@/components/background/DirectionalLight";
import { Button } from "@/components/common/Button";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-[#0A0808]"
    >
      {/* Directional light beam with studio lighting effect */}
      <DirectionalLight />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start justify-center">
        {/* Natural location statement (without bullet/middle dot separators) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="inline-block w-2 h-2 bg-[#FF3B47] shadow-[0_0_8px_#FF3B47]" />
          <p className="text-xs sm:text-sm font-normal text-[#9C9490] tracking-wide">
            Con base en Cucuta, Norte de Santander, Colombia — desarrollo software y sistemas de trading algorítmico
          </p>
        </motion.div>

        {/* Monumental Headline in Space Grotesk */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] tracking-tight leading-[1.08] max-w-4xl"
        >
          David — construyo sistemas que funcionan:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2EDE9] via-[#F2EDE9] to-[#FF3B47]">
            web, trading algorítmico, software
          </span>
        </motion.h1>

        {/* Narrative sub-copy */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-7 text-base sm:text-lg md:text-xl text-[#9C9490] max-w-2xl font-normal leading-relaxed"
        >
          Diseño y programo arquitecturas digitales con rigor cuantitativo: desde aplicaciones web con integración de pagos hasta estrategias de trading automatizadas y simulaciones 2D.
        </motion.p>

        {/* Action buttons (direct phrasing, no arrows) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#proyectos" variant="primary" size="lg">
            Ver proyectos
          </Button>

          <Button href="#contacto" variant="secondary" size="lg">
            Iniciar contacto
          </Button>
        </motion.div>

        {/* Technical quick spec indicator (stacked format without bullets) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-[#1F1918] grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-2xl text-xs text-[#9C9490]"
        >
          <div>
            <span className="block text-[#F2EDE9] font-medium font-[family-name:var(--font-space-grotesk)] text-sm mb-0.5">
              Full-stack
            </span>
            <span>Next.js, TypeScript, Stripe</span>
          </div>
          <div>
            <span className="block text-[#F2EDE9] font-medium font-[family-name:var(--font-space-grotesk)] text-sm mb-0.5">
              Trading Cuantitativo
            </span>
            <span>Pine Script v5, MQL5, SMC</span>
          </div>
          <div>
            <span className="block text-[#F2EDE9] font-medium font-[family-name:var(--font-space-grotesk)] text-sm mb-0.5">
              Videojuegos
            </span>
            <span>Unity 6, C#, Simulación</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
