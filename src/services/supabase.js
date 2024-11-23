import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://doxnqassxumksafgdfkp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRveG5xYXNzeHVta3NhZmdkZmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzNzUzNTIsImV4cCI6MjA0Nzk1MTM1Mn0.cm0MMVSv53v85xVIDobjgDNujUagNbL1GQ8wujuxcRU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
