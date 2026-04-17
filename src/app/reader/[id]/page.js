'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchChapterById, fetchNextChapter } from '@/lib/api';
import ReaderSettings from '@/components/reader-settings';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useLocalStorage from '@/hooks/useLocalStorage';

export const dynamic = 'force-dynamic';

export default function ReaderPage({ params }) {
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useLocalStorage('reader-settings', { fontSize: 18, background: 'white' });

  useEffect(() => {
    fetchChapterById(params.id).then((chapter) => setChapters([chapter]));
  }, [params.id]);

  const loadNext = useCallback(async () => {
    if (!chapters.length || isLoading) return;
    setIsLoading(true);
    const next = await fetchNextChapter(chapters[chapters.length - 1].id);
    if (next) setChapters((prev) => [...prev, next]);
    setIsLoading(false);
  }, [chapters, isLoading]);

  const sentinelRef = useIntersectionObserver(loadNext);

  const bgClass = useMemo(() => {
    if (settings.background === 'cream-paper') return 'bg-cream-paper';
    if (settings.background === 'deep-slate') return 'bg-deep-slate text-white';
    return 'bg-white';
  }, [settings.background]);

  return (
    <div className={`${bgClass} transition-colors`}>
      <div className="mx-auto w-[min(820px,94%)] pb-24 pt-6">
        {chapters.map((chapter) => (
          <article key={chapter.id} className="prose-reader mb-10 rounded-2xl border border-slate-200 bg-inherit p-5">
            <h2 className="mb-4 text-2xl font-semibold">{chapter.title}</h2>
            <div style={{ fontSize: `${settings.fontSize}px` }} className="space-y-5 leading-relaxed">
              {chapter.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </article>
        ))}
        <div ref={sentinelRef} className="h-8 text-center text-sm text-slate-500">
          {isLoading ? 'Loading next chapter...' : 'Scroll for next chapter'}
        </div>
      </div>
      <ReaderSettings settings={settings} onChange={setSettings} />
    </div>
  );
}
