"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Placeholder with identical dimensions to prevent layout shift
    return (
      <div
        className={`w-16 h-8 rounded-full bg-[#161110] border border-[#241C1B] opacity-50 ${className || ""}`}
        aria-hidden="true"
      />
    );
  }

  const currentTheme = resolvedTheme || theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      onClick={toggleTheme}
      className={`relative inline-flex items-center w-16 h-8 p-1 rounded-full cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3B47] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] select-none group ${
        isDark
          ? "bg-[#140F0E] border border-[#C81E3A]/40 shadow-[0_0_15px_rgba(200,30,58,0.22)] hover:border-[#FF3B47]/60"
          : "bg-[#EAE4DF] border border-[#C81E3A]/30 shadow-inner hover:border-[#C81E3A]/60"
      } ${className || ""}`}
    >
      {/* Track background icons / cues */}
      <div className="absolute inset-0 px-2 flex items-center justify-between pointer-events-none text-xs">
        <Sun
          size={13}
          className={`transition-opacity duration-200 ${
            isDark ? "opacity-30 text-[#9C9490]" : "opacity-0 text-[#C81E3A]"
          }`}
        />
        <Moon
          size={12}
          className={`transition-opacity duration-200 ${
            isDark ? "opacity-0 text-[#FF3B47]" : "opacity-30 text-[#68615D]"
          }`}
        />
      </div>

      {/* Sliding animated thumb */}
      <motion.div
        className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center transition-shadow duration-300 ${
          isDark
            ? "bg-[#221715] border border-[#FF3B47]/70 text-[#FF3B47] shadow-[0_0_10px_rgba(255,59,71,0.55)]"
            : "bg-[#FFFFFF] border border-[#C81E3A]/30 text-[#C81E3A] shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        }`}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0.2, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.2, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <Moon size={13} strokeWidth={2.4} />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0.2, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.2, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <Sun size={13} strokeWidth={2.4} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Sutil halo de luz interactivo en el interruptor */}
      <span
        className={`absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300 ${
          isDark
            ? "opacity-15 bg-gradient-to-r from-transparent via-[#FF3B47] to-transparent"
            : "opacity-0"
        }`}
      />
    </button>
  );
}
