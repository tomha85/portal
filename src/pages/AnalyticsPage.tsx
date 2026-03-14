import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { OverviewCharts } from '@/components/charts/OverviewCharts';
import { Button } from '@/components/ui/button';

export function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2"><Button>Export CSV</Button><Button>Export PDF</Button></div>
      <Tabs defaultValue="ppe"><TabsList><TabsTrigger value="ppe">PPE Compliance</TabsTrigger><TabsTrigger value="area">Area Controls</TabsTrigger><TabsTrigger value="vehicle">Vehicle Safety</TabsTrigger><TabsTrigger value="machine">Machine Safety</TabsTrigger><TabsTrigger value="ops">Alert Operations</TabsTrigger></TabsList>
        <TabsContent value="ppe"><OverviewCharts /></TabsContent>
        <TabsContent value="area"><OverviewCharts /></TabsContent>
        <TabsContent value="vehicle"><OverviewCharts /></TabsContent>
        <TabsContent value="machine"><OverviewCharts /></TabsContent>
        <TabsContent value="ops"><OverviewCharts /></TabsContent>
      </Tabs>
    </div>
  );
}
