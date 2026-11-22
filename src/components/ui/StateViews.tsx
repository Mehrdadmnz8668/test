import React from 'react';
import { AlertCircle, Inbox, RefreshCw } from 'lucide-react';
import { Button } from './Button';

export function LoadingSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3 animate-pulse" aria-label="در حال بارگذاری">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="h-16 rounded-2xl bg-[#151124] border border-violet-500/10 flex items-center justify-between px-5"
        >
          <div className="space-y-2 w-1/2">
            <div className="h-3.5 bg-white/10 rounded w-2/3" />
            <div className="h-2.5 bg-white/5 rounded w-1/3" />
          </div>
          <div className="h-7 w-20 bg-white/10 rounded-lg" />
        </div>
      ))}
    </div>
  );
}

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="rounded-2xl bg-[#0F0D18] border border-violet-500/15 p-10 text-center space-y-4">
      <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto text-violet-400">
        <Inbox className="w-6 h-6" />
      </div>
      <div className="space-y-1.5 max-w-md mx-auto">
        <h3 className="text-base font-bold text-white">{title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{description}</p>
      </div>
      {actionLabel && onAction && (
        <div className="pt-1">
          <Button variant="secondary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  description: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = 'خطا در نمایش اطلاعات',
  description,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-2xl bg-rose-950/15 border border-rose-500/25 p-8 text-center space-y-4">
      <div className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
        <AlertCircle className="w-5 h-5" />
      </div>
      <div className="space-y-1 max-w-md mx-auto">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="text-xs text-slate-300/80 leading-relaxed">{description}</p>
      </div>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          <RefreshCw className="w-3.5 h-3.5" />
          تلاش مجدد
        </Button>
      )}
    </div>
  );
}
