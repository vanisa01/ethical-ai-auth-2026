# Ethical Programming and Ethical AI - Presentation Website

This folder contains a self-contained slide website for a 15-minute presentation.

## What is inside

- index.html: Slide structure and content
- styles.css: Visual design and responsive layout
- script.js: Slide navigation and keyboard controls
- assets/: Local SVG illustrations used by slides

## External dependencies

None for rendering the slides.

The website runs from local files and does not require npm, Python packages, or a build step.

## Run locally

Option 1 (direct open):

1. Open index.html in your browser.

Option 2 (simple local server):

1. From this folder run:
   python3 -m http.server 8080
2. Open:
   http://localhost:8080

## Presentation controls

- Next slide: Right Arrow, Space, Page Down
- Previous slide: Left Arrow, Page Up
- Fullscreen: f

## GitHub repository setup

Run these commands from this folder:

1. Initialize repository
   git init
2. Create first commit
   git add .
   git commit -m "Initial presentation website"
3. Connect to your GitHub repo
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
4. Push
   git branch -M main
   git push -u origin main

## GitHub Pages deployment

This project includes an automated GitHub Pages workflow.

After pushing to GitHub:

1. Go to repository Settings -> Pages
2. In Build and deployment, set Source to GitHub Actions
3. Push to main (or rerun the latest workflow)

Your site will be published by the workflow using the repository root as the static site.

## Project files

- index.html: Main presentation slides
- styles.css: Visual style and responsive behavior
- script.js: Slide navigation and keyboard shortcuts
- assets/: Local SVG images used in slides
- .github/workflows/deploy-pages.yml: Automated GitHub Pages deployment
- .nojekyll: Ensures static assets are served as-is

## License

This project is released under the MIT License. See LICENSE.
