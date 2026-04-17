import HeroCarousel from '@/components/hero-carousel';
import NovelCard from '@/components/novel-card';
import GenreCard from '@/components/genre-card';
import { fetchDailyUpdates, fetchFeaturedNovels } from '@/lib/api';

export default async function HomePage() {
  const [featured, daily] = await Promise.all([fetchFeaturedNovels(), fetchDailyUpdates()]);
  const genres = ['Action', 'Fantasy', 'Romance', 'Sci-Fi', 'Thriller', 'Slice of Life'];

  return (
    <div className="mx-auto w-[min(1120px,95%)] space-y-12 pb-16">
      <HeroCarousel items={featured} />

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Daily Updates</h2>
          <span className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-green">Updated Today</span>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {daily.map((novel) => (
            <NovelCard key={novel.slug} novel={novel} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Explore Genre</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {genres.map((genre) => (
            <GenreCard key={genre} genre={genre} />
          ))}
        </div>
      </section>
    </div>
  );
}
