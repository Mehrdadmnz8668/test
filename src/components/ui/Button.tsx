import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-violet-600 hover:bg-violet-500 text-white border border-violet-400/30 shadow-lg shadow-violet-950/50',
  secondary:
    'bg-[#1B1430] hover:bg-[#241B40] text-slate-100 border border-violet-500/25',
  outline:
    'bg-transparent hover:bg-white/[0.04] text-slate-200 border border-white/10 hover:border-violet-500/40',
  ghost:
    'bg-transparent hover:bg-white/[0.05] text-slate-300 hover:text-white border border-transparent',
  danger:
    'bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-2 text-xs rounded-xl',
  md: 'px-5 py-2.5 text-xs sm:text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-sm rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${
        variants[variant]
      } ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
