import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ConsultationBanner } from '@/components/booth/shared';
import { ServicesContent } from '@/components/booth/content';
export const Route=createFileRoute('/services')({head:()=>({meta:[{title:'Our Services — Booth X'},{name:'description',content:'Nine integrated capabilities, from the first field survey to the final ground report.'},{property:'og:title',content:'Our Services — Booth X'},{property:'og:description',content:'Nine integrated capabilities, from the first field survey to the final ground report.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Page});
function Page(){return <><div className="container-inner"><PageIntro label="Our Services" title="Every front. One connected campaign." description="Nine integrated capabilities, from the first field survey to the final ground report."/></div><ServicesContent/><ConsultationBanner/></>}
