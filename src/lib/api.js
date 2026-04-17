const delay = (ms = 600) => new Promise((resolve) => setTimeout(resolve, ms));

const NOVELS = [
  {
    slug: 'the-green-flame',
    title: 'The Green Flame',
    author: 'Ari K. Setia',
    rating: 4.8,
    status: 'Ongoing',
    cover: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
    description: 'Petualangan urban fantasy dengan pacing cepat.',
    genres: ['Action', 'Fantasy'],
    chapters: Array.from({ length: 25 }).map((_, idx) => ({
      id: `gf-${idx + 1}`,
      title: `Chapter ${idx + 1}`,
      content: [
        'Kabut tipis menyelimuti jalan kota saat Elan berlari mengejar cahaya hijau.',
        'Ia tahu malam ini akan mengubah hidupnya selamanya.',
        'Seseorang memanggil namanya dari atap gedung yang retak.'
      ]
    }))
  },
  {
    slug: 'cream-moon-diary',
    title: 'Cream Moon Diary',
    author: 'Nayla R.',
    rating: 4.7,
    status: 'Completed',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    description: 'Slice of life romantis dengan emosi hangat.',
    genres: ['Romance', 'Drama'],
    chapters: Array.from({ length: 16 }).map((_, idx) => ({
      id: `cm-${idx + 1}`,
      title: `Episode ${idx + 1}`,
      content: ['Malam itu, Luna menulis satu kalimat terakhir sebelum hujan reda.']
    }))
  }
];

export async function fetchFeaturedNovels() {
  await delay(800);
  return NOVELS;
}

export async function fetchDailyUpdates() {
  await delay(500);
  return NOVELS.map((n) => ({ ...n, updatedAt: 'Today' }));
}

export async function fetchNovelBySlug(slug) {
  await delay(700);
  return NOVELS.find((n) => n.slug === slug) ?? NOVELS[0];
}

export async function fetchChapterById(id) {
  await delay(550);
  for (const novel of NOVELS) {
    const chapter = novel.chapters.find((c) => c.id === id);
    if (chapter) {
      return { ...chapter, novelSlug: novel.slug, novelTitle: novel.title };
    }
  }
  return { ...NOVELS[0].chapters[0], novelSlug: NOVELS[0].slug, novelTitle: NOVELS[0].title };
}

export async function fetchNextChapter(currentId) {
  await delay(450);
  for (const novel of NOVELS) {
    const idx = novel.chapters.findIndex((c) => c.id === currentId);
    if (idx !== -1) {
      return novel.chapters[idx + 1] || null;
    }
  }
  return null;
}
