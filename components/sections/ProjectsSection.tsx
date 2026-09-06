"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/content/projects";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { WindowChrome } from "@/components/common/WindowChrome";
import { CodeBlock } from "@/components/common/CodeBlock";
import { Layers, Terminal, Cpu, Code2, Eye } from "lucide-react";

// Code Snippets for real technical product display
const projectCodeSnippets: Record<string, { filename: string; language: string; code: string }> = {
  "ecommerce-audio-binaural": {
    filename: "webhook-stripe-checkout.ts",
    language: "typescript",
    code: `// app/api/checkout/webhook/route.ts
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { generateEphemeralDownloadToken } from "@/lib/auth/token";

export async function POST(req: Request) {
  const payload = await req.text();
  const signature = req.headers.get("stripe-signature")!;

  // Verificación criptográfica HMAC-SHA256 de Stripe
  const event = stripe.webhooks.constructEvent(
    payload,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    
    // Generación de URL temporal con expiración programada (15 minutos)
    const downloadToken = await generateEphemeralDownloadToken({
      orderId: session.id,
      customerEmail: session.customer_details?.email,
      trackId: session.metadata?.trackId,
      expiresInMinutes: 15,
    });

    return NextResponse.json({ success: true, downloadToken });
  }

  return NextResponse.json({ received: true });
}`,
  },
  "kz-ob-trading-algoritmico": {
    filename: "KZ_OB_Engine_v10.7.pine",
    language: "javascript", // Pine script tokenizes cleanly with JS syntax grammar
    code: `//@version=5
// KZ·OB Quantitative Strategy Engine v10.7
// Target: JPN225 (Nikkei) | Timeframe: 5m | Execution: Pepperstone FIX API
strategy("KZ·OB v10.7 [ICT/SMC]", overlay=true, margin_long=100, margin_short=100)

// --- 1. Detección matemática de Change of Character (CHoCH) ---
swingHigh = ta.pivothigh(high, 5, 2)
swingLow  = ta.pivotlow(low, 5, 2)
isChochBull = close > ta.valuewhen(not na(swingHigh), swingHigh, 0) and close[1] <= swingHigh

// --- 2. Scoring y Mitigación de Order Blocks Institucionales ---
f_ob_scoring(obHigh, obLow, vol) =>
    volRatio = vol / ta.sma(vol, 20)
    mitigated = (low <= obHigh and high >= obLow)
    score = (volRatio >= 1.8 ? 40 : 20) + (isChochBull ? 35 : 0) + (not mitigated ? 25 : 0)
    score

// --- 3. Filtro de Kill Zone de Tokio (Horario Asiático) ---
inTokyoKillZone = not na(time(timeframe.period, "0900-1130:23456"))
obScore = f_ob_scoring(low[1], low[2], volume)

if (inTokyoKillZone and isChochBull and obScore >= 80)
    strategy.entry("Long_OB", strategy.long, comment="SMC_ORDER_BLOCK_CONFIRMED")
    strategy.exit("TP_SL", "Long_OB", profit=150, loss=45)`,
  },
  "threat-matrix-videojuego": {
    filename: "WaveManager.cs",
    language: "csharp",
    code: `using UnityEngine;
using System.Collections.Generic;

// Threat Matrix — High-Performance Pooling & Dynamic Price Economy
public class WaveManager : MonoBehaviour
{
    [Header("Zero-GC Object Pooling")]
    [SerializeField] private GameObject projectilePrefab;
    private readonly Queue<GameObject> _pool = new Queue<GameObject>(350);

    [Header("FSM State Matrix")]
    public enum WaveState { Spawning, CombatActive, DynamicPriceSurge, Cleared }
    public WaveState CurrentState { get; private set; }

    public GameObject SpawnProjectile(Vector3 position, Quaternion rotation)
    {
        if (_pool.Count == 0) ExpandPool(50);
        GameObject proj = _pool.Dequeue();
        proj.transform.SetPositionAndRotation(position, rotation);
        proj.SetActive(true);
        return proj;
    }

    public void ReturnToPool(GameObject projectile)
    {
        projectile.SetActive(false);
        _pool.Enqueue(projectile);
    }

    // Modelo dinámico de mercado: costo escala según unidades desplegadas
    public float CalculateDynamicNodeCost(int deployedCount, float baseCost)
    {
        float demandCurve = Mathf.Pow(1.184f, deployedCount);
        return baseCost * demandCurve;
    }
}`,
  },
};

