import { Camera } from '@/types/domain';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const statusStyles = { live: 'bg-emerald-500/20 text-emerald-300', delayed: 'bg-amber-500/20 text-amber-300', offline: 'bg-rose-500/20 text-rose-300' };

export function CameraTile({ camera }: { camera: Camera }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative h-40 bg-gradient-to-br from-[#203453] to-[#0d1727]">
        <div className="absolute inset-4 rounded-xl border border-cyan-300/40 bg-cyan-400/10" />
        <div className="absolute left-7 top-8 h-14 w-14 rounded-full border-2 border-lime-300/80" />
        <div className="absolute left-10 top-12 h-1 w-10 rotate-45 bg-lime-300/90" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120"><polygon points="20,100 160,92 180,50 50,60" fill="rgba(239,68,68,0.22)" stroke="rgba(248,113,113,0.8)" /></svg>
        {camera.risk && <div className="absolute bottom-0 left-0 right-0 bg-rose-500/80 px-2 py-1 text-xs font-medium">Risk detected: {camera.risk}</div>}
      </div>
      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between"><p className="text-sm font-semibold">{camera.name}</p><Badge className={cn(statusStyles[camera.status])}>{camera.status}</Badge></div>
        <p className="text-xs text-slate-400">{camera.zone} · {camera.latencyMs}ms · {camera.fps}fps</p>
        <div className="flex flex-wrap gap-1">{camera.detections.map((d) => <Badge key={d} className="bg-blue-500/15 text-blue-200">{d}</Badge>)}</div>
      </div>
    </Card>
  );
}
