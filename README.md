# ajayvvishwakarma-portfolio

Responsive dark premium 3D-inspired personal portfolio site for Ajay Vishwakarma.

## Sections included

- Immersive hero with branding and CTA buttons
- Animated 3D-style cards and floating shapes
- Projects showcase with tags and editable links
- About, Skills, and Experience sections
- Contact section with mailto form and social placeholders
- Accessible sticky navigation with mobile menu

## Run locally

This project is dependency-free and works as a static site.

1. Open `index.html` directly in a browser, or
2. Run a simple static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customize quickly

- Update personal text in `index.html`
- Tweak visual style variables at the top of `styles.css`
- Replace project/social placeholder links in the Projects and Contact sections


## Deployment (GitHub Pages)

This repository now includes an automated GitHub Pages deployment workflow at `.github/workflows/deploy.yml`.

1. Go to **Settings → Pages** in your GitHub repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).
4. Your site will be published on your GitHub Pages URL after the workflow succeeds.

