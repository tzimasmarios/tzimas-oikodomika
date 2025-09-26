'use client';

import { useEffect, useRef, useState } from 'react';

export default function CallNow({ mobile, tel }: { mobile?: string; tel?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toHref = (num?: string) => {
    if (!num) return '#';
    const digits = String(num).replace(/\D/g, '');
    if (digits.startsWith('30')) return `tel:+${digits}`;
    if (digits.startsWith('0')) return `tel:+30${digits.slice(1)}`;
    if (digits.startsWith('2') || digits.startsWith('6')) return `tel:+30${digits}`;
    return `tel:+${digits}`;
  };

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-white font-medium
                   bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8]
                   shadow-md hover:shadow-lg hover:opacity-95 transition
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                   focus-visible:ring-[#2D6BFF] focus-visible:ring-offset-white"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Καλέστε μας τώρα <span className="text-white/90">▾</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute z-10 mt-2 w-72 right-0 rounded-xl border bg-white shadow-xl p-2"
        >
          {mobile && (
            <a
              href={toHref(mobile)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span className="text-xl">📱</span>
              <div>
                <div className="font-medium">Κλήση στο κινητό</div>
                <div className="text-sm text-slate-600">{mobile}</div>
              </div>
            </a>
          )}
          {tel && (
            <a
              href={toHref(tel)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span className="text-xl">☎️</span>
              <div>
                <div className="font-medium">Κλήση στο σταθερό</div>
                <div className="text-sm text-slate-600">{tel}</div>
              </div>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
