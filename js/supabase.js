import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://rsrnswmklyozaihtihqv.supabase.co";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcm5zd21rbHlvemFodGlobHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxMjI0MDksImV4cCI6MjA4MzY5ODQwOX0.0foO0rg1EP3Jns8e3uZvT41v-y-4m_frJnGyXEOJUY8";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);