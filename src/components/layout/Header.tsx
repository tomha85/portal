import { Bell, CalendarRange, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-2 border-b border-border bg-background/80 px-6 backdrop-blur">
      <div className="relative w-80">
        <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <Input placeholder="Search camera, incident, rule, person" className="pl-9" />
      </div>
      <Button><Filter className="mr-2 inline h-4 w-4" />Global Filters</Button>
      <Button><CalendarRange className="mr-2 inline h-4 w-4" />Last 7 days</Button>
      <div className="ml-auto flex items-center gap-2">
        <Button className="px-2"><Bell className="h-4 w-4" /></Button>
        <div className="rounded-xl border border-border bg-muted px-3 py-1.5 text-sm">EHS Director</div>
      </div>
    </header>
  );
}
