import Image from 'next/image';
import Link from 'next/link';

export default function NovelCard({ novel }) {
  return (
    <Link
      href={`/novel/${novel.slug}`}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={novel.cover}
          alt={novel.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 20vw"
        />
      </div>
      <div className="space-y-1 p-3">
        <h3 className="line-clamp-1 font-semibold">{novel.title}</h3>
        <p className="text-xs text-slate-500">{novel.author}</p>
      </div>
    </Link>
  );
}
