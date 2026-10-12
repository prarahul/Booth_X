import { createFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageIntro } from '@/components/booth/shared';
export const Route=createFileRoute('/reset-password')({head:()=>({meta:[{title:'Reset Password — Booth X'},{name:'description',content:'Set a new password for your Booth X partner account.'},{property:'og:title',content:'Reset your Booth X password'},{property:'og:description',content:'Recover access to your partner account.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:Reset});
function Reset(){const [message,setMessage]=useState('');return <div className="container-inner narrow-page"><PageIntro label="PARTNER ACCESS" title="Set a new password." description="Open the link from your reset email to update your password."/><form onSubmit={async e=>{e.preventDefault();const f=new FormData(e.currentTarget);const {error}=await supabase.auth.updateUser({password:String(f.get('password'))});setMessage(error?error.message:'Password updated. You can now sign in.')}}><label>New password<Input name="password" type="password" minLength={8} maxLength={128} required/></label><Button type="submit">Update password</Button><p role="status">{message}</p><Link to="/auth">Back to sign in</Link></form></div>}
