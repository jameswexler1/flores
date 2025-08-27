# Petal & Stem — Hugo Flower Shop (Complete Package)

This package now includes a fully-featured Hugo theme (`themes/petal-stem`) plus an `exampleSite` demonstrating the theme. It also includes:
- Product content with variants (content/products/).
- Product single layout with variant handling compatible with Snipcart.
- Static search index at `/search/products.json` for client-side search.
- Responsive, improved CSS and theme JS (mobile nav + search hooks).
- Netlify configuration and a GitHub Actions workflow template for continuous deployment.
- LICENSE (MIT).

## Quick start
1. Unzip and `cd` into the project.
2. Replace Snipcart public key in `config.toml` (root or exampleSite) with your key.
3. Add your real product images to `static/images/` (current placeholders are SVGs).
4. Run locally: `hugo server -D` (or `hugo server -s themes/petal-stem/exampleSite -D` to test exampleSite).

## Notes
- The GitHub Actions workflow uses `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` secrets for deployment; set them in GitHub settings.
- The Snipcart integration is client-side. For advanced needs (subscriptions, advanced shipping), integrate serverless functions or use a headless e-commerce backend.
