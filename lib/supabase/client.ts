import { createBrowserClient } from '@supabase/ssr';
import { supabaseCredentials } from './credentials';

export const createSbClient = () =>
  createBrowserClient(supabaseCredentials.url, supabaseCredentials.anonKey);
