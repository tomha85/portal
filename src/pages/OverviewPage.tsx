import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { kpis, facilities, alerts } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { OverviewCharts } from '@/components/charts/OverviewCharts';

export function OverviewPage() {
  return (
    <div className="space-y-4">
      <section className="grid grid-cols-2 gap-4 xl:grid-cols-6">{kpis.map((k) => <Card key={k.id}><CardContent className="space-y-2 pt-5"><p className="text-xs text-slate-400">{k.label}</p><p className="text-2xl font-semibold">{k.value}</p><p className="flex items-center text-xs text-slate-300">{k.trend === 'up' ? <ArrowUpRight className="mr-1 h-3 w-3 text-emerald-400" /> : <ArrowDownRight className="mr-1 h-3 w-3 text-amber-400" />}{k.delta}</p></CardContent></Card>)}</section>
      <OverviewCharts />
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card><CardHeader><CardTitle>Top Risky Sites</CardTitle></CardHeader><CardContent className="space-y-3">{facilities.map((f) => <div key={f.id} className="flex items-center justify-between rounded-xl bg-muted p-2"><div><p className="text-sm">{f.name}</p><p className="text-xs text-slate-400">{f.activeAlerts} active alerts</p></div><Badge className="bg-rose-500/15 text-rose-300">Score {f.complianceScore}</Badge></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Recent Incidents</CardTitle></CardHeader><CardContent className="space-y-3">{alerts.map((a) => <div key={a.id} className="rounded-xl border border-border p-3"><p className="text-sm font-medium">{a.title}</p><p className="mt-1 text-xs text-slate-400">{a.facility} · {new Date(a.timestamp).toLocaleString()}</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Safety Score by Site</CardTitle></CardHeader><CardContent className="space-y-3">{facilities.map((f) => <div key={f.id}><div className="mb-1 flex justify-between text-xs"><span>{f.name}</span><span>{f.complianceScore}%</span></div><div className="h-2 rounded-full bg-muted"><div className="h-2 rounded-full bg-cyan-400" style={{ width: `${f.complianceScore}%` }} /></div></div>)}</CardContent></Card>
      </section>
    </div>
  );
}
