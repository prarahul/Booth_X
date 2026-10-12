import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, ConsultationBanner } from '@/components/booth/shared';
import { DataGridContent } from '@/components/booth/platform';
export const Route=createFileRoute('/datagrid')({head:()=>({meta:[{title:'Booth X DataGrid — Booth X'},{name:'description',content:'Turn electoral documents into clean, searchable and structured information.'},{property:'og:title',content:'Booth X DataGrid — Booth X'},{property:'og:description',content:'Turn electoral documents into clean, searchable and structured information.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:Page});
function Page(){return <><div className="container-inner"><PageIntro label="Booth X DataGrid" title="Less paperwork. More intelligence." description="Turn electoral documents into clean, searchable and structured information."/></div><DataGridContent/><ConsultationBanner/></>}
