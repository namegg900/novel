"""Utilities for cleaning scraped HTML content."""

import re
from bs4 import BeautifulSoup

AD_PATTERNS = [
    re.compile(r'ad[sx]?[-_ ]?container', re.I),
    re.compile(r'banner', re.I),
    re.compile(r'popunder|popup', re.I),
    re.compile(r'sponsored', re.I),
]


def clean_content(html: str) -> list[str]:
    """Remove script/iframe/ads and return cleaned text paragraphs."""
    soup = BeautifulSoup(html, 'lxml')

    for tag in soup(['script', 'iframe', 'noscript', 'style']):
        tag.decompose()

    for node in soup.find_all(True):
        attrs = ' '.join([str(node.get('id', '')), ' '.join(node.get('class', []))])
        if any(pattern.search(attrs) for pattern in AD_PATTERNS):
            node.decompose()

    paragraphs = []
    for el in soup.select('article p, .chapter-content p, .entry-content p, p'):
        text = ' '.join(el.get_text(' ', strip=True).split())
        if text and len(text) > 20:
            paragraphs.append(text)

    if not paragraphs:
        fallback_text = ' '.join(soup.get_text(' ', strip=True).split())
        if fallback_text:
            paragraphs.append(fallback_text)

    return paragraphs
