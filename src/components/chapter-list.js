import Link from 'next/link';

export default function ChapterList({ slug, chapters }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <h3 className="mb-3 font-semibold">Chapters</h3>
      <ul className="space-y-2">
        {chapters.map((chapter, i) => (
          <li key={chapter.id}>
            <Link
              href={`/reader/${chapter.id}`}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-soft-gray"
            >
              <span>{chapter.title}</span>
              <span className="text-xs text-slate-400">#{i + 1}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
