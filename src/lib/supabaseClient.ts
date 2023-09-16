import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

if (!env.DATABASE || !env.DATABASE_KEY) {
	throw new Error('Environment variables DATABASE or DATABASE_KEY are not defined');
}

export const supabase = createClient(env.DATABASE, env.DATABASE_KEY);
