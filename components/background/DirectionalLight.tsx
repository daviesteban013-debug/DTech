"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

export function DirectionalLight() {
  const shouldReduceMotion = useReducedMotion();
  const [isDesktopWithMouse, setIsDesktopWithMouse] = useState<boolean>(false);

  // Springs for mouse parallax on desktop only
  const mouseX = useSpring(0, { stiffness: 60, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 60, damping: 25 });
  const lightAngle = useSpring(28, { stiffness: 45, damping: 20 });

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
        // Normalized coordinates (-0.5 to 0.5)
        const normX = (e.clientX / innerWidth - 0.5) * 2;
        const normY = (e.clientY / innerHeight - 0.5) * 2;

        // Subtle displacement values in pixels and angle variation
        mouseX.set(normX * 45);
        mouseY.set(normY * 35);
        lightAngle.set(28 + normX * 8);
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
  }, [mouseX, mouseY, lightAngle, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden z-0"
      >
        <div
          className="absolute -top-[15%] -left-[10%] w-[120%] h-[130%] opacity-65"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 20% 30%, rgba(200, 30, 58, 0.28) 0%, rgba(255, 59, 71, 0.08) 35%, rgba(10, 8, 8, 0) 70%)",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-screen"
          style={{
            background:
              "linear-gradient(118deg, rgba(255, 59, 71, 0.22) 0%, rgba(200, 30, 58, 0.08) 40%, rgba(10, 8, 8, 0) 75%)",
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none"
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
          {/* Primary directional ray emanating from top-left studio corner */}
          <div
            className="absolute -top-[25%] -left-[15%] w-[135%] h-[140%] opacity-75"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 18% 28%, rgba(200, 30, 58, 0.32) 0%, rgba(255, 59, 71, 0.12) 35%, rgba(10, 8, 8, 0) 70%)",
            }}
          />

          {/* Sharper directional linear light beam cutting through shadow */}
          <div
            className="absolute top-[-10%] left-[-20%] w-[140%] h-[120%] opacity-45 mix-blend-screen"
            style={{
              background:
                "linear-gradient(124deg, rgba(255, 59, 71, 0.35) 0%, rgba(200, 30, 58, 0.15) 32%, rgba(10, 8, 8, 0) 65%)",
            }}
          />

          {/* Fine directional edge rim line */}
          <div
            className="absolute top-[8%] left-[5%] w-[90%] h-[1px] opacity-25"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 59, 71, 0.6) 0%, rgba(200, 30, 58, 0.1) 40%, transparent 80%)",
            }}
          />
        </motion.div>
      ) : (
        // Mobile: Fixed single ignition entrance animation on hero load, then remains static
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute -top-[15%] -left-[20%] w-[140%] h-[130%] opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 20% 30%, rgba(200, 30, 58, 0.3) 0%, rgba(255, 59, 71, 0.1) 40%, rgba(10, 8, 8, 0) 75%)",
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-screen"
            style={{
              background:
                "linear-gradient(120deg, rgba(255, 59, 71, 0.28) 0%, rgba(200, 30, 58, 0.1) 45%, rgba(10, 8, 8, 0) 75%)",
            }}
          />
        </motion.div>
      )}

      {/* Deep shadow falloff on bottom and right to guarantee portrait studio contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(10, 8, 8, 0.9) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
