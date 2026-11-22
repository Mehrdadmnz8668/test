import React from 'react';
export function EmptyState({ title, description }: any) {
  return (
    <div className="editorial-card p-12 text-center space-y-4 rounded-2xl">
      <div className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mx-auto text-slate-500 text-xl font-light">/</div>
      <div><h3 className="text-sm font-bold text-white tracking-wide">{title}</h3><p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">{description}</p></div>
    </div>
  );
}
export function LoadingSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-16 rounded-2xl bg-white/[0.02] border border-white/[0.04]" />
      ))}
    </div>
  );
}
