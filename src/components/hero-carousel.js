'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function HeroCarousel({ items }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((prev) => (prev + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, [items.length]);

  const active = items[idx];

  return (
    <div className="relative h-[380px] overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div key={active.slug} initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
          <Image src={active.cover} alt={active.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-slate/80 to-deep-slate/15" />
          <div className="relative z-10 flex h-full max-w-xl flex-col justify-end p-8 text-white">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-brand-green">Featured</p>
            <h1 className="font-[var(--font-poppins)] text-3xl font-bold">{active.title}</h1>
            <p className="mt-2 line-clamp-2 text-sm text-white/85">{active.description}</p>
            <Link href={`/novel/${active.slug}`} className="mt-5 inline-flex w-fit rounded-lg bg-brand-green px-4 py-2 text-sm font-semibold text-deep-slate">
              Read now
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
