import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, projectType, message } = validationResult.data;

    // Log the message for serverless visibility (ready to be plugged into Resend/Sendgrid)
    console.log("[NUEVO MENSAJE DE CONTACTO DTECH]:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      projectType,
      message,
    });

    // Simulated latency for smooth UI state transition
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      {
        success: true,
        message: "Tu mensaje ha sido recibido con éxito.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ERROR EN CONTACT API]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Ocurrió un error inesperado al procesar tu solicitud.",
      },
      { status: 500 }
    );
  }
}
