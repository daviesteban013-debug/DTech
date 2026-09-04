"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactFormData,
  projectTypes,
} from "@/lib/validations/contact";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function ContactSection() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "Sitio web",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus("sending");
    setServerErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus("success");
        reset();
      } else {
        setSubmissionStatus("error");
        setServerErrorMessage(
          result.message || "Hubo un inconveniente al enviar. Intenta de nuevo."
        );
      }
    } catch {
      setSubmissionStatus("error");
      setServerErrorMessage(
        "No fue posible conectar con el servidor. Revisa tu conexión."
      );
    }
  };

  return (
    <SectionContainer id="contacto" glowPosition="top-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Invitation & Info */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-medium text-[#FF3B47] uppercase tracking-wider block">
            Contacto directo
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-[#F2EDE9] leading-tight">
            Cuéntame qué necesitas
          </h2>

          <p className="text-base text-[#9C9490] leading-relaxed">
            Ya sea una aplicación web completa, la automatización de una estrategia cuantitativa en Pine Script/MQL5 o una consulta de arquitectura técnica, conversemos directamente sobre los requerimientos.
          </p>

          <div className="p-6 rim-border rounded-sm bg-[#14100F] space-y-4 text-xs">
            <div>
              <span className="text-[#68615D] uppercase tracking-wider block font-mono">
                Ubicación
              </span>
              <span className="text-[#F2EDE9] font-medium text-sm">
                Bogotá, Colombia (Zona horaria GMT-5)
              </span>
            </div>

            <div>
              <span className="text-[#68615D] uppercase tracking-wider block font-mono">
                Tiempo de respuesta
              </span>
              <span className="text-[#F2EDE9] font-medium text-sm">
                Normalmente respondo en menos de 24 horas hábiles
              </span>
            </div>

            <div>
              <span className="text-[#68615D] uppercase tracking-wider block font-mono">
                Disponibilidad
              </span>
              <span className="text-[#FF3B47] font-medium text-sm">
                Abierto a proyectos de software y consultoría algorítmica
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Accessible Form */}
        <div className="lg:col-span-7 rim-border rounded-sm bg-[#120E0D] p-6 sm:p-9">
          {submissionStatus === "success" && (
            <div
              role="alert"
              className="mb-8 p-5 bg-[#C81E3A]/15 border border-[#FF3B47]/40 rounded-sm flex items-start gap-3"
            >
              <CheckCircle2 size={20} className="text-[#FF3B47] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]">
                  Mensaje recibido con éxito
                </h3>
                <p className="text-xs text-[#9C9490] mt-1">
                  Gracias por escribir. Revisaré los detalles técnicos de tu solicitud y me pondré en contacto contigo pronto.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmissionStatus("idle")}
                  className="mt-3 text-xs text-[#FF3B47] hover:underline font-mono"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          )}

          {submissionStatus === "error" && (
            <div
              role="alert"
              className="mb-8 p-5 bg-red-950/40 border border-red-800 rounded-sm flex items-start gap-3"
            >
              <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-red-200 font-[family-name:var(--font-space-grotesk)]">
                  No se pudo enviar el mensaje
                </h3>
                <p className="text-xs text-red-300 mt-1">
                  {serverErrorMessage}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-wider text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]"
              >
                Nombre completo
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Ej. Carlos Mendoza"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-4 py-3 bg-[#0A0808] text-[#F2EDE9] text-sm border rounded-none focus-visible:outline-none transition-colors ${
                  errors.name
                    ? "border-[#FF3B47] focus-visible:ring-1 focus-visible:ring-[#FF3B47]"
                    : "border-[#2A2220] focus-visible:border-[#FF3B47]"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-[#FF3B47] font-mono">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wider text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="carlos@ejemplo.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 bg-[#0A0808] text-[#F2EDE9] text-sm border rounded-none focus-visible:outline-none transition-colors ${
                  errors.email
                    ? "border-[#FF3B47] focus-visible:ring-1 focus-visible:ring-[#FF3B47]"
                    : "border-[#2A2220] focus-visible:border-[#FF3B47]"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-[#FF3B47] font-mono">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Project Type Select Field */}
            <div className="space-y-2">
              <label
                htmlFor="projectType"
                className="block text-xs font-medium uppercase tracking-wider text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]"
              >
                Tipo de proyecto
              </label>
              <select
                id="projectType"
                aria-invalid={errors.projectType ? "true" : "false"}
                aria-describedby={
                  errors.projectType ? "projectType-error" : undefined
                }
                className={`w-full px-4 py-3 bg-[#0A0808] text-[#F2EDE9] text-sm border rounded-none focus-visible:outline-none transition-colors ${
                  errors.projectType
                    ? "border-[#FF3B47] focus-visible:ring-1 focus-visible:ring-[#FF3B47]"
                    : "border-[#2A2220] focus-visible:border-[#FF3B47]"
                }`}
                {...register("projectType")}
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#14100F] text-[#F2EDE9]">
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p id="projectType-error" className="text-xs text-[#FF3B47] font-mono">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-wider text-[#F2EDE9] font-[family-name:var(--font-space-grotesk)]"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Describe tu proyecto, el objetivo técnico, los plazos estimados o las preguntas específicas que tengas..."
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`w-full px-4 py-3 bg-[#0A0808] text-[#F2EDE9] text-sm border rounded-none focus-visible:outline-none transition-colors ${
                  errors.message
                    ? "border-[#FF3B47] focus-visible:ring-1 focus-visible:ring-[#FF3B47]"
                    : "border-[#2A2220] focus-visible:border-[#FF3B47]"
                }`}
                {...register("message")}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-[#FF3B47] font-mono">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button with UI voice states */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                disabled={submissionStatus === "sending"}
              >
                {submissionStatus === "sending"
                  ? "Enviando mensaje..."
                  : submissionStatus === "success"
                  ? "Mensaje enviado con éxito"
                  : submissionStatus === "error"
                  ? "Reintentar envío"
                  : "Enviar mensaje"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}
