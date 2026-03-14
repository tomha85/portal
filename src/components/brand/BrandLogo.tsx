import { cn } from '@/lib/utils';

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function BrandLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative h-11 w-11 shrink-0 rounded-xl border border-sky-100/80 bg-gradient-to-br from-[#1f4b82] via-[#2d6db0] to-[#49a5df] p-1.5 shadow-[0_10px_28px_rgba(71,159,224,0.45)] ring-1 ring-cyan-100/60">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="triangleFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffcdd" />
              <stop offset="100%" stopColor="#f4ffd6" />
            </linearGradient>
            <linearGradient id="letterBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b6f0ff" />
              <stop offset="100%" stopColor="#1f6dff" />
            </linearGradient>
          </defs>

          <polygon points="50,8 92,86 8,86" fill="url(#triangleFill)" stroke="#f8fafc" strokeWidth="2.5" />
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
          <p className="truncate text-base font-bold tracking-[0.08em] text-cyan-50">VIETPRO TECH</p>
          <p className="truncate text-[11px] text-slate-300">Industrial Safety Intelligence Platform</p>
        </div>
      )}
    </div>
  );
}
