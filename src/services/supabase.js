import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://aufgorgvrxxzyuszinyv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1Zmdvcmd2cnh4enl1c3ppbnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5ODMwMjEsImV4cCI6MjA1NDU1OTAyMX0.ZQV5Gy6MYsOcnkpuX4HLT2mTKpRtdxXXcb-qZCn3FOo';
const supabase = createClient(supabaseUrl, supabaseKey);



export default supabase;