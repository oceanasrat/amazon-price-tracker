import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://dfbtdtetnmixmjxzkqbr.supabase.co
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmYnRkdGV0bm1peG1qeHprcWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMjYyNTcsImV4cCI6MjA4ODYwMjI1N30.jl1CfR7P5CY60JgaRFA0LT7XCgX9NHtAYt1oroOzWs0

export const supabase = createClient(supabaseUrl, supabaseKey)
