export interface ProjectDossier {
  id: string;
  name: string;
  category: string;
  badge: string;
  shortDescription: string;
  problem: string;
  solution: string;
  architectureNotes: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  stack: string[];
  images: string[];
}

export const projectsData: ProjectDossier[] = [
  {
    id: "ecommerce-audio-binaural",
    name: "E-commerce de audio binaural",
    category: "Desarrollo web / Full-stack",
    badge: "Plataforma de comercio digital",
    shortDescription:
      "Plataforma de e-commerce para venta de archivos de audio binaural. Checkout de pagos integrado con Stripe. Proyecto escalado usando agentes de código IA (Antigravity) para acelerar el scaffolding sin sacrificar arquitectura limpia.",
    problem:
      "La distribución digital de audio binaural de alta fidelidad exigía descargas instantáneas seguras protegidas contra redistribución directa, un proceso de pago con fricción mínima y una experiencia de usuario inmersiva con preview de audio en tiempo real.",
    solution:
      "Implementé una arquitectura serverless en Next.js con endpoints protegidos para tokens de descarga efímeros tras la confirmación de webhooks de Stripe. Utilicé agentes de código IA (Antigravity) para acelerar el andamiaje del catálogo y esquemas de tipos, manteniendo una separación estricta entre capas de dominio y presentación.",
    architectureNotes: [
      "Generación de URLs temporales con expiración programada post-checkout",
      "Procesamiento asíncrono y resiliente de eventos de pago mediante webhooks firmados de Stripe",
      "Reproductor de preview binaural optimizado para evitar latencia de streaming",
      "Scaffolding acelerado con Antigravity asegurando tipado estricto en TypeScript",
    ],
    metrics: [
      { label: "Tiempo de checkout", value: "< 2 clics" },
      { label: "Entrega de archivo", value: "Inmediata vía webhook" },
      { label: "Integridad de tipos", value: "100% TypeScript estricto" },
    ],
    stack: [
      "Next.js App Router",
      "Stripe Checkout & Webhooks",
      "Antigravity (AI coding agent)",
      "TypeScript",
      "Tailwind CSS",
    ],
    images: ["/projects/ecommerce-preview.svg"],
  },
  {
    id: "kz-ob-trading-algoritmico",
    name: "KZ·OB — Estrategia de trading algorítmico",
    category: "Trading algorítmico / Pine Script",
    badge: "Versión 10.7 en producción",
    shortDescription:
      "Estrategia de trading basada en metodología ICT/Smart Money Concepts (SMC), actualmente en versión 10.7. Opera sobre JPN225 en timeframe de 5 minutos vía Pepperstone. Iterada a través de múltiples versiones: filtros CHoCH, scoring de Order Blocks, scoring de confluencia, y un perfil de instrumento para índices asiáticos. Portada a un Expert Advisor completo en MQL5 para ejecución automatizada.",
    problem:
      "La ejecución manual de estrategias complejas en el índice Nikkei (JPN225) sufre de sesgos emocionales durante aperturas de alta volatilidad y retrasos de latencia humana al evaluar confluencias multidimensionales en temporalidades de 5 minutos.",
    solution:
      "Formalicé las reglas no lineales de Smart Money Concepts (SMC) en un modelo algorítmico determinista. Desarrollé algoritmos de scoring dinámico para Order Blocks, validación matemática de Change of Character (CHoCH) y un filtro de liquidez adaptado a las sesiones de Tokio. Posteriormente porté el sistema a MQL5 con gestión de riesgo fija por trade y ejecución desatendida.",
    architectureNotes: [
      "Scoring algorítmico de Order Blocks ponderado por volumen institucional y tiempo de mitigación",
      "Detección matemática de CHoCH sin repintado de velas",
      "Filtro horario para Kill Zones de Tokio y solapamiento asiático",
      "Conversión directa de lógica de Pine Script v5 a arquitectura de clases en MQL5",
    ],
    metrics: [
      { label: "Índice de referencia", value: "JPN225 (Nikkei 225)" },
      { label: "Timeframe de ejecución", value: "5 minutos" },
      { label: "Estado del algoritmo", value: "v10.7 optimizada en MQL5" },
    ],
    stack: [
      "Pine Script v5",
      "MQL5 (Expert Advisor)",
      "TradingView",
      "Pepperstone MT5",
      "ICT / Smart Money Concepts",
    ],
    images: ["/projects/trading-preview.svg"],
  },
  {
    id: "threat-matrix-videojuego",
    name: "Threat Matrix — Videojuego 2D",
    category: "Desarrollo de videojuegos",
    badge: "Semana Talento TIC Los Patios 2026",
    shortDescription:
      "Tower defense 2D de estética cyberpunk, desarrollado en Unity 6 para la competencia Semana Talento TIC Los Patios 2026. Incluye sistemas de oleadas, IA de enemigos y simulación de precios, con arte generado con IA (Google Flow) y una dirección visual de 'glitch corruption'.",
    problem:
      "Construir un prototipo completo de tower defense en Unity con mecánicas estratégicas profundas, rendimiento estable a 60 FPS en hardware moderado y un estilo visual cohesivo en un plazo acotado de competencia.",
    solution:
      "Diseñé una arquitectura modular en C# basada en eventos desacoplados y pooling de objetos para gestionar cientos de proyectiles sin sobrecargar el garbage collector. Diseñé un modelo dinámico de economía de mercado interno donde el costo de las torres fluctúa según la demanda y oleadas, junto con assets de estética 'glitch corruption' asistidos por Google Flow.",
    architectureNotes: [
      "Máquina de estados finitos (FSM) para la toma de decisiones de unidades enemigas",
      "Sistema de Object Pooling de alto rendimiento para proyectiles y efectos visuales",
      "Módulo de economía simulada con curvas dinámicas de oferta y demanda",
      "Canalización de arte procedural e IA generativa integrada en shaders de Unity",
    ],
    metrics: [
      { label: "Motor", value: "Unity 6 (LTS)" },
      { label: "Rendimiento objetivo", value: "60 FPS estables" },
      { label: "Dirección visual", value: "Glitch Corruption Cyberpunk" },
    ],
    stack: [
      "Unity 6",
      "C#",
      "Google Flow (AI art)",
      "Object Pooling Architecture",
      "Custom Post-Processing",
    ],
    images: ["/projects/threat-matrix-preview.svg"],
  },
];
