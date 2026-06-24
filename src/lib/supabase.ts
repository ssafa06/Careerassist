import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://vinphssoubhmfugqhize.supabase.co";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpbnBoc3NvdWJobWZ1Z3FoaXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MzUwNjgsImV4cCI6MjA5NzExMTA2OH0.MYe82cqqJb2q9ln6eq3-o3qF5mt8BNHYymGUNg3v6PI";

export const supabase =
  createClient(
    supabaseUrl,
    supabaseAnonKey
  );