export function ProjectsSection() {
  const iconMap = [Layers, Terminal, Cpu];

  // Active tab state for each project: default is 'code' for KZ·OB, 'preview' for ecommerce & threat matrix
  const [activeTabs, setActiveTabs] = useState<Record<string, string>>({
    "ecommerce-audio-binaural": "preview",
    "kz-ob-trading-algoritmico": "code",
    "threat-matrix-videojuego": "preview",
  });

  const handleTabChange = (projectId: string, tabId: string) => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tabId }));
  };

  return (
    <SectionContainer id="proyectos" variant="base" glowPosition="top-left">
      <div className="space-y-24">
        {/* Encabezado de Capítulo */}
        <SectionHeader
          chapterNumber="04"
          eyebrow="CASOS Y SISTEMAS EN PRODUCCIÓN"
          title="Expedientes técnicos"
          description="Sistemas reales construidos para resolver desafíos específicos de negocio, finanzas algorítmicas e interactividad gráfica, respaldados con código auditable."
        />

        {/* Lista de Expedientes con amplio espacio negativo ("aire en negro") */}
        <div className="space-y-32">
          {projectsData.map((project, index) => {
            const ProjectIcon = iconMap[index % iconMap.length];
            const activeTab = activeTabs[project.id] || "preview";
            const codeSnippet = projectCodeSnippets[project.id];

            // Define Chrome tabs for this project
            const chromeTabs = [
              { id: "preview", label: "Vista de Interfaz (16:9)", icon: Eye },
              ...(codeSnippet
                ? [{ id: "code", label: codeSnippet.filename, icon: Code2 }]
                : []),
            ];

            return (
              <article
                key={project.id}
                className="rim-border rounded-sm bg-[#120E0D] p-8 sm:p-11 lg:p-14 transition-all duration-300 hover:border-[#FF3B47]/45 relative overflow-hidden space-y-10"
              >
                {/* Cabecera del Expediente */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-8 border-b border-[#221817]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-sm bg-[#1A1413] border border-[#C81E3A]/40 flex items-center justify-center text-[#FF3B47] shadow-[0_0_15px_rgba(200,30,58,0.2)]">
                      <ProjectIcon size={26} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#9C9490] uppercase tracking-wider block">
                        Expediente #{index + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="accent" className="text-xs px-3 py-1">
                      {project.category}
                    </Badge>
                    <Badge variant="default" className="text-xs px-3 py-1">
                      {project.badge}
                    </Badge>
                  </div>
                </div>

                {/* PANEL DE PRODUCTO REAL CON CHROME DE VENTANA ESTILO SUPABASE */}
                <WindowChrome
                  tabs={chromeTabs}
                  activeTabId={activeTab}
                  onTabChange={(tabId) => handleTabChange(project.id, tabId)}
                  actions={
                    <span className="text-[11px] font-mono text-[#FF3B47] bg-[#C81E3A]/20 px-2.5 py-0.5 border border-[#FF3B47]/30">
                      {activeTab === "code" ? "CÓDIGO REAL // REGLAS" : "INSTRUMENTACIÓN 16:9"}
                    </span>
                  }
                >
                  {activeTab === "code" && codeSnippet ? (
                    <CodeBlock
                      code={codeSnippet.code}
                      language={codeSnippet.language}
                      showLineNumbers={true}
                    />
                  ) : (
                    /* 16:9 Image/Mockup View */
                    <div className="relative w-full aspect-video bg-[#0A0808] overflow-hidden group/preview">
                      {project.images && project.images.length > 0 ? (
                        <Image
                          src={project.images[0]}
                          alt={`Esquema técnico y vista de interfaz de ${project.name}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                          className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.01]"
                          priority={index === 0}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#14100F] text-[#9C9490] p-6 text-center">
                          <span className="font-mono text-xs text-[#FF3B47] uppercase tracking-wider mb-2">
                            Telemetría visual
                          </span>
                          <p className="text-base">Captura técnica en preparación</p>
                        </div>
                      )}

                      {/* Corner Badge */}
                      <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-[#0A0808]/90 backdrop-blur-md border border-[#C81E3A]/40 text-xs font-mono text-[#F2EDE9] flex items-center gap-2.5 pointer-events-none z-10">
                        <span className="w-1.5 h-1.5 bg-[#FF3B47] rounded-none animate-pulse" />
                        <span>ENTORNO AUDITABLE</span>
                      </div>
                    </div>
                  )}
                </WindowChrome>

                {/* Resumen con presencia tipográfica */}
                <div className="py-2 border-b border-[#221817]">
                  <p className="text-lg sm:text-xl text-[#F2EDE9] leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Problem vs Solution Grid con aire */}
                <div className="py-4 border-b border-[#221817] grid grid-cols-1 lg:grid-cols-2 gap-10 text-base">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF3B47] font-[family-name:var(--font-space-grotesk)]">
                      Desafío técnico
                    </h4>
                    <p className="text-[#9C9490] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]">
                      Solución e implementación
                    </h4>
                    <p className="text-[#9C9490] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Highlights & Metrics */}
                <div className="py-4 border-b border-[#221817] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#9C9490] font-[family-name:var(--font-space-grotesk)]">
                      Detalles de arquitectura
                    </h4>
                    <ul className="space-y-3 text-sm sm:text-base text-[#F2EDE9]">
                      {project.architectureNotes.map((note, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#C81E3A] rounded-none mt-2 shrink-0" />
                          <span className="leading-relaxed">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 bg-[#0A0808] p-6 border border-[#221817] rounded-sm space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF3B47] font-[family-name:var(--font-space-grotesk)]">
                      Parámetros clave
                    </h4>
                    <dl className="space-y-3 text-xs sm:text-sm">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex justify-between items-center py-1.5 border-b border-[#1A1413] last:border-none">
                          <dt className="text-[#9C9490]">{m.label}</dt>
                          <dd className="text-[#F2EDE9] font-mono font-medium">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* Technical Stack Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5">
                  <span className="text-xs text-[#68615D] font-mono mr-2">
                    Stack:
                  </span>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 bg-[#1A1614] text-[#F2EDE9] border border-[#C81E3A]/30 rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
