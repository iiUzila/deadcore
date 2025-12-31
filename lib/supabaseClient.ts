import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://lencoyvhrpnwqakxgqbp.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_C7svLkcXDJAeKt0UMscJwg_d82OhiMq";

export const supabase = createClient(supabaseUrl, supabaseKey);