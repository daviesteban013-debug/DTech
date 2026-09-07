"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

export function DirectionalLight() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktopWithMouse, setIsDesktopWithMouse] = useState<boolean>(false);

  // Springs for mouse parallax on desktop only (damped, responsive)
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Detect if device supports hover and fine pointer (desktop mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktopWithMouse(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktopWithMouse(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    if (mediaQuery.matches && !shouldReduceMotion) {
      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        // Normalized coordinates (-1 to 1)
        const normX = (e.clientX / innerWidth - 0.5) * 2;
        const normY = (e.clientY / innerHeight - 0.5) * 2;

        // Parallax displacement targeting the light source from top-right
        mouseX.set(normX * 45);
        mouseY.set(normY * 35);
      };

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none"
      >
        {/* Static vibrant studio light beam from top-right */}
        <div
          className="absolute -top-[15%] -right-[15%] w-[110%] h-[120%] opacity-85"
          style={{
            background:
              "radial-gradient(ellipse 75% 60% at 85% 15%, rgba(255, 59, 71, 0.45) 0%, rgba(200, 30, 58, 0.28) 30%, rgba(200, 30, 58, 0.08) 60%, transparent 80%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-full h-full opacity-60 mix-blend-screen"
          style={{
            background:
              "linear-gradient(225deg, rgba(255, 59, 71, 0.38) 0%, rgba(200, 30, 58, 0.18) 35%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{ opacity: "var(--directional-light-opacity)" }}
      className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none transition-opacity duration-300"
    >
      {isDesktopWithMouse ? (
        // Desktop: Damped parallax reacting strictly to mouse position, static to scroll
        <motion.div
          style={{
            x: mouseX,
            y: mouseY,
          }}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          {/* Intense focal rim highlight in top-right studio corner */}
          <div
            className="absolute -top-[10%] -right-[10%] w-[650px] h-[650px] rounded-full opacity-90 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255, 59, 71, 0.6) 0%, rgba(200, 30, 58, 0.35) 40%, transparent 75%)",
            }}
          />

          {/* Primary diagonal conical/radial beam sweeping from top-right towards bottom-left */}
          <div
            className="absolute -top-[20%] -right-[20%] w-[130%] h-[135%] opacity-90"
            style={{
              background:
                "radial-gradient(ellipse 80% 65% at 82% 16%, rgba(255, 59, 71, 0.48) 0%, rgba(200, 30, 58, 0.32) 28%, rgba(200, 30, 58, 0.1) 55%, transparent 78%)",
            }}
          />

          {/* Sharp diagonal light beam cutting through shadow */}
          <div
            className="absolute -top-[15%] -right-[10%] w-[125%] h-[125%] opacity-65 mix-blend-screen"
            style={{
              background:
                "linear-gradient(228deg, rgba(255, 59, 71, 0.45) 0%, rgba(200, 30, 58, 0.22) 32%, rgba(200, 30, 58, 0.05) 58%, transparent 75%)",
            }}
          />

          {/* Fine laser rim highlight line along the upper diagonal */}
          <div
            className="absolute top-[5%] right-[5%] w-[75%] h-[1px] opacity-40"
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 59, 71, 0.8) 0%, rgba(200, 30, 58, 0.3) 45%, transparent 85%)",
            }}
          />
        </motion.div>
      ) : (
        // Mobile: Fixed single ignition entrance animation on hero load, then remains static
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute -top-[10%] -right-[15%] w-[120%] h-[120%] opacity-85"
            style={{
              background:
                "radial-gradient(ellipse 75% 60% at 85% 15%, rgba(255, 59, 71, 0.45) 0%, rgba(200, 30, 58, 0.28) 32%, rgba(200, 30, 58, 0.08) 60%, transparent 80%)",
            }}
          />
          <div
            className="absolute top-0 right-0 w-full h-full opacity-60 mix-blend-screen"
            style={{
              background:
                "linear-gradient(225deg, rgba(255, 59, 71, 0.4) 0%, rgba(200, 30, 58, 0.2) 35%, transparent 72%)",
            }}
          />
        </motion.div>
      )}

      {/* Deep falloff vignette on bottom and left to protect headline contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 25% 65%, rgba(10, 8, 8, 0.95) 0%, rgba(10, 8, 8, 0.5) 45%, transparent 80%)",
        }}
      />
    </div>
  );
}
