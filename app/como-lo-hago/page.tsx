import type { Metadata } from "next";
import { ProcessSection } from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "Cómo lo hago | David - DTech",
  description:
    "Metodología de ingeniería inspirada en Smart Money Concepts: análisis riguroso, arquitectura limpia, iteración acelerada y validación matemática.",
};

export default function ComoLoHagoPage() {
  return <ProcessSection />;
}
