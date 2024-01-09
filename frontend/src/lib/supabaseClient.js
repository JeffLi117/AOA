import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zblojjsscginivoyhyya.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpibG9qanNzY2dpbml2b3loeXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1NzU2MzMsImV4cCI6MjAyMDE1MTYzM30.ldrCCZbCy3Bccpmu0quv0Np_4XEO_Bmei_nGUdLc2F8'
export const supabase = createClient(supabaseUrl, supabaseKey)