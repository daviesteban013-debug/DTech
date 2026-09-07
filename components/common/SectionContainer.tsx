"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  variant?: "base" | "surface";
  glowPosition?: "top-left" | "top-right" | "bottom-right" | "none";
  withDivider?: boolean;
}

export function SectionContainer({
  id,
  children,
  className,
  variant = "base",
  glowPosition = "top-left",
  withDivider = true,
}: SectionContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const glowStyles = {
    "top-left": "-top-48 -left-48",
    "top-right": "-top-48 -right-48",
    "bottom-right": "-bottom-48 -right-48",
    none: "hidden",
  };

  // Fondos basados en tokens CSS dinámicos
  const bgStyles = {
    base: "bg-[var(--bg-base)]",
    surface: "bg-gradient-to-b from-[var(--bg-surface-elevated)] via-[var(--bg-surface)] to-[var(--bg-surface-card)]",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden scroll-mt-20 md:scroll-mt-24 py-32 sm:py-36 lg:py-40 border-t border-[var(--border-elevated)] transition-colors duration-300",
        bgStyles[variant],
        className
      )}
    >
      {/* Structural independent chapter rim light on top edge with multi-layer glow */}
      {withDivider && (
        <>
          {/* Layer 1: Crisp glowing rim light divider with box-shadow */}
          <div aria-hidden="true" className="rim-light-divider z-20 pointer-events-none" />

          {/* Layer 2: Soft diffused blur flare right on the edge */}
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF3B47] to-transparent blur-[3px] opacity-75 pointer-events-none z-20"
          />

          {/* Layer 3: Downward ambient light cascade from the rim */}
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-[#C81E3A]/15 to-transparent pointer-events-none z-10"
          />
        </>
      )}

      {/* Directional red ambient illumination from edge/corner adaptada al tema */}
      {glowPosition !== "none" && (
        <div
          aria-hidden="true"
          className={cn(
            "directional-corner-glow absolute z-0 pointer-events-none",
            glowStyles[glowPosition]
          )}
        />
      )}

      {/* Centered inner constrained content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

