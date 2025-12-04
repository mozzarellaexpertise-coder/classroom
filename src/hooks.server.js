import { createServerClient } from '@supabase/ssr';
import { env } from '$env/dynamic/private';

export const handle = async ({ event, resolve }) => {
  const supabaseUrl = env.SUPABASE_URL;
  const supabaseKey = env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase environment variables are missing!');
  }

  event.locals.supabase = createServerClient(supabaseUrl, supabaseKey, {
cookies: {
  get: (name) => event.cookies.get(name),
  set: (name, value, options = {}) =>
    event.cookies.set(name, value, { path: '/', ...options }),
  remove: (name, options = {}) =>
    event.cookies.delete(name, { path: '/', ...options })
}
  });

  return resolve(event);
};