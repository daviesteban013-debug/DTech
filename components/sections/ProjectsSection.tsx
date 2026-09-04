"use client";

import React from "react";
import { projectsData } from "@/content/projects";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Layers, Terminal, Cpu } from "lucide-react";

export function ProjectsSection() {
  const iconMap = [Layers, Terminal, Cpu];

  return (
    <SectionContainer id="proyectos" glowPosition="top-left">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-medium text-[#FF3B47] uppercase tracking-wider block">
            Casos y sistemas en producción
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] mt-2">
            Expedientes técnicos
          </h2>
          <p className="mt-4 text-base text-[#9C9490] leading-relaxed">
            Sistemas reales construidos para resolver desafíos específicos de negocio, finanzas algorítmicas e interactividad gráfica.
          </p>
        </div>

        {/* Dossiers list */}
        <div className="space-y-12">
          {projectsData.map((project, index) => {
            const ProjectIcon = iconMap[index % iconMap.length];

            return (
              <article
                key={project.id}
                className="rim-border rounded-sm bg-[#120E0D] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#FF3B47]/40 relative overflow-hidden"
              >
                {/* Dossier Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#221817]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[#1A1413] border border-[#C81E3A]/30 flex items-center justify-center text-[#FF3B47]">
                      <ProjectIcon size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#9C9490] uppercase tracking-wider block">
                        Expediente #{index + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="accent">{project.category}</Badge>
                    <Badge variant="default">{project.badge}</Badge>
                  </div>
                </div>

                {/* Summary */}
                <div className="py-6 border-b border-[#221817]">
                  <p className="text-base sm:text-lg text-[#F2EDE9] leading-relaxed font-normal">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Problem vs Solution Grid */}
                <div className="py-6 border-b border-[#221817] grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF3B47] font-[family-name:var(--font-space-grotesk)]">
                      Desafío técnico
                    </h4>
                    <p className="text-[#9C9490] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]">
                      Solución e implementación
                    </h4>
                    <p className="text-[#9C9490] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Architecture Highlights & Metrics */}
                <div className="py-6 border-b border-[#221817] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#9C9490] font-[family-name:var(--font-space-grotesk)]">
                      Detalles de arquitectura
                    </h4>
                    <ul className="space-y-2 text-xs text-[#F2EDE9]">
                      {project.architectureNotes.map((note, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-[#C81E3A] rounded-none mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-4 bg-[#0A0808] p-4 border border-[#221817] rounded-sm space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF3B47] font-[family-name:var(--font-space-grotesk)]">
                      Parámetros clave
                    </h4>
                    <dl className="space-y-2 text-xs">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex justify-between items-center py-1 border-b border-[#1A1413] last:border-none">
                          <dt className="text-[#9C9490]">{m.label}</dt>
                          <dd className="text-[#F2EDE9] font-mono font-medium">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* Technical Stack Pills */}
                <div className="pt-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[#68615D] font-mono mr-2">
                    Stack:
                  </span>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 bg-[#1A1614] text-[#F2EDE9] border border-[#C81E3A]/25 rounded-none"
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
