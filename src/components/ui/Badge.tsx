import React from 'react';
export function Badge({ children, variant = 'violet', dot = false, className = '' }: { children: React.ReactNode; variant?: 'violet'|'emerald'|'amber'|'rose'|'neutral'; dot?: boolean; className?: string; }) {
  const vars = {
    violet: 'bg-violet-900/20 text-violet-300 border-violet-500/20',
    emerald: 'bg-emerald-900/20 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-900/20 text-amber-300 border-amber-500/20',
    rose: 'bg-rose-900/20 text-rose-400 border-rose-500/20',
    neutral: 'bg-white/5 text-slate-300 border-white/10',
  };
  const dots = { violet: 'bg-violet-400', emerald: 'bg-emerald-400', amber: 'bg-amber-400', rose: 'bg-rose-400', neutral: 'bg-slate-400' };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-medium border ${vars[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dots[variant]}`} />}
      {children}
    </span>
  );
}
