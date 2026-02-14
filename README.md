# DriftQ Website

Marketing site + docs for DriftQ

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit docs

Docs live in `content/docs/*.mdx`. Update the sidebar in `lib/docs-nav.ts`.

## Analytics

This site supports basic traffic analytics.

### Local dev

Add a GA4 measurement ID (format: `G-XXXXXXXXXX`) to `.env.local`:

```bash
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

### GitHub Pages deploy

Since this deploy uses a static build (`out/`), the GA4 ID must exist at build time. Set a GitHub Actions repository variable named `NEXT_PUBLIC_GA4_ID`.
