"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  glowPosition?: "top-left" | "top-right" | "bottom-right" | "none";
}

export function SectionContainer({
  id,
  children,
  className,
  glowPosition = "top-left",
}: SectionContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const glowStyles = {
    "top-left": "-top-48 -left-48",
    "top-right": "-top-48 -right-48",
    "bottom-right": "-bottom-48 -right-48",
    none: "hidden",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative w-full py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden",
        className
      )}
    >
      {/* Subtle directional red ambient illumination from edge/corner */}
      {glowPosition !== "none" && (
        <div
          aria-hidden="true"
          className={cn(
            "directional-corner-glow absolute z-0 pointer-events-none opacity-40",
            glowStyles[glowPosition]
          )}
        />
      )}

      {/* Sober scroll reveal content container */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
