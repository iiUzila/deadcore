import { createClient } from '@supabase/supabase-js'

// Tenta pegar a variável de ambiente. 
// SE não existir (durante o build), usa uma string falsa para não dar erro.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lencoyvhrpnwqakxgqbp.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_C7svLkcXDJAeKt0UMscJwg_d82OhiMq";

// Cria o cliente com segurança
export const supabase = createClient(supabaseUrl, supabaseKey);