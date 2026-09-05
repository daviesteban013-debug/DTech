"use client";

import React from "react";
import Image from "next/image";
import { projectsData } from "@/content/projects";
import { SectionContainer } from "@/components/common/SectionContainer";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Badge } from "@/components/common/Badge";
import { Layers, Terminal, Cpu } from "lucide-react";

export function ProjectsSection() {
  const iconMap = [Layers, Terminal, Cpu];

  return (
    <SectionContainer id="proyectos" variant="base" glowPosition="top-left">
      <div className="space-y-16">
        {/* Standardized Section Header */}
        <SectionHeader
          chapterNumber="04"
          eyebrow="CASOS Y SISTEMAS EN PRODUCCIÓN"
          title="Expedientes técnicos"
          description="Sistemas reales construidos para resolver desafíos específicos de negocio, finanzas algorítmicas e interactividad gráfica."
        />

        {/* Dossiers list */}
        <div className="space-y-20">
          {projectsData.map((project, index) => {
            const ProjectIcon = iconMap[index % iconMap.length];

            return (
              <article
                key={project.id}
                className="rim-border rounded-sm bg-[#120E0D] p-7 sm:p-10 lg:p-12 transition-all duration-300 hover:border-[#FF3B47]/40 relative overflow-hidden space-y-9"
              >
                {/* Dossier Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-7 border-b border-[#221817]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-sm bg-[#1A1413] border border-[#C81E3A]/35 flex items-center justify-center text-[#FF3B47]">
                      <ProjectIcon size={24} />
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

                {/* 16:9 Technical Image Preview Container with next/image */}
                <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-[#0A0808] border border-[#281F1D] group/preview shadow-2xl">
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

                  {/* Cinematic Corner Overlay Badge */}
                  <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-[#0A0808]/90 backdrop-blur-md border border-[#C81E3A]/40 text-xs font-mono text-[#F2EDE9] flex items-center gap-2.5 pointer-events-none z-10">
                    <span className="w-1.5 h-1.5 bg-[#FF3B47] rounded-none animate-pulse" />
                    <span>ESPECIFICACIÓN 16:9 // TELEMETRÍA</span>
                  </div>
                </div>

                {/* Summary with elevated presence */}
                <div className="py-2 border-b border-[#221817]">
                  <p className="text-lg sm:text-xl text-[#F2EDE9] leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Problem vs Solution Grid */}
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

                  <div className="lg:col-span-4 bg-[#0A0808] p-5 border border-[#221817] rounded-sm space-y-4">
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
