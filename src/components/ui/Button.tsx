import React from 'react';
export function Button({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...props }: any) {
  const variants = {
    primary: 'bg-violet-600 hover:bg-violet-500 text-white shadow-[0_4px_14px_0_rgba(124,58,237,0.2)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.3)] border border-violet-500/50',
    secondary: 'bg-[#181524] hover:bg-[#201C30] text-slate-200 border border-white/10 hover:border-violet-500/30',
    outline: 'bg-transparent hover:bg-white/5 text-slate-300 border border-white/10',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-300 border border-transparent',
    danger: 'bg-rose-900/30 hover:bg-rose-900/50 text-rose-300 border border-rose-500/30',
  };
  const sizes = { sm: 'px-3 py-1.5 text-xs rounded-lg', md: 'px-5 py-2.5 text-sm rounded-xl', lg: 'px-8 py-3.5 text-sm rounded-xl' };
  return (
    <button className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 cursor-pointer ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]} ${fullWidth ? 'w-full' : ''} ${className}`} {...props}>
      {children}
    </button>
  );
}
