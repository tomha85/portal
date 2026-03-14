import { NavLink } from 'react-router-dom';
import { Activity, AlertTriangle, BarChart3, Building2, Camera, Cog, FileText, Gauge, Radar, ShieldAlert } from 'lucide-react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { cn } from '@/lib/utils';

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
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r border-border bg-[#070f1f]">
      <div className="px-4 pb-3 pt-4">
        <BrandLogo className="justify-start" />
      </div>

      <nav className="flex-1 space-y-1 border-t border-border/70 px-4 py-4">
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
