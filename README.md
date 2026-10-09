# ajayvvishwakarma-portfolio

This repository is currently configured as a static site (no framework build step required).

## Project deployment profile

- Framework: Static HTML/CSS/JS site
- Package manager: Not required (no `package.json` present)
- Build command: `echo 'No build step required'` (Netlify) / none (Render static site)
- Output directory: `.` (repository root)
- Start command: Not required for static hosting
- Environment variables: None required by default

## Deploy to Netlify

1. Push your latest code to GitHub.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Connect your GitHub account and select `Ajayvvishwakarma/ajayvvishwakarma-portfolio`.
4. Netlify will read `netlify.toml` automatically:
   - Build command: `echo 'No build step required'`
   - Publish directory: `.`
5. Deploy the site.
6. For later updates, push to the connected GitHub branch and Netlify will redeploy.

> Note: No SPA fallback redirect is configured because this repository is currently static and does not use client-side routed paths.

## Deploy to Render

1. Push your latest code to GitHub.
2. In Render, click **New** → **Blueprint**.
3. Connect your GitHub account and select `Ajayvvishwakarma/ajayvvishwakarma-portfolio`.
4. Render will detect `render.yaml` and create a static web service with:
   - `env: static`
   - `buildCommand: ""`
   - `staticPublishPath: .`
5. Click **Apply** to start deployment.
6. Future pushes to the connected branch trigger automatic redeploys.

## Environment variables

No deployment environment variables are required for the current static-site setup.
If you add runtime/config variables later, document them here and configure them in both Netlify and Render dashboards before deploying.
