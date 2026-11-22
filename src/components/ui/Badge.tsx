import React from 'react';

type BadgeVariant = 'violet' | 'emerald' | 'amber' | 'rose' | 'neutral';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  violet: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
  amber: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/25',
  neutral: 'bg-white/[0.04] text-slate-300 border-white/10',
};

const dotClasses: Record<BadgeVariant, string> = {
  violet: 'bg-violet-400',
  emerald: 'bg-emerald-400',
  amber: 'bg-amber-400',
  rose: 'bg-rose-400',
  neutral: 'bg-slate-400',
};

export function Badge({ children, variant = 'violet', dot = false, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${variantClasses[variant]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotClasses[variant]}`} />}
      {children}
    </span>
  );
}
