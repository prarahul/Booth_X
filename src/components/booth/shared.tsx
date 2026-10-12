import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Crosshair } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
export function Brand(){return <span className="brand"><Crosshair/><span>BOOTH<span className="text-primary"> X</span></span></span>}
export function Eyebrow({children}:{children:ReactNode}){return <div className="eyebrow"><span/>{children}</div>}
export function PageIntro({label,title,description}:{label:string,title:string,description:string}){return <div className="page-intro"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p>{description}</p></div>}
export function ConsultationBanner(){return <section className="consultation-banner"><div className="container-inner"><div><Eyebrow>THE NEXT MOVE IS YOURS</Eyebrow><h2>Know every booth.<br/><span className="text-primary">Win every booth.</span></h2></div><div><p>Bring your ambition. We’ll bring the ground intelligence.</p><Button asChild size="lg"><Link to="/contact">Book a consultation <ArrowUpRight/></Link></Button></div></div></section>}
export function SampleLabel(){return <span className="sample-label">SAMPLE DATA</span>}
