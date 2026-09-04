export interface TechGroup {
  domain: string;
  focus: string;
  items: {
    name: string;
    level: "Core diario" | "Especializado" | "Herramienta avanzada";
    detail: string;
  }[];
}

export const techStackData: TechGroup[] = [
  {
    domain: "Desarrollo Web y Software Full-stack",
    focus: "Arquitecturas serverless y aplicaciones web escalables con diseño cinematográfico",
    items: [
      {
        name: "Next.js",
        level: "Core diario",
        detail: "App Router, Server Components y optimización de rendimiento",
      },
      {
        name: "TypeScript",
        level: "Core diario",
        detail: "Tipado estricto, contratos de datos y arquitectura predecible",
      },
      {
        name: "React",
        level: "Core diario",
        detail: "Componentes desacoplados, hooks custom y gestión de estado local",
      },
      {
        name: "Tailwind CSS",
        level: "Core diario",
        detail: "Sistemas de diseño a medida, tokens y microinteracciones",
      },
      {
        name: "C#",
        level: "Especializado",
        detail: "Desarrollo de cBots para trading y arquitectura orientada a objetos",
      },
    ],
  },
  {
    domain: "Trading Algorítmico y Finanzas Cuantitativas",
    focus: "Modelado matemático de Smart Money Concepts y ejecución desatendida en mercados",
    items: [
      {
        name: "Pine Script v5",
        level: "Core diario",
        detail: "Estrategias algorítmicas, scoring de Order Blocks y filtros de sesión",
      },
      {
        name: "MQL5",
        level: "Especializado",
        detail: "Expert Advisors completos con gestión de capital para MetaTrader 5",
      },
      {
        name: "TradingView",
        level: "Core diario",
        detail: "Entorno de investigación cuantitativa, alertas y backtesting",
      },
      {
        name: "Pepperstone MT5",
        level: "Especializado",
        detail: "Entorno de ejecución con baja latencia y spreads reducidos",
      },
    ],
  },
  {
    domain: "Motores de Videojuegos y Simulación",
    focus: "Sistemas interactivos 2D, mecánicas complejas y optimización en tiempo real",
    items: [
      {
        name: "Unity 6",
        level: "Especializado",
        detail: "Desarrollo de videojuegos 2D, física personalizada y shaders",
      },
      {
        name: "C# Scripting",
        level: "Core diario",
        detail: "Máquinas de estado finito (FSM) y pools de objetos a 60 FPS",
      },
    ],
  },
  {
    domain: "Infraestructura, Pagos e Inteligencia Artificial",
    focus: "Automatización de flujos de trabajo, monetización y aceleración técnica",
    items: [
      {
        name: "Stripe",
        level: "Especializado",
        detail: "Checkout seguro, suscripciones y manejo de webhooks",
      },
      {
        name: "Antigravity",
        level: "Herramienta avanzada",
        detail: "Agente de código IA para aceleración de scaffolding y refactorización",
      },
      {
        name: "Google Flow",
        level: "Herramienta avanzada",
        detail: "Generación y estilización visual de assets para videojuegos",
      },
      {
        name: "ComfyUI",
        level: "Herramienta avanzada",
        detail: "Pipelines nodales de síntesis visual e imagen procedural",
      },
      {
        name: "Vercel",
        level: "Core diario",
        detail: "Despliegue serverless continuo y observabilidad en producción",
      },
    ],
  },
];
