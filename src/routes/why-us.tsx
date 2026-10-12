import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ConsultationBanner } from '@/components/booth/shared';
import { WhyContent } from '@/components/booth/content';
export const Route=createFileRoute('/why-us')({head:()=>({meta:[{title:'Why Booth X — Booth X'},{name:'description',content:'Connected capabilities. Clear accountability. A team committed to your campaign.'},{property:'og:title',content:'Why Booth X — Booth X'},{property:'og:description',content:'Connected capabilities. Clear accountability. A team committed to your campaign.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Page});
function Page(){return <><div className="container-inner"><PageIntro label="Why Booth X" title="The ground is our starting point." description="Connected capabilities. Clear accountability. A team committed to your campaign."/></div><WhyContent/><ConsultationBanner/></>}
