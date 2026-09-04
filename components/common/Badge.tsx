import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "muted" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[#1A1614] text-[#F2EDE9] border border-[#C81E3A]/25 shadow-[0_0_10px_rgba(200,30,58,0.08)]",
    accent:
      "bg-[#C81E3A]/15 text-[#FF3B47] border border-[#FF3B47]/35 shadow-[0_0_12px_rgba(255,59,71,0.15)]",
    muted:
      "bg-[#14100F] text-[#9C9490] border border-[#2A2220]",
    outline:
      "bg-transparent text-[#9C9490] border border-[#C81E3A]/20 hover:border-[#C81E3A]/40",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-sm tracking-normal select-none transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
