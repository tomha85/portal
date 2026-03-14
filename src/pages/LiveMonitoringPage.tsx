import { useState } from 'react';
import { cameras, alerts } from '@/data/mockData';
import { CameraTile } from '@/components/monitoring/CameraTile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function LiveMonitoringPage() {
  const [layout, setLayout] = useState(9);
  const visible = cameras.slice(0, layout);
  const colClass = layout <= 4 ? 'xl:grid-cols-2' : layout <= 9 ? 'xl:grid-cols-3' : layout <= 16 ? 'xl:grid-cols-4' : 'xl:grid-cols-5';

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_320px]">
      <div className="space-y-4">
        <div className="flex items-center gap-2">{[4, 9, 16, 25].map((n) => <Button key={n} onClick={() => setLayout(n)} className={layout === n ? 'bg-primary' : ''}>{n}</Button>)}</div>
        <div className={`grid grid-cols-1 gap-4 ${colClass}`}>{visible.map((camera) => <CameraTile key={camera.id} camera={camera} />)}</div>
      </div>
      <Card>
        <CardHeader><CardTitle>Live Alert Drawer</CardTitle></CardHeader>
        <CardContent className="space-y-2">{alerts.map((a) => <div key={a.id} className="rounded-xl border border-border p-3"><p className="text-sm">{a.title}</p><p className="text-xs text-slate-400">{a.camera} · {a.severity}</p></div>)}</CardContent>
      </Card>
    </div>
  );
}
