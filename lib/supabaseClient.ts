import { createClient } from '@supabase/supabase-js'

// 1. Pegamos as variáveis
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 2. O TRUQUE DE SEGURANÇA:
// Verificamos se elas existem. Se não existirem (durante o build), usamos valores falsos.
// O 'createClient' precisa obrigatóriamente de texto, não pode receber 'undefined'.
const finalUrl = url ? url : "https://lencoyvhrpnwqakxgqbp.supabase.co";
const finalKey = key ? key : "sb_publishable_C7svLkcXDJAeKt0UMscJwg_d82OhiMq";

// 3. Criamos o cliente
export const supabase = createClient(finalUrl, finalKey);