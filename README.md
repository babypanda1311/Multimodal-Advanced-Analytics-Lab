# Multimodal Advanced Analytics Lab - website

A fast, dependency-free static website (HTML + CSS + vanilla JS) for GitHub Pages.
All content lives in two data files, so you never need to touch the HTML.

## Publish on GitHub Pages (5 minutes)
1. Create a new repository on GitHub, e.g. `maa-lab` (public).
2. Upload everything in this folder (or run `git init && git add . && git commit -m "Initial site" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`).
3. In the repo go to **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
4. The included workflow (`.github/workflows/pages.yml`) publishes the site on every push.
   Your site will be at `https://<your-username>.github.io/maa-lab/`.
   (Alternative without Actions: Source = "Deploy from a branch", branch `main`, folder `/ (root)`.)

## Update content
| What | File |
|---|---|
| Lab name, about, stats, director / co-directors, research themes, funding, students, collaborators, awards, news, contact | `assets/js/data.js` |
| Publications (journal, conference, books) | `assets/js/publications.js` |
| Colours, fonts, layout | `assets/css/style.css` |
| Hero image | `assets/img/hero.jpg` |

### Quick edits
* **Add co-directors:** edit the two `coDirectors` entries in `data.js` (search for `TODO`).
* **Add a portrait:** put a square JPG in `assets/img/` and set `photo: "assets/img/name.jpg"`.
* **Add a paper:** copy a line in `publications.js`, paste it at the top of the list, edit it.
* **Add a student:** copy a line in the `students` array and set `st: "current"` or `"graduated"`.
* **Add news:** add a line to `news` in `data.js`.

## Preview locally
```
python -m http.server 8000
```
then open http://localhost:8000

## Things to check before going live
* Co-director names (placeholders at present).
* Student status for 2026 (source list is the 2024 promotion CV).
* 2026 publications and news (the source CV runs to 2025).
* Headline statistics in `data.js` (`stats`).

Hero visual in this site was generated with Microsoft Copilot.
