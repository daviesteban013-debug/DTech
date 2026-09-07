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
      className="relative min-h-[96vh] flex items-center justify-center pt-36 pb-28 px-4 sm:px-6 md:px-8 overflow-hidden bg-[var(--bg-base)] scroll-mt-20 md:scroll-mt-24 transition-colors duration-300"
    >
      {/* Directional light beam with studio lighting effect */}
      <DirectionalLight />

      {/* Film grain noise overlay for dark studio portrait depth */}
      <div
        className="noise-overlay absolute inset-0 pointer-events-none mix-blend-overlay z-[1] transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-start justify-center">
        {/* Natural location statement */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="inline-block w-2.5 h-2.5 bg-[#FF3B47] shadow-[0_0_12px_#FF3B47]" />
          <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)] tracking-wider uppercase">
            Con base en Cúcuta, Norte de Santander, Colombia — desarrollo software y sistemas de trading algorítmico
          </p>
        </motion.div>

        {/* Monumental Headline in Space Grotesk */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--text-primary)] tracking-tight leading-[1.04] max-w-5xl"
        >
          DTech construye sistemas que funcionan:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[#FF3B47] to-[#C81E3A] drop-shadow-[0_0_35px_rgba(200,30,58,0.25)]">
            web, trading algorítmico, software
          </span>
        </motion.h1>

        {/* Narrative sub-copy */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl font-normal leading-relaxed"
        >
          Diseño y programo arquitecturas digitales con rigor cuantitativo: desde aplicaciones web con integración de pagos hasta estrategias de trading automatizadas y simulaciones 2D.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-5"
        >
          <Button href="/proyectos" variant="primary" size="lg" className="text-base px-8 py-4">
            Ver proyectos
          </Button>

          <Button href="/contacto" variant="secondary" size="lg" className="text-base px-8 py-4">
            Iniciar contacto
          </Button>
        </motion.div>

        {/* Technical quick spec indicator */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 pt-10 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-3 gap-8 w-full max-w-3xl text-xs sm:text-sm text-[var(--text-muted)]"
        >
          <div>
            <span className="block text-[var(--text-primary)] font-medium font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base mb-1">
              Full-stack
            </span>
            <span className="text-xs sm:text-sm">Next.js, TypeScript, Stripe</span>
          </div>
          <div>
            <span className="block text-[var(--text-primary)] font-medium font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base mb-1">
              Trading Cuantitativo
            </span>
            <span className="text-xs sm:text-sm">Pine Script v5, MQL5, SMC</span>
          </div>
          <div>
            <span className="block text-[var(--text-primary)] font-medium font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base mb-1">
              Videojuegos
            </span>
            <span className="text-xs sm:text-sm">Unity 6, C#, Simulación</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
