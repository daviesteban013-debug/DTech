import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#0A0808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "David | Sistemas Web, Trading Algorítmico y Software",
  description:
    "Portafolio de David, desarrollador full-stack y trader algorítmico en Bogotá, Colombia. Construyo sistemas deterministas: aplicaciones web de alto rendimiento, estrategias algorítmicas y videojuegos.",
  keywords: [
    "David",
    "DTech",
    "Desarrollo Full-stack",
    "Trading Algorítmico",
    "Pine Script",
    "MQL5",
    "Next.js",
    "Unity 6",
    "Bogotá",
    "Colombia",
  ],
  authors: [{ name: "David" }],
  creator: "David",
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "David | Sistemas Web, Trading Algorítmico y Software",
    description:
      "Desarrollador full-stack y trader algorítmico en Bogotá, Colombia. Construyo sistemas que funcionan.",
    siteName: "DTech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} bg-[#0A0808] text-[#F2EDE9] antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#0A0808] text-[#F2EDE9] selection:bg-[#C81E3A] selection:text-[#F2EDE9]">
        {children}
      </body>
    </html>
  );
}
