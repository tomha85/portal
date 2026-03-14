import { alerts } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const sevColor = { critical: 'bg-rose-500/20 text-rose-300', high: 'bg-orange-500/20 text-orange-300', medium: 'bg-yellow-500/20 text-yellow-200', low: 'bg-sky-500/20 text-sky-300' };

export function AlertsPage() {
  return <div className="space-y-4"><div className="flex gap-2"><Button>Acknowledge</Button><Button>Assign</Button><Button>Resolve</Button><Button>False Positive</Button></div><div className="grid grid-cols-1 gap-4 xl:grid-cols-2">{alerts.map(a => <Card key={a.id}><CardHeader><CardTitle>{a.title}</CardTitle></CardHeader><CardContent className="space-y-2"><div className="h-36 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900" /><div className="flex flex-wrap gap-2"><Badge className={sevColor[a.severity]}>{a.severity}</Badge>{a.tags.map(t => <Badge key={t} className="bg-blue-500/15 text-blue-200">{t}</Badge>)}</div><p className="text-xs text-slate-400">{a.site} · {a.facility} · {a.camera}</p><p className="text-xs text-slate-400">Rule: {a.rule} · Assigned: {a.assignee} · Confidence {(a.confidence*100).toFixed(1)}%</p></CardContent></Card>)}</div></div>;
}
