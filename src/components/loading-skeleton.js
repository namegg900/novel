export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 w-1/2 rounded bg-slate-200" />
      <div className="h-64 rounded-2xl bg-slate-200" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-xl bg-slate-200" />
        ))}
      </div>
    </div>
  );
}
