# Novel Reader Premium (Next.js 14)

Platform pembaca novel bergaya Webtoon dengan vertical reader, transisi halus, dan mock scraper pipeline.

## Instalasi

```bash
npm install
npm run dev
```

## Jalankan Scraper Engine

1. Install dependency Python:

```bash
pip install -r requirements.txt
playwright install chromium
```

2. Jalankan scraper:

```bash
python scraper_engine.py
```

Output akan berupa JSON terstruktur:

```json
{ "title": "", "author": "", "chapters": [{ "id": "", "content": [] }] }
```

## Environment Variables (Vercel)

Atur variabel berikut di **Vercel Project Settings → Environment Variables**:

- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_BASE_URL`
- `SCRAPER_PROXY_URL`
- `SCRAPER_API_KEY`

## Catatan Deploy

- Sudah memakai App Router dan pemisahan Client/Server Components.
- Route dinamis menggunakan `export const dynamic = 'force-dynamic'`.
- Semua gambar cover memakai `next/image` untuk optimasi.
