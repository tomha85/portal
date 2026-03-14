import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ReportsPage() {
  return <div className="grid grid-cols-1 gap-4 xl:grid-cols-2"><Card><CardHeader><CardTitle>Scheduled Reports</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>Daily PPE Compliance - 06:00 local</p><p>Weekly Site Safety Summary - Mondays</p><p>Monthly Executive Report - 1st of month</p><p>Recurring High-risk Area Report - every 4 hours</p></CardContent></Card><Card><CardHeader><CardTitle>Templates & Download History</CardTitle></CardHeader><CardContent className="space-y-2 text-sm"><p>One-click exports for EHS audits, regulator inspections, and management reviews.</p><p>Recent download: weekly-summary-2026-03-14.pdf</p><p>Email recipients: ehs-leads@company.com, plant-managers@company.com</p></CardContent></Card></div>;
}
