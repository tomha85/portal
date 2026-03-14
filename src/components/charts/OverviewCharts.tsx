import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { complianceTrend, severityBreakdown } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const colors = ['#ef4444', '#fb923c', '#facc15', '#38bdf8'];

export function OverviewCharts() {
  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <Card className="xl:col-span-2">
        <CardHeader><CardTitle>Compliance Trend</CardTitle></CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={complianceTrend}><CartesianGrid stroke="#1f2d45" /><XAxis dataKey="day" /><YAxis /><Tooltip />
              <Line dataKey="target" stroke="#64748b" strokeDasharray="4 4" />
              <Line dataKey="compliance" stroke="#22d3ee" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Alerts by Severity</CardTitle></CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart><Pie data={severityBreakdown} dataKey="value" innerRadius={55} outerRadius={90}>{severityBreakdown.map((_, i) => <Cell key={i} fill={colors[i]} />)}</Pie></PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="xl:col-span-3">
        <CardHeader><CardTitle>Incidents by Category</CardTitle></CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[{ c: 'No hardhat', count: 28 }, { c: 'No vest', count: 22 }, { c: 'No gloves', count: 17 }, { c: 'Restricted area', count: 19 }, { c: 'Forklift near worker', count: 25 }, { c: 'Conveyor hand contact', count: 13 }]}>
              <CartesianGrid stroke="#1f2d45" /><XAxis dataKey="c" /><YAxis /><Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
