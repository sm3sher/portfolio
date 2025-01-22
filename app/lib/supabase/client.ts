'use server';

import { createBrowserClient } from '@supabase/ssr';
import { Database } from '@/app/lib/supabase/generated/database.types';

const supabaseClient = () =>
  createBrowserClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );

export default supabaseClient;
