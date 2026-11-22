import React from 'react';
export function EmptyState({ title, description }: any) {
  return (
    <div className="card-premium rounded-2xl p-10 text-center space-y-3">
      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mx-auto text-slate-400">∅</div>
      <div><h3 className="text-sm font-bold text-white">{title}</h3><p className="text-xs text-slate-400 mt-1">{description}</p></div>
    </div>
  );
}
export function LoadingSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-16 rounded-2xl bg-white/5 border border-white/5" />
      ))}
    </div>
  );
}
