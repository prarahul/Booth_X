import { createServerFn } from '@tanstack/react-start';
import { createClient } from '@supabase/supabase-js';
import { consultationSchema } from './booth-data';
export const submitConsultation = createServerFn({method:'POST'}).inputValidator((input:unknown)=>consultationSchema.parse(input)).handler(async({data})=>{
 const key=process.env['SUPABASE_PUBLISHABLE_KEY']; const url=process.env['SUPABASE_URL'];
 if(!key || !url) throw new Error('Consultation service is not configured. Please try again later.');
 const client=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false},global:{fetch:(input,init)=>{const headers=new Headers(init?.headers); if(key.startsWith('sb_')) headers.delete('Authorization'); headers.set('apikey',key); return fetch(input,{...init,headers});}}});
 const {error}=await client.from('consultation_requests').insert(data); if(error) throw new Error('Your request could not be saved. Please try again.'); return {success:true};
});
