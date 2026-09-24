# Levers for Change — V27

The current approved website is in `site/`. Vercel serves that folder using `vercel.json`, without an install or build step.

## Edit and preview

- Editable templates and styles: `src/`
- Public website data: `data/`
- Rebuild after editing: `python build/5_build_site.py`
- Preview: `python -m http.server 4173 --directory site`

The checked-in site includes the updated ConnectFacts AI content and plain AI lettering, client logos, leadership and Saudi sections. Routes use URL hashes.

The earlier React prototype remains in the root and `components/` for reference; it is not the Vercel output.

Contact forms open the visitor's email application. No backend or API keys are required.
