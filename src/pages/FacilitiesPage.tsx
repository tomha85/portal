import { facilities } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function FacilitiesPage() {
  return <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">{facilities.map((f) => <Card key={f.id}><CardHeader><CardTitle>{f.name}</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>{f.type} · {f.location}</p><p>Cameras: {f.cameras} · Active alerts: {f.activeAlerts}</p><p>Compliance score: {f.complianceScore}%</p><div className="h-32 rounded-xl bg-gradient-to-br from-cyan-900/30 to-slate-900 p-2 text-xs text-slate-400">Floorplan canvas with zone polygons, camera points, and heat overlays</div></CardContent></Card>)}</div>;
}
