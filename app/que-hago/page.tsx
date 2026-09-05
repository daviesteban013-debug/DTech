import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Qué hago | David - DTech",
  description:
    "Desarrollo web y plataformas digitales, trading algorítmico (Pine Script y MQL5) y videojuegos 2D en Unity 6.",
};

export default function QueHagoPage() {
  return <ServicesSection />;
}
