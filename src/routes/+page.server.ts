import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private';

export async function load() {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Fetch all students
    const { data, error } = await supabase
        .from('student')
        .select('*');

    if (error) {
        console.error("Supabase error:", error);
        return { students: [] };
    }

    console.log("Supabase data:", data);

    return {
        students: data ?? []
    };
}