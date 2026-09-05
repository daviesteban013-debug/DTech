export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Qué hago", href: "/que-hago" },
  { label: "Cómo lo hago", href: "/como-lo-hago" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Stack", href: "/stack" },
  { label: "Contacto", href: "/contacto" },
];
