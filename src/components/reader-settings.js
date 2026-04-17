'use client';

import { Settings2 } from 'lucide-react';
import { useState } from 'react';

export default function ReaderSettings({ settings, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-4 z-40 rounded-full bg-brand-green p-3 text-deep-slate shadow-lg"
      >
        <Settings2 className="h-5 w-5" />
      </button>
      {open && (
        <div className="fixed bottom-40 right-4 z-40 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
          <p className="mb-3 font-semibold">Reader Settings</p>
          <label className="mb-2 block text-sm">Font Size: {settings.fontSize}px</label>
          <input
            type="range"
            min="12"
            max="24"
            value={settings.fontSize}
            className="w-full"
            onChange={(e) => onChange({ ...settings, fontSize: Number(e.target.value) })}
          />
          <label className="mt-3 block text-sm">Background</label>
          <div className="mt-2 flex gap-2">
            {['white', 'cream-paper', 'deep-slate'].map((bg) => (
              <button
                key={bg}
                onClick={() => onChange({ ...settings, background: bg })}
                className="rounded border px-2 py-1 text-xs"
              >
                {bg}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
