import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Mühit dəyişənlərini oxuyun
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Mühit dəyişənlərini oxuyun

export const supabase = createClient(supabaseUrl, supabaseKey);