import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { auth } from '@/integrations/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brand, Eyebrow } from '@/components/booth/shared';
import { ShieldCheck, ArrowRight, LogOut } from 'lucide-react';

export const Route = createFileRoute('/auth')({
  head: () => ({ meta: [{ title: 'Partner Access — Booth X' }, { name: 'description', content: 'Secure partner sign-in for the Booth X campaign ecosystem.' }], }),
  component: Auth,
});

function Auth() {
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>('signin');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => { supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null)); }, []);

  return <div className="auth-page"><div className="auth-message"><Eyebrow>BOOTH X PARTNER NETWORK</Eyebrow><h1>The ground.<br />The data.<br /><span className="text-primary">Your advantage.</span></h1><p>One connected campaign ecosystem.<br />A confidential space for your next move.</p></div><div className="auth-panel"><Brand />{email ? <><h2>You’re connected.</h2><p>{email}</p><div className="partner-empty"><ShieldCheck /><h3>Partner workspace</h3><p>No campaign is assigned to your account yet. Your Booth X team will arrange campaign access after onboarding.</p></div><Button onClick={async () => { await supabase.auth.signOut(); setEmail(null); }} variant="outline"><LogOut /> Sign out</Button></> : <><h2>{mode === 'signin' ? 'Welcome back.' : mode === 'signup' ? 'Join the partner network.' : 'Reset your password.'}</h2><p>{mode === 'signin' ? 'Sign in to your Booth X partner account.' : mode === 'signup' ? 'Create an account to begin partner onboarding.' : 'We’ll email you a password reset link.'}</p>{mode !== 'reset' && <><Button className="google-button" variant="outline" onClick={async () => { setBusy(true); const result = await auth.signInWithOAuth('google', { redirect_uri: `${window.location.origin}/auth` }); if (result.error) setMessage(result.error.message); if (!result.redirected) { const { data } = await supabase.auth.getUser(); setEmail(data.user?.email ?? null); } setBusy(false); }} disabled={busy}><span className="google-letter">G</span> Continue with Google</Button><div className="auth-divider">OR WITH EMAIL</div></>}<form onSubmit={async (event) => { event.preventDefault(); setBusy(true); setMessage(''); const form = new FormData(event.currentTarget); const mail = String(form.get('email')); const password = String(form.get('password') ?? ''); try { if (mode === 'reset') { const { error } = await supabase.auth.resetPasswordForEmail(mail, { redirectTo: `${window.location.origin}/reset-password` }); if (error) throw error; setMessage('Check your email for a password reset link.'); } else if (mode === 'signup') { const { error } = await supabase.auth.signUp({ email: mail, password, options: { emailRedirectTo: `${window.location.origin}/auth` } }); if (error) throw error; setMessage('Check your email to confirm your account before signing in.'); } else { const { data, error } = await supabase.auth.signInWithPassword({ email: mail, password }); if (error) throw error; setEmail(data.user?.email ?? null); } } catch (error) { setMessage(error instanceof Error ? error.message : 'Unable to continue. Please try again.'); } finally { setBusy(false); } }}><label>Email address<Input name="email" type="email" required maxLength={255} placeholder="you@organization.com" /></label>{mode !== 'reset' && <label>Password<Input name="password" type="password" required minLength={8} maxLength={128} placeholder="Enter your password" /></label>}{mode === 'signin' && <Button type="button" variant="link" className="forgot-password" onClick={() => { setMode('reset'); setMessage(''); }}>Forgot password?</Button>}{message && <p role="status" className="auth-feedback">{message}</p>}<Button type="submit" className="w-full" disabled={busy}>{busy ? 'Please wait…' : mode === 'signin' ? 'Sign in' : mode === 'signup' ? 'Create account' : 'Send reset link'}<ArrowRight /></Button></form><Button variant="link" className="auth-switch" onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setMessage(''); }}>{mode === 'signin' ? 'New partner? Create an account' : 'Back to sign in'}</Button><div className="auth-security"><ShieldCheck size={14} /> Secure access. Confidential by commitment.</div></>}</div></div>;
}
