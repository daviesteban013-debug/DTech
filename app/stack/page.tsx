import type { Metadata } from "next";
import { TechStackSection } from "@/components/sections/TechStackSection";

export const metadata: Metadata = {
  title: "Stack y Ecosistema Técnico | David - DTech",
  description:
    "Ecosistema tecnológico de David: Next.js, TypeScript, Pine Script v5, MQL5, Unity 6, C#, Stripe y herramientas de ingeniería avanzada.",
};

export default function StackPage() {
  return <TechStackSection />;
}
