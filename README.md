# Graynotes

A quiet editorial notebook. Static HTML, one stylesheet, no storefront.

## Local

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8080 --directory .
```

Notes live in `notes/`. Shared layout classes are in `css/site.css`.

## What this is

US-first (America/Chicago). Product names appear because they are the subject of the note. There are no buy buttons, no affiliate query strings, and no tracking IDs. If product links are added later, they should be labeled on the page and in `privacy.html`.

## Files

- `index.html` — list of notes
- `about.html`, `privacy.html`, `contact.html`
- `notes/*.html` — twelve evergreen notes, August 2026
- `sitemap.xml`, `feed.xml`
- `css/site.css`

Replace `https://graynotes.example` in the sitemap and feed with the real origin before publishing. Replace the placeholder mail address on the contact page.

Do not treat this folder as a shop.
