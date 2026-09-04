import { z } from "zod";

export const projectTypes = [
  "Sitio web",
  "Sistema a medida",
  "Trading/automatización",
  "Otro",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Por favor escribe tu nombre completo" })
    .max(100, { message: "El nombre no puede exceder los 100 caracteres" }),
  email: z
    .string()
    .email({ message: "Ingresa una dirección de correo electrónico válida" }),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Selecciona un tipo de proyecto de la lista" }),
  }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe contener al menos 10 caracteres explicativos" })
    .max(2000, { message: "El mensaje no debe superar los 2000 caracteres" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
