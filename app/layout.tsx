import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

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

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0808" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "David | Sistemas Web, Trading Algorítmico y Software",
  description:
    "Portafolio de David, desarrollador full-stack y trader algorítmico en Cúcuta, Colombia. Construyo sistemas deterministas: aplicaciones web de alto rendimiento, estrategias algorítmicas y videojuegos.",
  keywords: [
    "David",
    "DTech",
    "Desarrollo Full-stack",
    "Trading Algorítmico",
    "Pine Script",
    "MQL5",
    "Next.js",
    "Unity 6",
    "Cúcuta",
    "Colombia",
  ],
  authors: [{ name: "David" }],
  creator: "David",
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "David | Sistemas Web, Trading Algorítmico y Software",
    description:
      "Desarrollador full-stack y trader algorítmico en Cúcuta, Colombia. Construyo sistemas que funcionan.",
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
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)] antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navbar />
          <main className="flex-1 flex flex-col w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

