"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  chapterNumber: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  chapterNumber,
  eyebrow,
  title,
  description,
  className,
}: SectionHeaderProps) {
  // Normalize chapterNumber: if it comes with "//" or "01 //", extract clean digits
  const cleanNumber = chapterNumber.replace(/[^0-9]/g, "").padStart(2, "0");

  return (
    <div className={cn("max-w-4xl space-y-4", className)}>
      {/* Chapter announcement bar */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Chapter tag in red accent badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C81E3A]/20 border border-[#FF3B47]/40 text-[#FF3B47] text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(200,30,58,0.2)]">
          <span className="w-1.5 h-1.5 bg-[#FF3B47] rounded-none animate-pulse" />
          <span>CAPÍTULO {cleanNumber} //</span>
        </div>

        <span className="hidden sm:inline-block w-8 h-[1px] bg-[#C81E3A]/40" />

        {/* Eyebrow descriptor in tracking-wide small caps */}
        <span className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-widest">
          {eyebrow}
        </span>
      </div>

      {/* Monumental Chapter Title in Space Grotesk */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] text-[var(--text-primary)] tracking-tight leading-[1.12]">
        {title}
      </h2>

      {/* Clear, authoritative subtitle descriptor */}
      {description && (
        <p className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] leading-relaxed font-normal pt-1 max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
}
