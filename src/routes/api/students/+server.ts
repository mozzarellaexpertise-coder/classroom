import type { RequestHandler } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const GET: RequestHandler = async () => {
  try {
    const { data, error } = await supabase.from('student').select('*');

    if (error) {
      console.error('Supabase fetch error:', error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ error: 'Unexpected error' }), { status: 500 });
  }
};