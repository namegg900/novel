import { Sparkles } from 'lucide-react';

export default function GenreCard({ genre }) {
  return (
    <button className="group rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-brand-green hover:bg-brand-green/5">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-brand-green/15 p-2 text-brand-green transition group-hover:scale-110">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <p className="font-medium">{genre}</p>
          <p className="text-xs text-slate-500">Explore stories</p>
        </div>
      </div>
    </button>
  );
}
