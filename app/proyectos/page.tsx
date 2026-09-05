import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Proyectos y Expedientes Técnicos | David - DTech",
  description:
    "Expedientes técnicos de proyectos reales: e-commerce de audio binaural con Stripe, estrategia de trading algorítmico KZ·OB v10.7 en MQL5 y videojuego Threat Matrix en Unity 6.",
};

export default function ProyectosPage() {
  return <ProjectsSection />;
}
