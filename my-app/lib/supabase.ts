import { createClient } from "@supabase/supabase-js";

// Usa as variáveis que já estão no seu .env.local (a chave pública do Supabase).
// Aceita tanto o nome novo (PUBLISHABLE_KEY) quanto o antigo (ANON_KEY).
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const chave =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !chave) {
  throw new Error("Faltam as variáveis do Supabase no .env.local da pasta my-app");
}

// Este "supabase" é a conexão com o banco. A segurança vem do RLS (as policies que você criou no Supabase).
export const supabase = createClient(url, chave, { auth: { persistSession: false } });
