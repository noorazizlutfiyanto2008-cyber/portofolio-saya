import { createBrowserClient } from '@supabase/ssr'

// KITA TULIS LANGSUNG BIAR LOKAL BEBAS ERROR
const supabaseUrl = "https://ydhfpommjtfgtvtayabv.supabase.co";
const supabaseAnonKey = "sb_publishable_YTEtAmauuynmFvcgqUP7LA_YNyxsqvY";

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)