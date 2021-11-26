
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.PUBLIC_REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.PUBLIC_REACT_APP_SUPABASE_ANON_KEY;


export const supabase = createClient('https://jslcanriwwzksixqngxt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDAyODc4NSwiZXhwIjoxOTQ5NjA0Nzg1fQ.6mqsdmnBAIiPF9E67UR0SKhQ0p4n0fceWd7dDwFD5D4');