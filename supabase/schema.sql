-- DTech — Esquema de Base de Datos para Mensajes de Contacto (Supabase / PostgreSQL)

-- 1. Tabla contact_messages
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  project_type text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- 2. Habilitar Row Level Security (RLS)
alter table contact_messages enable row level security;

-- 3. Política de inserción segura
create policy "Permitir insercion de mensajes de contacto"
  on contact_messages
  for insert
  with check (
    length(trim(name)) > 0 and
    length(trim(email)) > 0 and
    length(trim(message)) > 0
  );

-- 4. Restricción de lectura
-- Por defecto en RLS, al no existir política 'for select', ningún cliente anónimo puede leer mensajes.
-- Solo service_role (backend server-side) o un panel admin autenticado futuro tendrán acceso.

-- 5. Índices de rendimiento
create index if not exists idx_contact_messages_created_at on contact_messages (created_at desc);
create index if not exists idx_contact_messages_email on contact_messages (email);
