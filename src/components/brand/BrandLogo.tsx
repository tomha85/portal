import { cn } from '@/lib/utils';

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative h-11 w-11 shrink-0 rounded-xl border border-emerald-300/35 bg-gradient-to-br from-slate-900 via-[#102338] to-[#0f2f2b] p-1.5 shadow-lg shadow-emerald-900/20">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="triangleFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f9f6c9" />
              <stop offset="100%" stopColor="#d7efad" />
            </linearGradient>
            <linearGradient id="letterBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          <polygon points="50,8 92,86 8,86" fill="url(#triangleFill)" stroke="#9ca3af" strokeWidth="2.5" />
          <text x="50" y="62" textAnchor="middle" fontSize="44" fontWeight="700" fill="url(#letterBlue)">
            A
          </text>
          <text x="31" y="57" textAnchor="middle" fontSize="30" fontWeight="700" fill="#eab308">
            C
          </text>
          <text x="69" y="57" textAnchor="middle" fontSize="30" fontWeight="700" fill="#22c55e">
            S
          </text>
        </svg>
      </div>

      {!compact && (
        <div className="min-w-0">
          <p className="truncate text-xs uppercase tracking-[0.16em] text-cyan-200/80">Vietpro Tech</p>
          <p className="truncate text-sm font-semibold text-white">Suprema Safety Command</p>
          <p className="truncate text-[11px] text-slate-400">Enterprise PPE &amp; Industrial Risk Intelligence</p>
        </div>
      )}
    </div>
  );
}
