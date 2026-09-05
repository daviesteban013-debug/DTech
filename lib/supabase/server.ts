import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Retorna un cliente server-side de Supabase con permisos de service_role para operaciones seguras en backend.
 * Si las credenciales no están configuradas aún en .env.local, retorna null para permitir degradación elegante.
 */
export function getSupabaseServerClient(): SupabaseClient | null {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (
    !supabaseUrl ||
    !serviceKey ||
    supabaseUrl.includes("your-project.supabase.co") ||
    serviceKey.includes("your-service-role-key")
  ) {
    return null;
  }

  return createClient(supabaseUrl, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
