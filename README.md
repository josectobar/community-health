# Community Health Interactive Model

This repository hosts a small static site for GitHub Pages with standalone community-health routes under `/models/`.

## What it does

- Provides separate routes with no in-app navigation.
- Works as a static site with no client-side routing.

## GitHub Pages

The site is configured to deploy from the `main` branch using GitHub Actions.

After GitHub Pages is enabled in repository settings, the published site will be available at the repo's Pages URL.

## Local preview

Open any route directly in a browser, or serve the repository with any static file server.

## Routes

- [models/generalized-model/](models/generalized-model/): generalized planning model.
- [models/generilized-model/](models/generilized-model/): compatibility alias for the typo in the example URL.
- [models/map-model/](models/map-model/): MAPP community planning route.
- [models/precede-model/](models/precede-model/): PRECEDE-PROCEED route.
- [models/three-fs-model/](models/three-fs-model/): three Fs route.
- [models/teach-back-practice/](models/teach-back-practice/): teach-back communication practice.
- [models/week1-collaboration-community-health-assessment/](models/week1-collaboration-community-health-assessment/): collaboration in community health assessment.
- [models/week1-community-assets-social-determinants-cultural-readiness/](models/week1-community-assets-social-determinants-cultural-readiness/): community assets, social determinants, and cultural readiness.
- [models/week1-evidence-based-practice-healthcare/](models/week1-evidence-based-practice-healthcare/): evidence-based practice in health promotion.
- [models/week1-program-rationale/](models/week1-program-rationale/): steps in creating a program rationale.
- [models/week1-theory-frameworks-community-health/](models/week1-theory-frameworks-community-health/): using theory and frameworks in community health practice.
- [models/week2-intrapersonal-level-theories/](models/week2-intrapersonal-level-theories/): intrapersonal level theories.
- [models/week2-types-models-theories-health-promotion/](models/week2-types-models-theories-health-promotion/): types of models and theories in health promotion.
- [models/week3-interpersonal-theories/](models/week3-interpersonal-theories/): interpersonal level theories.
- [models/week3-community-theories/](models/week3-community-theories/): community level theories.
- [models/week3-theory-selection/](models/week3-theory-selection/): selecting a theory or model.
- [models/ch4-needs-assessment/](models/ch4-needs-assessment/): needs assessment types and the asset-based lens.

## Embed snippets

```html
<iframe title="Generalized Health Planning Model" src="models/generalized-model/"></iframe>
<iframe title="Generalized Health Planning Model Compatibility Route" src="models/generilized-model/"></iframe>
<iframe title="MAPP Framework Interactive" src="models/map-model/"></iframe>
<iframe title="PRECEDE-PROCEED Interactive Model" src="models/precede-model/"></iframe>
<iframe title="The Three Fs of Program Planning" src="models/three-fs-model/"></iframe>
<iframe title="Collaboration in Community Health Assessment" src="models/week1-collaboration-community-health-assessment/"></iframe>
<iframe title="Community Assets, Social Determinants, and Cultural Readiness" src="models/week1-community-assets-social-determinants-cultural-readiness/"></iframe>
<iframe title="Evidence-Based Practice in Health Promotion" src="models/week1-evidence-based-practice-healthcare/"></iframe>
<iframe title="Steps in Creating a Program Rationale" src="models/week1-program-rationale/"></iframe>
<iframe title="Using Theory and Frameworks in Community Health Practice" src="models/week1-theory-frameworks-community-health/"></iframe>
<iframe title="Intrapersonal Level Theories" src="models/week2-intrapersonal-level-theories/"></iframe>
<iframe title="Types of Models and Theories in Health Promotion" src="models/week2-types-models-theories-health-promotion/"></iframe>
<iframe title="Interpersonal Level Theories" src="models/week3-interpersonal-theories/"></iframe>
<iframe title="Community Level Theories" src="models/week3-community-theories/"></iframe>
<iframe title="Selecting a Theory or Model" src="models/week3-theory-selection/"></iframe>
<iframe title="Needs Assessment: Types, Purposes &amp; the Asset Lens" src="models/ch4-needs-assessment/"></iframe>
```

## Files

- [index.html](index.html): minimal root page.
- [assets/site.css](assets/site.css): shared styling for all routes.
- [assets/site.js](assets/site.js): shared renderer and phase data.
- [.github/workflows/pages.yml](.github/workflows/pages.yml): the GitHub Pages deployment workflow.
