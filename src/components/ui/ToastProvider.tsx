'use client';
import React, { createContext, useCallback, useContext, useState } from 'react';
const ToastContext = createContext<any>(null);
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<any[]>([]);
  const showToast = useCallback((msg: string) => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 4000);
  }, []);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
        {toasts.map(t => (
          <div key={t.id} className="editorial-card px-5 py-3.5 rounded-[12px] text-xs font-semibold text-white shadow-2xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#7A00FF] animate-pulse" />
            {t.msg}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
export const useToast = () => useContext(ToastContext);
