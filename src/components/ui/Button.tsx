import React from 'react';
export function Button({ variant = 'primary', size = 'md', fullWidth = false, className = '', children, ...props }: any) {
  const variants = {
    primary: 'bg-[#7A00FF] hover:bg-[#6800D9] text-white shadow-[0_4px_24px_rgba(122,0,255,0.3)] hover:shadow-[0_4px_32px_rgba(122,0,255,0.5)] border border-[#8F33FF]',
    secondary: 'bg-transparent hover:bg-white/[0.03] text-white border border-white/[0.12] hover:border-white/[0.2]',
    ghost: 'bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-transparent',
    danger: 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20',
  };
  const sizes = { sm: 'px-4 py-2 text-xs rounded-lg', md: 'px-6 py-3 text-sm rounded-[10px]', lg: 'px-8 py-3.5 text-sm rounded-[12px]' };
  return (
    <button className={`inline-flex items-center justify-center gap-2.5 font-bold transition-all duration-300 active:scale-[0.98] disabled:opacity-50 cursor-pointer ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]} ${fullWidth ? 'w-full' : ''} ${className}`} {...props}>
      {children}
    </button>
  );
}
