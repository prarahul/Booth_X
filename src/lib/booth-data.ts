import { z } from 'zod';
export const consultationSchema = z.object({ name: z.string().trim().min(1).max(100), email: z.string().trim().email().max(255), phone: z.string().trim().regex(/^[+\d\s()-]{7,20}$/), constituency: z.string().trim().min(1).max(150), service: z.string().max(100), message: z.string().trim().max(2000), consent: z.literal(true) });
export const voters = [
{ booth:104, section:3, name:'Sample Voter A', age:41, gender:'F', leaning:'Unrecorded' },{ booth:104, section:3, name:'Sample Voter B', age:38, gender:'M', leaning:'Unrecorded' },{ booth:104, section:4, name:'Sample Voter C', age:27, gender:'F', leaning:'Unrecorded' },{ booth:105, section:1, name:'Sample Voter D', age:55, gender:'M', leaning:'Unrecorded' },{ booth:105, section:1, name:'Sample Voter E', age:33, gender:'F', leaning:'Unrecorded' },{ booth:106, section:2, name:'Sample Voter F', age:62, gender:'F', leaning:'Unrecorded' },{ booth:107, section:2, name:'Sample Voter G', age:24, gender:'M', leaning:'Unrecorded' },{ booth:108, section:1, name:'Sample Voter H', age:46, gender:'F', leaning:'Unrecorded' }];
export function filterVoters(query:string, booth:string, gender:string) { return voters.filter(v => `${v.name} ${v.booth} ${v.section}`.toLowerCase().includes(query.toLowerCase()) && (booth==='All booths' || String(v.booth)===booth) && (gender==='All genders' || v.gender===gender)); }
export const services = [
['Research & Survey','Voters, communities, issues and the complete ground picture.','Search'],
['Ground Campaign & Mobilization','Booth committees, Panna Pramukhs, yatras and public events.','Users'],
['Digital & Social Media','One clear narrative. Every digital touchpoint.','MessageCircle'],
['Creative & Video Production','Documentaries, campaign films and AI-assisted production.','Video'],
['Voter & Electoral Data Analysis','Electoral rolls, historical trends and constituency insights.','ChartNoAxesCombined'],
['Booth X Intelligence','Your live war room and mobile AI strategist.','Cpu'],
['Booth X DataGrid','Raw PDF rolls become structured, searchable intelligence.','Table2'],
['Events & Outreach','Community programs, planned and executed end to end.','CalendarDays'],
['Mass Communication','WhatsApp, personalized media and on-ground LED vans.','Megaphone']];
export const questions = [
['BOOTH SNAPSHOT','Give me a quick snapshot of Booth 104.','Booth 104 has 1,099 registered electors. 94 field entries have been filed today. The last update was 2 minutes ago. 3 field reports need verification.'],
['CONSTITUENCY VIEW','Which booths need field verification this week?','13 booths have incomplete field reports. Booths 102, 105 and 108 have the oldest updates. Assign verification tasks and confirm source documents before using these records.'],
['GROUND OPERATIONS','How is our booth committee coverage?','Committee coverage is 86% across 128 booths. 18 booths still need a designated coordinator. Review the ward-wise task list and outstanding assignments.'],
['ASK IN HINDI','बूथ 102 की फील्ड रिपोर्ट का अपडेट क्या है?','बूथ 102 की अंतिम फील्ड रिपोर्ट कल दर्ज हुई थी। 8 रिपोर्ट सत्यापन के लिए लंबित हैं। नया अपडेट प्राप्त करने के लिए फील्ड कोऑर्डिनेटर से संपर्क करें।'],
['DATA QUALITY','Are our electoral records up to date?','The sample dataset contains 2,48,315 records. 97.2% passed format checks. 312 potential duplicates are flagged for manual review. Always reconcile against the latest official roll.']];
