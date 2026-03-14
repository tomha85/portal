import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AdminPage() {
  return <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">{['Users and Roles', 'Notification Routing', 'Integrations', 'Retention and Privacy', 'Model Packs by Site', 'Theme Settings'].map((title) => <Card key={title}><CardHeader><CardTitle>{title}</CardTitle></CardHeader><CardContent className="text-sm text-slate-300">Enterprise controls for governance, access policies, external systems, and deployment configuration.</CardContent></Card>)}</div>;
}
