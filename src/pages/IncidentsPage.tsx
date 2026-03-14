import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function IncidentsPage() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr]">
      <Card><CardHeader><CardTitle>Incident Evidence Viewer</CardTitle></CardHeader><CardContent><div className="h-80 rounded-2xl bg-gradient-to-br from-[#152842] to-[#0a1425]" /><div className="mt-4 grid grid-cols-6 gap-2">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-16 rounded-lg bg-muted" />)}</div></CardContent></Card>
      <div className="space-y-4">
        <Card><CardHeader><CardTitle>AI Explanation</CardTitle></CardHeader><CardContent className="text-sm text-slate-300"><ul className="list-disc space-y-2 pl-4"><li>Triggered by person entering machine danger zone for 12s.</li><li>PPE status: helmet detected, gloves missing.</li><li>Zone overlap confidence: 96%.</li><li>Model confidence by component: person 98%, zone 94%, behavior 91%.</li></ul></CardContent></Card>
        <Card><CardHeader><CardTitle>Corrective Action & Audit Trail</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>Assigned supervisor: Dana Kim</p><p>Action: toolbox talk and shift briefing update.</p><p>Recurrence: 3 similar events in 14 days.</p></CardContent></Card>
      </div>
    </div>
  );
}
