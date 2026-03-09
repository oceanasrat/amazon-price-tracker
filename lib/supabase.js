import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://znhbenuaviuykqeplgzg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpuaGJlbnVhdml1eWtxZXBsZ3pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMTMzODAsImV4cCI6MjA4Nzg4OTM4MH0.6qKW1pmNjjbqhkUtaa64p0NouDPHr18jXSOUeO4mREQ"

export const supabase = createClient(supabaseUrl, supabaseKey)
