import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wchnquxqensrlkkpicuz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjaG5xdXhxZW5zcmxra3BpY3V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyNzIxNjIsImV4cCI6MjAxOTg0ODE2Mn0.6xbwOXGSdOSn4jcEOxGn3Sm6g9nXdbS5IHYxcK9VZzQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
