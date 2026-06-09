# Community Halth Interactive Model

This repository hosts a small static site for GitHub Pages with four standalone community-health routes under `/models/`.

## What it does

- Provides four separate routes with no in-app navigation.
- Works as a static site with no client-side routing.

## GitHub Pages

The site is configured to deploy from the `main` branch using GitHub Actions.

After GitHub Pages is enabled in repository settings, the published site will be available at the repo's Pages URL.

## Local preview

Open any route directly in a browser, or serve the repository with any static file server.

## Routes

- [community-health/](models/generalized-model/): generalized planning model.
- [community-health/](models/map-model/): MAPP community planning route.
- [community-health/](models/precede-model/): PRECEDE-PROCEED route.
- [community-health/](models/three-fs-model/): three Fs route.
- [community-health/](models/generilized-model/): compatibility alias for the typo in the example URL.

## Files

- [index.html](index.html): minimal root page.
- [assets/site.css](assets/site.css): shared styling for all routes.
- [assets/site.js](assets/site.js): shared renderer and phase data.
- [.github/workflows/pages.yml](.github/workflows/pages.yml): the GitHub Pages deployment workflow.
