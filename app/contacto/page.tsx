import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contacto Directo | David - DTech",
  description:
    "Inicia una conversación directa para proyectos de desarrollo web, trading algorítmico o consultoría técnica de software.",
};

export default function ContactoPage() {
  return <ContactSection />;
}
