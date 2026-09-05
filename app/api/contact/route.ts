import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validación estricta con Zod
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

    const supabase = getSupabaseServerClient();
    let messageId: string | null = null;

    if (supabase) {
      // Inserción server-side en tabla contact_messages de Supabase
      const { data, error } = await supabase
        .from("contact_messages")
        .insert({
          name,
          email,
          project_type: projectType,
          message,
        })
        .select("id")
        .single();

      if (error) {
        console.error("[SUPABASE CONTACT ERROR]:", error);
        return NextResponse.json(
          {
            success: false,
            message: "No fue posible registrar tu mensaje en la base de datos.",
          },
          { status: 500 }
        );
      }

      messageId = data?.id || null;
      console.log("[SUPABASE CONTACT SUCCESS]: Mensaje insertado con ID:", messageId);
    } else {
      // Registro en log de servidor para desarrollo cuando no hay credenciales configuradas
      messageId = "local-" + Math.random().toString(36).substring(2, 9);
      console.log("[CONTACTO DEV REGISTRADO]:", {
        id: messageId,
        timestamp: new Date().toISOString(),
        name,
        email,
        projectType,
        message,
        note: "Configura NEXT_PUBLIC_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en .env.local para inserción remota en Supabase.",
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Tu mensaje ha sido recibido y registrado con éxito.",
        messageId,
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
