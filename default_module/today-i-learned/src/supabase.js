import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://mcsclfflmagvqriuwinr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jc2NsZmZsbWFndnFyaXV3aW5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3OTMxMjgsImV4cCI6MjAyNTM2OTEyOH0.C406UF4lsE8wIwVk_FQHPabg5nLZm1Dqku-cllFDq58';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;