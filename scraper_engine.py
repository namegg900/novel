"""Playwright scraper engine for novel content.

Targets can include sources like Kliknovel, Bacakomik, Kiryuu, Westmanga, and NovelToon.
Use responsibly and comply with each site's terms.
"""

import asyncio
import json
import random
from dataclasses import dataclass
from typing import Any

from playwright.async_api import async_playwright
from cleaner_utils import clean_content


USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6) AppleWebKit/605.1.15 Version/17.5 Safari/605.1.15',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/123.0.0.0 Safari/537.36',
]


@dataclass
class ScrapeConfig:
    novel_url: str
    chapter_links: list[str]


async def fetch_page_content(page, url: str) -> str:
    await page.goto(url, wait_until='domcontentloaded', timeout=45000)
    await page.wait_for_timeout(1200)
    return await page.content()


async def scrape_novel(config: ScrapeConfig) -> dict[str, Any]:
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(headless=True)

        # User-Agent rotation: randomizing UA on each run helps reduce bot fingerprint consistency.
        ua = random.choice(USER_AGENTS)
        context = await browser.new_context(user_agent=ua, viewport={'width': 1440, 'height': 2200})
        page = await context.new_page()

        novel_html = await fetch_page_content(page, config.novel_url)
        title = await page.title()

        author = 'Unknown Author'
        author_locator = page.locator('a[rel="author"], .author, .post-author').first
        if await author_locator.count() > 0:
            author = (await author_locator.text_content() or author).strip()

        chapters = []
        for idx, chapter_url in enumerate(config.chapter_links, start=1):
            chapter_html = await fetch_page_content(page, chapter_url)
            cleaned = clean_content(chapter_html)
            chapters.append({
                'id': f'ch-{idx}',
                'title': f'Chapter {idx}',
                'sourceUrl': chapter_url,
                'content': cleaned,
            })

        await context.close()
        await browser.close()

    return {
        'title': title,
        'author': author,
        'chapters': chapters,
    }


async def main() -> None:
    # Replace with real target URLs before production use.
    config = ScrapeConfig(
        novel_url='https://example.com/novel',
        chapter_links=[
            'https://example.com/novel/chapter-1',
            'https://example.com/novel/chapter-2',
        ],
    )
    result = await scrape_novel(config)
    print(json.dumps(result, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    asyncio.run(main())
