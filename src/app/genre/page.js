import GenreCard from '@/components/genre-card';

const genres = ['Action', 'Fantasy', 'Romance', 'Mystery', 'Drama', 'Historical', 'Comedy', 'Sci-Fi', 'Horror'];

export default function GenrePage() {
  return (
    <div className="mx-auto w-[min(1120px,95%)] pb-16">
      <h1 className="mb-5 text-2xl font-semibold">Genre Explorer</h1>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {genres.map((genre) => (
          <GenreCard key={genre} genre={genre} />
        ))}
      </div>
    </div>
  );
}
