import { describe,it,expect } from 'vitest';
import { consultationSchema, filterVoters } from '@/lib/booth-data';
describe('Booth X data rules',()=>{
 it('filters sample records to booth 104',()=>{expect(filterVoters('', '104','All genders').map(v=>v.booth)).toEqual([104,104,104])});
 it('filters female records',()=>{expect(filterVoters('','104','F').map(v=>v.name)).toEqual(['Sample Voter A','Sample Voter C'])});
 it('searches the complete sample dataset',()=>{expect(filterVoters('Sample Voter H','All booths','All genders')).toHaveLength(1)});
 it('requires consent for a consultation request',()=>{expect(consultationSchema.safeParse({name:'Test',email:'test@example.com',phone:'+919876543210',constituency:'Test constituency',service:'Research',message:'',consent:false}).success).toBe(false)});
});
