import Link from 'next/link';

export default function BottomNav() {
  return (
    <div className="fixed bottom-3 left-1/2 z-40 w-[min(500px,95%)] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-2 shadow-lg backdrop-blur md:hidden">
      <div className="flex items-center justify-around text-sm">
        <Link href="/">Home</Link>
        <Link href="/genre">Genre</Link>
        <Link href="/library">Library</Link>
      </div>
    </div>
  );
}
