import Image from 'next/image';
import ChapterList from '@/components/chapter-list';
import { fetchNovelBySlug } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function NovelDetailPage({ params }) {
  const novel = await fetchNovelBySlug(params.slug);

  return (
    <div className="mx-auto w-[min(1120px,95%)] pb-16">
      <section className="relative mb-8 overflow-hidden rounded-3xl">
        <Image src={novel.cover} alt={novel.title} fill className="object-cover blur-2xl scale-110" sizes="100vw" />
        <div className="relative z-10 grid gap-6 bg-deep-slate/65 p-6 backdrop-blur-sm md:grid-cols-[200px_1fr]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
            <Image src={novel.cover} alt={novel.title} fill className="object-cover" sizes="200px" />
          </div>
          <div className="space-y-3 text-white">
            <h1 className="font-[var(--font-poppins)] text-3xl font-bold">{novel.title}</h1>
            <p className="text-sm text-white/90">{novel.description}</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded bg-white/15 px-3 py-1">Author: {novel.author}</span>
              <span className="rounded bg-white/15 px-3 py-1">Rating: {novel.rating}</span>
              <span className="rounded bg-white/15 px-3 py-1">Status: {novel.status}</span>
            </div>
          </div>
        </div>
      </section>

      <ChapterList slug={novel.slug} chapters={novel.chapters} />
    </div>
  );
}
