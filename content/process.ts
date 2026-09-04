export interface ProcessStep {
  id: string;
  stageName: string;
  headline: string;
  description: string;
  mindsetNote: string;
  outputs: string[];
}

export const processSteps: ProcessStep[] = [
  {
    id: "descubrimiento-especificacion",
    stageName: "Fase 1 — Análisis de reglas",
    headline: "Delimitar requerimientos y aislar variables",
    description:
      "Al igual que en el análisis de liquidez en un gráfico financiero, ningún desarrollo comienza sin entender las restricciones reales. Analizo a fondo el problema, defino las entradas y salidas esperadas y establezco las condiciones de éxito antes de escribir una sola línea de código.",
    mindsetNote: "Cero suposiciones. Cada regla de negocio queda formulada de manera unívoca.",
    outputs: [
      "Documento de alcance y arquitectura inicial",
      "Modelado de estados y casos de borde",
      "Contrato de interfaces y definición técnica",
    ],
  },
  {
    id: "arquitectura-modelado",
    stageName: "Fase 2 — Arquitectura de sistemas",
    headline: "Estructuración de flujos y aislamiento modular",
    description:
      "Diseño arquitecturas desacopladas donde cada componente tiene una única responsabilidad. Ya sea estructurando un catálogo con pasarelas de pago, una clase de gestión de riesgo en MQL5 o una máquina de estados en Unity, la modularidad garantiza que el sistema pueda escalar sin romperse.",
    mindsetNote: "Diseño para la resiliencia: si un componente falla, el núcleo sigue operando.",
    outputs: [
      "Esquema de datos y tipado estricto",
      "Estructura de directorios por dominio",
      "Plan de integración de servicios externos",
    ],
  },
  {
    id: "desarrollo-iterativo",
    stageName: "Fase 3 — Construcción e iteración",
    headline: "Código limpio potenciado por herramientas de IA",
    description:
      "Desarrollo de forma iterativa y metódica. Utilizo agentes de código de inteligencia artificial (como Antigravity) para acelerar tareas repetitivas y scaffolding, permitiéndome concentrar el esfuerzo cognitivo en la lógica de negocio, la seguridad y los detalles finos de la experiencia.",
    mindsetNote: "Velocidad de ejecución sin comprometer la disciplina técnica ni el estándar del código.",
    outputs: [
      "Código estructurado en TypeScript, C# o MQL5",
      "Validación de tipos y linting continuo",
      "Iteraciones funcionales entregadas con trazabilidad",
    ],
  },
  {
    id: "validacion-entrega",
    stageName: "Fase 4 — Validación y despliegue",
    headline: "Backtesting de estrés y entrega en producción",
    description:
      "Un algoritmo no opera en vivo sin backtesting riguroso; de la misma forma, una aplicación web o un videojuego no se entregan sin verificación exhaustiva. Pruebo casos extremos, optimizo el rendimiento y configuro despliegues automatizados listos para producción.",
    mindsetNote: "Resultados deterministas: el software hace exactamente lo previsto bajo cualquier escenario.",
    outputs: [
      "Despliegue serverless continuo en Vercel",
      "Auditoría de rendimiento, accesibilidad y tiempos de respuesta",
      "Documentación técnica clara para el mantenimiento futuro",
    ],
  },
];
