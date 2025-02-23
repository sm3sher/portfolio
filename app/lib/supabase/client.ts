'use server';

import type { Database } from '@/app/lib/supabase/generated/database.types';
import { createBrowserClient } from '@supabase/ssr';

const supabaseClient = () => {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    throw new Error(
      'Supabase URL or anon key is missing in the environment variables.',
    );
  }

  return createBrowserClient<Database>(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
  );
};

export default supabaseClient;
