import { cameras } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function CamerasPage() {
  return <Card><CardHeader><CardTitle>Camera Inventory</CardTitle></CardHeader><CardContent><table className="w-full text-sm"><thead className="text-left text-slate-400"><tr><th>Name</th><th>Zone</th><th>Status</th><th>FPS</th><th>Latency</th><th>Model Pack</th><th>Calibration</th></tr></thead><tbody>{cameras.map(c => <tr key={c.id} className="border-t border-border"><td className="py-2">{c.name}</td><td>{c.zone}</td><td>{c.status}</td><td>{c.fps}</td><td>{c.latencyMs}ms</td><td>{c.modelPack}</td><td>{c.calibration}</td></tr>)}</tbody></table></CardContent></Card>;
}
