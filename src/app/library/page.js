import Link from 'next/link';

export default function LibraryPage() {
  return (
    <div className="mx-auto w-[min(1120px,95%)] pb-16">
      <h1 className="mb-3 text-2xl font-semibold">Library</h1>
      <p className="mb-6 text-sm text-slate-600">Simpan bookmark dan lanjutkan progress baca Anda dari sini.</p>
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <p className="text-slate-500">Belum ada novel tersimpan.</p>
        <Link href="/" className="mt-3 inline-block rounded-lg bg-brand-green px-4 py-2 text-sm font-semibold text-deep-slate">
          Jelajahi Novel
        </Link>
      </div>
    </div>
  );
}
