# Rony — Retro Portfolio

A fully responsive, dark-first portfolio for **Md. Mizanur Rahman Rony**, built from the provided CV and full résumé. Lightweight **HTML + CSS + JavaScript**, no build step required. Works on GitHub Pages with GSAP motion enhancement, local theme storage, and direct document downloads.

## Features

- Nunito typography and warm retro palette with light/night themes
- Responsive navigation and mobile-friendly sections
- Accessible landmarks, skip link, meaningful focus states, reduced-motion support
- GSAP entrance and scroll motion (graceful fallback if the CDN is blocked)
- CV PDF and separate concise résumé PDF included in `assets/`
- SEO metadata, Open Graph / social preview, Person structured data, `robots.txt`, `sitemap.xml`
- Github Actions workflow for GitHub Pages

## Publish to GitHub Pages

1. Create a **public** GitHub repository named `rony-retro-portfolio` on the GitHub account `mrrony321` (or change the site URLs noted below).
2. Upload all files and folders **including `.github/workflows/deploy.yml`** to the **root** of the `main` branch. Keep `index.html` in the repo root.
3. In repository **Settings → Pages**, choose **GitHub Actions** as Build and deployment source.
4. Push to `main`. The workflow deploys to `https://mrrony321.github.io/rony-retro-portfolio/` after completion.
5. Check that both **Download CV** and **Download résumé** work after deployment.

To test locally, use a static server such as `python -m http.server 8000` in this folder and open `http://localhost:8000`.

## Important before publication

The repo name and eventual URL above are **assumptions**, not a deployed URL. If you choose another GitHub username, repository, or a custom domain, search and replace `https://mrrony321.github.io/rony-retro-portfolio/` in:
- `index.html` (canonical, Open Graph, Twitter image URL, JSON-LD)
- `sitemap.xml`
- `robots.txt`

Also update the GitLab and previous portfolio links if newer ones are available. Your CV did not include a verified LinkedIn or GitHub profile URL, so these links have intentionally not been invented.

### Project descriptions

The "Selected Work" cards describe contributions based on the supplied CV; they are not links to public code repositories and do not claim standalone ownership. Internal project details were intentionally left high-level.

### Documents

- `assets/Mizanur_Rahman_Rony_CV.pdf` — supplied two-page CV
- `assets/Mizanur_Rahman_Rony_Resume.pdf` — concise résumé generated from the supplied experience/skills

To replace either file, keep the names unchanged or update corresponding links in `index.html`.

### External assets

Nunito uses Google Fonts and GSAP uses cdnjs. The site remains legible and usable without either network resource (fallback fonts / no animations). For strict offline hosting, self-host equivalent font and animation assets with their relevant licenses.


## Version 2 enhancements
- Updated portrait: `assets/mizanur-rahman-rony.webp` (from the supplied PNG). Original image remains outside the website bundle.
- Portrait gently floats with GSAP (CSS fallback); hovering or keyboard-focus pauses it. Reduced-motion preferences disable the effect.
- Icon set: Lucide via CDN; the site remains navigable without the CDN.
- Email and WhatsApp buttons in the contact section. WhatsApp uses the phone number from the CV (01765666762); **verify that this number is WhatsApp-enabled before publishing**.
- “And more” expands three additional representative contributions. These are work categories, not fabricated public repositories or confidential project links.
- Updated social-sharing thumbnail in PNG format.

### Profile photo
The home-page portrait is stored at `assets/mizanur_rahman_rony.png` and linked from `index.html`. Keep file names and letter casing unchanged on GitHub Pages (case-sensitive). This ZIP contains files directly at the archive root: upload those files/folders to the **repository root**.
