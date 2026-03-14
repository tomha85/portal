import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const zones = ['PPE-required zone', 'Restricted area', 'Vehicle shared zone', 'Machine danger zone', 'Conveyor hazard zone', 'Suspended load zone'];

export function RulesZonesPage() {
  return <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_1fr]"><Card><CardHeader><CardTitle>Visual Zone Editor</CardTitle></CardHeader><CardContent><div className="h-80 rounded-xl bg-gradient-to-br from-[#13263f] to-[#08111f]" /><p className="mt-3 text-sm text-slate-300">Mock polygon editor with snapping vertices, threshold sliders, time windows, and escalation policy mapping.</p></CardContent></Card><Card><CardHeader><CardTitle>Rule Builder</CardTitle></CardHeader><CardContent className="space-y-2">{zones.map(z => <div key={z} className="rounded-xl border border-border p-3 text-sm">{z}</div>)}<div className="pt-2"><Button>Run Rule Test Preview</Button></div></CardContent></Card></div>;
}
