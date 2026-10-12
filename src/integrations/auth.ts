import { supabase } from './supabase/client';

type SignInOptions = {
  redirect_uri?: string;
};

export const auth = {
  signInWithOAuth: async (provider: 'google', options?: SignInOptions) => {
    const result = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: options?.redirect_uri },
    });

    if (result.error) return { error: result.error, redirected: false };
    if (result.data.url) {
      window.location.assign(result.data.url);
      return { error: null, redirected: true };
    }
    return { error: null, redirected: false };
  },
};