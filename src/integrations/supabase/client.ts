// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://upmachmkbnyidczocoaq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwbWFjaG1rYm55aWRjem9jb2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0ODk5MzUsImV4cCI6MjA1MTA2NTkzNX0.uGArr6S03cMJbmBNayLcFQyUR0__e5LvACIH8ne2XDk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);