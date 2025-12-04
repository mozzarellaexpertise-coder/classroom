import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function GET() {
    console.log("URL:", SUPABASE_URL);
    console.log("KEY:", SUPABASE_ANON_KEY.slice(0, 10));

    const { data, error } = await supabase
        .from('student')
        .select('*');

    if (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ students: data }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}