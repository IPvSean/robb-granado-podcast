# robb-granado-podcast

Static website for **ROBBCAST** — a comedy/fandom podcast hosted by Robb Granado. The site is built for [GitHub Pages](https://pages.github.com/) with HTML, CSS, and vanilla JavaScript (no build step).

**ROBBCAST** presents itself like a major sports and culture show: polished layout, serious typography, and confident production. The running joke is that every conversation eventually lands on UNC football, Chapel Hill traffic, restaurants closing too early, or zip lines.

**Tagline:** Celebrities. Carolina. Complaints. Zip Lines.

**Live site (after enabling Pages):** [https://ipvsean.github.io/robb-granado-podcast/](https://ipvsean.github.io/robb-granado-podcast/)

## Project structure

```
index.html              # Single-page layout, sections, image replacement comments
css/styles.css          # Brand styles, responsive layout, animations
js/main.js              # Content config, rendering, navigation, Easter eggs
assets/images/          # Hero, about, episode, and OG placeholders
assets/icons/           # favicon.svg
.nojekyll               # Tells GitHub Pages not to run Jekyll
```

## Preview locally

GitHub Pages serves files over HTTP. For the closest match to production, use a simple local server from the repo root:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

You can also open `index.html` directly in a browser; most features work, but a local server is recommended.

## Add or edit episodes

Open [`js/main.js`](js/main.js) and find the block:

```text
// ROBBCAST EPISODES
// ADD NEW EPISODES HERE
```

Add objects to the `episodes` array. **The first entry is the featured “Latest Episode”** on the homepage. Each episode supports:

| Field         | Purpose                                      |
|---------------|----------------------------------------------|
| `number`      | Display number (e.g. `"006"`)                |
| `title`       | Episode title                                |
| `description` | Short blurb                                  |
| `date`        | Display date string                          |
| `thumbnail`   | Image path (default: episode placeholder)    |
| `watchUrl`    | YouTube (or video) link                      |
| `listenUrl`   | Spotify (or audio) link                      |

You do not need to edit `index.html` to add episodes.

## Replace Robb’s photos

In [`js/main.js`](js/main.js), edit **ROBB PHOTOS** (`robbPhotos.hero`, `robbPhotos.about`) and **about gallery** (`aboutGallery` array). Paths are under `assets/images/`. Hero and About `src` in `index.html` should stay in sync with `robbPhotos` if you change them there.

## Update YouTube, Spotify, and social links

In [`js/main.js`](js/main.js):

- **PODCAST LINKS** — `latestWatch` and `latestListen` (hero “Watch Latest Episode” button)
- **SOCIAL LINKS** — footer YouTube, Spotify, Apple Podcasts, Instagram
- Per-episode `watchUrl` and `listenUrl` inside each episode object

Replace `PLACEHOLDER` URLs with your real links.

## Robb-O-Meter and Zip Line Index

Same file, labeled sections:

- **ROBB-O-METER** — `label` and `value` (0–100)
- **ZIP LINE INDEX** — locations and scores (0–10)

## Open Graph image

The site uses `assets/images/og-cover.svg` by default. For best social previews, add a 1200×630 image (e.g. `assets/images/og-cover.jpg`) and update the `og:image` meta tag in `index.html` (see the comment in the `<head>`).

## GitHub Pages deployment

This repo is a **static site** (no build step). GitHub Pages is configured to deploy via **GitHub Actions** using [`.github/workflows/static-gh-pages.yml`](.github/workflows/static-gh-pages.yml).

1. Push to the **`main`** branch.
2. The **Deploy static site to GitHub Pages** workflow uploads the repo root and publishes it.
3. Site URL: [https://ipvsean.github.io/robb-granado-podcast/](https://ipvsean.github.io/robb-granado-podcast/)

In **Settings → Pages**, **Build and deployment** should show **Source: GitHub Actions** (not Jekyll). If GitHub added a Jekyll workflow when you first enabled Pages, use this static workflow instead so `index.html`, `css/`, and `js/` are served as-is.

The [`.nojekyll`](.nojekyll) file at the repo root is included in the deployment artifact.

## Easter eggs (for maintainers)

- Click the **ROBBCAST** logo in the nav **5 times** quickly → “ZIP LINE MODE ACTIVATED” and a brief zip-line animation.
- Stay on the page **~45 seconds** → toast about Town Hall Grill.
- Press **Z** three times within ~2 seconds (when not typing in a field) → “ZIP LINE APPROVED.”

## Disclaimer

ROBBCAST is fictional entertainment. The site copy is not affiliated with the University of North Carolina or any businesses mentioned.
