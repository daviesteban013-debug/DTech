import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Sobre mí | David - DTech",
  description:
    "De la lectura manual del mercado al diseño de sistemas deterministas. Conoce la trayectoria y filosofía de ingeniería de David.",
};

export default function SobreMiPage() {
  return <AboutSection />;
}
