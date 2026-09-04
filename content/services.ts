export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  description: string;
  deliverables: string[];
  techTags: string[];
  iconKey: "web" | "trading" | "gaming";
}

export const servicesData: ServiceItem[] = [
  {
    id: "desarrollo-web-sistemas",
    title: "Desarrollo web y sistemas a medida",
    summary:
      "Construcción de aplicaciones web de alto rendimiento, plataformas e-commerce y arquitecturas a medida con interfaces cinematográficas y escalables.",
    description:
      "Desde páginas de aterrizaje diseñadas para convertir hasta sistemas complejos con autenticación, pasarelas de pago (Stripe) y lógica de negocio distribuida. Trabajo con Next.js, React y TypeScript, priorizando la velocidad de carga, la claridad del código y la resiliencia en producción.",
    deliverables: [
      "Aplicaciones web completas con App Router y Server Actions",
      "Integración de pasarelas de pago seguras y gestión de webhooks",
      "Diseño de interfaces oscuras, accesibles y con identidad visual propia",
      "APIs serverless optimizadas y arquitectura desacoplada",
    ],
    techTags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Stripe", "Vercel"],
    iconKey: "web",
  },
  {
    id: "trading-algoritmico",
    title: "Sistemas de trading algorítmico",
    summary:
      "Automatización de estrategias cuantitativas basadas en Smart Money Concepts (SMC), indicadores en Pine Script y robots de ejecución en MQL5 y C#.",
    description:
      "Traduzco criterios de mercado discrecionales en reglas matemáticas ejecutables sin sesgo emocional. Desarrollo algoritmos para la detección precisa de cambios de estructura (CHoCH), mitigación de Order Blocks y gestión estricta de capital, listos para correr 24/5 de forma desatendida.",
    deliverables: [
      "Estrategias e indicadores avanzados en Pine Script v5 para TradingView",
      "Expert Advisors robustos en MQL5 para MetaTrader 5 con gestión de riesgo fija",
      "cBots personalizados en C# con APIs de ejecución directa",
      "Backtesting sistemático, métricas de drawdown y optimización sin sobreajuste",
    ],
    techTags: ["Pine Script v5", "MQL5", "MetaTrader 5", "TradingView", "C#", "SMC / ICT"],
    iconKey: "trading",
  },
  {
    id: "software-videojuegos",
    title: "Desarrollo de software y videojuegos",
    summary:
      "Creación de experiencias interactivas 2D, motores de simulación y herramientas lógicas utilizando Unity 6 y C#.",
    description:
      "Desarrollo arquitecturas modulares para mecánicas de juego en tiempo real: máquinas de estado para IA enemiga, sistemas de oleadas reactivas, economías internas dinámicas y canalización de assets procedurales asistidos por modelos de inteligencia artificial.",
    deliverables: [
      "Videojuegos y prototipos 2D interactivos en Unity 6",
      "Arquitecturas desacopladas con Object Pooling para 60 FPS estables",
      "Máquinas de estado (FSM) y lógica de simulación reactiva",
      "Integración de assets generados por IA con pipelines visuales estilizados",
    ],
    techTags: ["Unity 6", "C#", "FSM", "Object Pooling", "AI Art Pipelines"],
    iconKey: "gaming",
  },
];
