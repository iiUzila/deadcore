const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const url = supabaseUrl || "https://placeholder.supabase.co"
const key = supabaseKey || "placeholder-key"

export const supabase = createClient(url, key)