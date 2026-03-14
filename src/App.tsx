import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { OverviewPage } from '@/pages/OverviewPage';
import { LiveMonitoringPage } from '@/pages/LiveMonitoringPage';
import { AlertsPage } from '@/pages/AlertsPage';
import { IncidentsPage } from '@/pages/IncidentsPage';
import { AnalyticsPage } from '@/pages/AnalyticsPage';
import { FacilitiesPage } from '@/pages/FacilitiesPage';
import { CamerasPage } from '@/pages/CamerasPage';
import { RulesZonesPage } from '@/pages/RulesZonesPage';
import { ReportsPage } from '@/pages/ReportsPage';
import { AdminPage } from '@/pages/AdminPage';
import type { ReactNode } from 'react';

const wrap = (node: ReactNode) => node;

export function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={wrap(<OverviewPage />)} />
        <Route path="/live" element={wrap(<LiveMonitoringPage />)} />
        <Route path="/alerts" element={wrap(<AlertsPage />)} />
        <Route path="/incidents" element={wrap(<IncidentsPage />)} />
        <Route path="/analytics" element={wrap(<AnalyticsPage />)} />
        <Route path="/facilities" element={wrap(<FacilitiesPage />)} />
        <Route path="/cameras" element={wrap(<CamerasPage />)} />
        <Route path="/rules-zones" element={wrap(<RulesZonesPage />)} />
        <Route path="/reports" element={wrap(<ReportsPage />)} />
        <Route path="/admin" element={wrap(<AdminPage />)} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
