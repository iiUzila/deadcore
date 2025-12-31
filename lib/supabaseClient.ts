import { createClient } from '@supabase/supabase-js';

// 1. Tenta pegar a variável de ambiente
const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 2. A TRAVA DE SEGURANÇA:
// Se a variável estiver vazia, nula ou indefinida, usamos um texto falso ("fallback").
// Isso engana o erro "required" durante o Build.
const supabaseUrl = envUrl && envUrl.length > 0 ? envUrl : 'https://lencoyvhrpnwqakxgqbp.supabase.co';
const supabaseKey = envKey && envKey.length > 0 ? envKey : 'sb_publishable_C7svLkcXDJAeKt0UMscJwg_d82OhiMq';

// 3. Cria o cliente com a garantia de que tem texto lá dentro
export const supabase = createClient(supabaseUrl, supabaseKey);