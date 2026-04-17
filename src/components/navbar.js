import Link from 'next/link';
import { BookOpenText } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 flex w-[min(1120px,95%)] items-center justify-between rounded-2xl border border-white/30 bg-white/55 px-4 py-3 shadow-glass backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpenText className="h-5 w-5 text-brand-green" />
          <span>Novel Reader</span>
        </Link>
        <div className="hidden items-center gap-5 text-sm md:flex">
          <Link href="/genre">Genre</Link>
          <Link href="/library">Library</Link>
        </div>
      </nav>
    </header>
  );
}
