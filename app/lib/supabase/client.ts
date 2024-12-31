import { createBrowserClient } from '@supabase/ssr';
import { Database } from '@/app/lib/supabase/generated/database.types';

const supabaseClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

export default supabaseClient;
