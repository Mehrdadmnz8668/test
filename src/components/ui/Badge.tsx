import React from 'react';
export function Badge({ children, variant = 'violet', dot = false, className = '' }: { children: React.ReactNode; variant?: 'violet'|'emerald'|'amber'|'rose'|'neutral'; dot?: boolean; className?: string; }) {
  const vars = {
    violet: 'bg-[rgba(122,0,255,0.1)] text-[#B8A5FF] border-[rgba(122,0,255,0.2)]',
    emerald: 'bg-[rgba(16,185,129,0.1)] text-emerald-400 border-[rgba(16,185,129,0.2)]',
    amber: 'bg-[rgba(245,158,11,0.1)] text-amber-400 border-[rgba(245,158,11,0.2)]',
    rose: 'bg-[rgba(244,63,94,0.1)] text-rose-400 border-[rgba(244,63,94,0.2)]',
    neutral: 'bg-white/[0.03] text-slate-300 border-white/[0.08]',
  };
  const dots = { violet: 'bg-[#7A00FF]', emerald: 'bg-emerald-400', amber: 'bg-amber-400', rose: 'bg-rose-400', neutral: 'bg-slate-400' };
  return (
    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] text-[10px] sm:text-xs font-semibold tracking-wide border ${vars[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dots[variant]}`} />}
      {children}
    </span>
  );
}
