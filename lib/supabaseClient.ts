import { createClient } from '@supabase/supabase-js'

// FORÇA BRUTA: Se não houver chave, usa texto falso.
// O "?? ''" garante que nunca é undefined.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://lencoyvhrpnwqakxgqbp.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "sb_publishable_C7svLkcXDJAeKt0UMscJwg_d82OhiMq";

export const supabase = createClient(supabaseUrl, supabaseKey);