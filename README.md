# PRECEDE-PROCEED Interactive Model

This repository hosts a small static site for GitHub Pages with four standalone PRECEDE-PROCEED routes.

## What it does

- Displays the eight PRECEDE-PROCEED phases in an interactive SVG layout.
- Provides separate routes for the overview, assessment, implementation, and evaluation pages.
- Lets users click any phase to see a plain-language explanation and the Mesa Verde vaping example.
- Works as a static site with no client-side routing.

## GitHub Pages

The site is configured to deploy from the `main` branch using GitHub Actions.

After GitHub Pages is enabled in repository settings, the published site will be available at the repo's Pages URL.

## Local preview

Open [index.html](index.html) directly in a browser, or serve the repository with any static file server.

## Routes

- [index.html](index.html): landing page for the four routes.
- [precede-model/](precede-model/): full model overview.
- [social-assessment/](social-assessment/): assessment-focused route.
- [implementation/](implementation/): implementation-focused route.
- [evaluation/](evaluation/): evaluation-focused route.

## Files

- [assets/site.css](assets/site.css): shared styling for the landing page and all routes.
- [assets/site.js](assets/site.js): shared renderer and phase data.
- [.github/workflows/pages.yml](.github/workflows/pages.yml): the GitHub Pages deployment workflow.