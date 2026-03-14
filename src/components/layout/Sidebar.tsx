import { NavLink } from 'react-router-dom';
import { Activity, AlertTriangle, BarChart3, Building2, Camera, Cog, FileText, Gauge, Radar, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BrandLogo } from '@/components/brand/BrandLogo';

const items = [
  { to: '/', label: 'Overview', icon: Gauge },
  { to: '/live', label: 'Live Monitoring', icon: Activity },
  { to: '/alerts', label: 'Alerts', icon: AlertTriangle },
  { to: '/incidents', label: 'Incidents', icon: ShieldAlert },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/facilities', label: 'Facilities', icon: Building2 },
  { to: '/cameras', label: 'Cameras', icon: Camera },
  { to: '/rules-zones', label: 'Rules & Zones', icon: Radar },
  { to: '/reports', label: 'Reports', icon: FileText },
  { to: '/admin', label: 'Admin / Settings', icon: Cog }
];

export function Sidebar() {
  return (
    <aside className="flex w-64 flex-col border-r border-border bg-[#070f1f] px-4 pb-4 pt-3">
      <div className="mb-4 border-b border-slate-800/90 pb-4">
        <BrandLogo className="items-start" />
      </div>

      <nav className="space-y-1">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => cn('flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-accent hover:text-white', isActive && 'bg-accent text-white')}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
