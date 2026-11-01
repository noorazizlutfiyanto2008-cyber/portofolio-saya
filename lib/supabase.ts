import { createClient } from '@supabase/supabase-js';

// SEMENTARA KITA TULIS LANGSUNG DI SINI
const supabaseUrl = "https://ydhfpommjtfgtvtayabv.supabase.co";
const supabaseAnonKey = "sb_publishable_YTEtAmauuynmFvcgqUP7LA_YNyxsqvY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);