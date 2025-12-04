// src/app.d.ts
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './lib/database.types'; // optional, your DB types

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>; // your supabase client type
    }
  }
}