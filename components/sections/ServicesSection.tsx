"use client";

import React from "react";
import { servicesData } from "@/content/services";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Globe, TrendingUp, Gamepad2, Check } from "lucide-react";

export function ServicesSection() {
  const iconMap = {
    web: Globe,
    trading: TrendingUp,
    gaming: Gamepad2,
  };

  return (
    <SectionContainer id="que-hago" glowPosition="top-left">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-medium text-[#FF3B47] uppercase tracking-wider block">
            Áreas de especialidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] mt-2">
            Qué construyo
          </h2>
          <p className="mt-4 text-base text-[#9C9490] leading-relaxed">
            Tres disciplinas complementarias unidas por el rigor del código limpio, la velocidad de ejecución y la tolerancia a fallos.
          </p>
        </div>

        {/* Asymmetric layout for the 3 services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconKey];
            // Asymmetric spanning: First card spans 12 cols, second and third span 6 cols each
            const isWide = index === 0;

            return (
              <div
                key={service.id}
                className={`p-7 sm:p-9 rim-border rounded-sm flex flex-col justify-between transition-all duration-300 ${
                  isWide ? "lg:col-span-12 bg-gradient-to-br from-[#1A1614] via-[#120E0D] to-[#0A0808]" : "lg:col-span-6 bg-[#14100F]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#221817] border border-[#C81E3A]/40 flex items-center justify-center text-[#FF3B47] shadow-[0_0_15px_rgba(200,30,58,0.2)]">
                      <Icon size={24} />
                    </div>

                    <span className="text-xs font-mono text-[#9C9490] border-b border-[#C81E3A]/30 pb-0.5">
                      Ingeniería aplicada
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9]">
                    {service.title}
                  </h3>

                  <p className="text-sm font-medium text-[#FF3B47] mt-2">
                    {service.summary}
                  </p>

                  <p className="mt-4 text-sm text-[#9C9490] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables list */}
                  <div className="mt-6 pt-6 border-t border-[#221817] space-y-2.5">
                    <h4 className="text-xs font-medium uppercase tracking-wider text-[#F2EDE9]/70 font-[family-name:var(--font-space-grotesk)] mb-3">
                      Alcances y entregables
                    </h4>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#9C9490]">
                        <Check size={14} className="text-[#FF3B47] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="mt-8 pt-4 border-t border-[#1C1615] flex flex-wrap gap-1.5">
                  {service.techTags.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
